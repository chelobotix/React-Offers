import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";

const Home = ({ campaigns }) => {
  return (
    <div className="bg-slate-400 p-0 m-0">
      <MainSection campaigns={campaigns} />
    </div>
  );
};

export default Home;
