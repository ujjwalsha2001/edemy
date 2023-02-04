import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Avatar } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";
import course from "../../../server/models/course";
import AffiliateRoute from "../../components/routes/AffiliateRoute";

const affiliateIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/user-courses");
      setCourses(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  //user && console.log(user)
  return (
    <AffiliateRoute>
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
        />
      )}

      <div className="ap-sub-heading">Dashboard</div>
      <div className="welcome-user">
        <h5>
          <span>Welcome</span> user
        </h5>
      </div>
      <div className="dashboard-content">
        <div className="sales-details" >
          <h5>Sales Details</h5>
          <p>Your Sales Progress Will Be Shown Here..!</p>
        </div>
        <div className="user-earning-details">
          <div className="user-detail-showcase">
            <img
              src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              style={{ height: "6rem" , width: "6rem",padding: "5px"}}
            ></img>
            <h4>{user && user.name}</h4>
            <h6>{user && user.email}</h6>
          </div>
          <div className="earning-detail-showcase">
            <div className="earning-element" style={{backgroundColor:"#fd3c971f"}}>
              <h6 style={{backgroundColor:"#fd3c97"}}>Today's Earnings</h6>
              <p>Rs. 1000</p>
            </div>
            <div className="earning-element" style={{backgroundColor:"#6d81f521"}}>
              <h6 style={{backgroundColor:"#6d81f5"}}>Last 7 days Earnings</h6>
              <p>Rs. 1000</p>
            </div>
            <div className="earning-element" style={{backgroundColor:"#0dc8de1c"}}>
              <h6 style={{backgroundColor:"#0dc8de"}}>Last 30 days Earnings</h6>
              <p>Rs. 1000</p>
            </div>
            <div className="earning-element" style={{backgroundColor:"#ff783d1c"}}>
              <h6 style={{backgroundColor:"#ff783d"}}>All time Earnings</h6>
              <p>Rs. 1000</p>
            </div>
          </div>
        </div>
      </div>
    </AffiliateRoute>
  );
};

export default affiliateIndex;
