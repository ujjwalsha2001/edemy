import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Avatar } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";
import course from "../../../server/models/course";
import AffiliateRoute from "../../components/routes/AffiliateRoute";
import ProfileForm from "../../components/forms/KYC/ProfileForm";
import AccountDetails from "../../components/forms/KYC/AccountDetails";
import PanForm from "../../components/forms/KYC/PanForm";
import LeaderCard from "../../components/cards/leaderCard";

const affiliateIndex = () => {
    const [loading, setLoading] = useState(false);
  //user && console.log(user)
  return (
    <AffiliateRoute>
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
        />
      )}
      <h1 className="jumbotron text-center square mb-5">Leaderboard</h1>
        
        <div className="leaderboard d-flex flex-wrap justify-content-between">
            <div>
                <h5>Last 7 days</h5>
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
            </div>
            <div>
                <h5>Last 30 days</h5>
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
            </div>
            <div>
                <h5>Last Year</h5>
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
            </div>
            <div>
                <h5>All Time</h5>
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
                <LeaderCard />
            </div>
        </div>
    </AffiliateRoute>
  );
};

export default affiliateIndex;
