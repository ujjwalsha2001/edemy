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

const affiliateIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

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
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
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
      <h1 className="jumbotron text-center square mb-3">Affiliate Panel</h1>
      <h3 className="ap-sub-heading">Affiliate Information</h3>
      <div className="affiliate-box">
        <div className="d-flex flex-wrap align-content-center">
          <h4>Referral Code : </h4>
          <h4>12341232</h4>
        </div>
        <div className="d-flex flex-wrap align-content-center">
          <h4>Referral Link : </h4>
          <select name="courses" id="courses">
            <option value="All">All Courses</option>
            <option value="Course1">Course 1</option>
            <option value="Course2">Course 2</option>
            <option value="Course3">Course 3</option>
            <option value="Course4">Course 4</option>
          </select>
          <div className="mx-3">www.course.com?ref=1234</div>
        </div>
      </div>
    </AffiliateRoute>
  );
};

export default affiliateIndex;
