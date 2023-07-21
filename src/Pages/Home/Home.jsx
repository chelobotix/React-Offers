import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";

const Home = ({ data }) => {
  return (
    <div>
      <Header />
      <MainSection data={data} />
      <Footer />
    </div>
  );
};

export default Home;
