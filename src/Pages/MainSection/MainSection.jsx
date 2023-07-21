import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import link from "@/assets/images/link.png";
import download from "@/assets/images/download.png";
import playArrow from "@/assets/images/play.png";

const MainSection = ({ campaigns }) => {
  const [isPlaying, setIsPlaying] = useState({
    playing: false,
    actualVideo: "",
  });
  const videoState = [];

  const pushVideo = (url, app, video) => {
    videoState.push({
      app: app,
      video: video,
      url: url,
    });
  };

  const campaignCarrouselWidth = (arrayLength) => {
    const total = arrayLength * 250 + 250;
    return `${total}px`;
  };

  useEffect(() => {
    console.log(videoState);
  }, []);

  return (
    <div className="flex flex-col items-center w-[640px] min-w-[400px] mx-auto bg-white">
      <ul className="flex flex-col items-center">
        {campaigns.map((campaign, i) => {
          return (
            <li key={uuidv4()} className="border-t-2 border-slate-200 w-full mt-2">
              <div className="flex items-center mt-2 p-3">
                <img src={campaign.campaign_icon_url} alt="" className="w-2/6 rounded-3xl" />
                <div className="pl-4">
                  <p className="text-5xl font-semibold">{campaign.campaign_name}</p>
                  <p className="text-4xl font-semibold text-green-600">
                    {`${campaign.pay_per_install} `}
                    <span className="font-normal">per install</span>
                  </p>
                </div>
              </div>

              <div className="overflow-x-scroll pl-4 w-[640px]">
                <ul
                  className="flex gap-1  bg-orange-400 w-[1000px] "
                  style={{ width: campaignCarrouselWidth(campaign.medias.length) }}
                >
                  {campaign.medias.map((media, j) => {
                    return (
                      <li key={uuidv4()} className="w-[250px] min-w-[250px] max-w-[250px] h-[300px] bg-black">
                        {/* <img src={media.cover_photo_url} alt="" />
                        <img src={playArrow} alt="" /> */}
                        {pushVideo(media.download_url, i + 1, j)}
                        <div>
                          <img src={link} alt="" />
                          <img src={download} alt="" />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainSection;
