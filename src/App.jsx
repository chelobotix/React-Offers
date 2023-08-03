import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const coverPhotos = [];

  const selectMedia = () => {
    console.log(data);
    data.campaigns.map((campaign, index) => {
      coverPhotos.push([]);
      campaign.medias.map((media) => {
        coverPhotos[index] = [...coverPhotos[index], media];
      });
    });
  };

  const detectCoverPhotos = async () => {
    coverPhotos.map((media) => {
      media.map((obj) => {
        async function fetchImageSize() {
          try {
            const dimensions = await getImageSize(obj.cover_photo_url);
            console.log(dimensions);
          } catch (error) {
            console.error(error);
          }
        }
        // if (dimensions.width > dimensions.height) {
        //   console.log(obj.cover_photo_url);
        // }
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("https://www.plugco.in/public/take_home_sample_feed")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);

            setIsLoading(false);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      selectMedia();
    }
  }, [data]);

  return <div>{isLoading ? <h1>Loading...</h1> : <Home campaigns={data.campaigns} />}</div>;
}

export default App;
