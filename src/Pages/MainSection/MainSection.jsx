import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const MainSection = ({ data }) => {
  return (
    <div>
      <h2>Select your favorite campaign:</h2>
      <ul>
        {data.map((campaign) => {
          return (
            <li key={uuidv4()}>
              <Link to={`/campaign/${campaign.campaign_name}`} state={{ campaign: campaign }} className="font-bold">
                {campaign.campaign_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainSection;
