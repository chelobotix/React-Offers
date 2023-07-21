import { useLocation } from "react-router-dom";

const Campaign = () => {
  const location = useLocation();
  const { campaign } = location.state;
  return (
    <div>
      <div>
        <div>
          <p>{campaign.campaign_name}</p>
          <p>{campaign.pay_per_install}</p>
        </div>
        <img src={campaign.campaign_icon_url} alt="" />
      </div>
    </div>
  );
};

export default Campaign;
