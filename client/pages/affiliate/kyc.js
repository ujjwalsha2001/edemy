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
  return (
    <AffiliateRoute>
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
        />
      )}
      <div className="ap-sub-heading">KYC</div>
      <div className="d-flex justify-content-around">
        <div className="kyc-checkbox">
          <input type="checkbox" name="pi" id="pi" checked={step > 1}></input>
          <label for="pi">Profile Information</label>
        </div>
        <div className="kyc-checkbox">
          <input type="checkbox" name="ad" id="ad" checked={step > 2}></input>
          <label for="ad">Account Details</label>
        </div>
        <div className="kyc-checkbox">
          <input type="checkbox" name="pc" id="pc" checked={step > 3}></input>
          <label for="pc">PAN Information</label>
        </div>
      </div>
      {step == 1 ? (
        <ProfileForm nextStep={nextStep} prevStep={prevStep} />
      ) : step == 2 ? (
        <AccountDetails nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <PanForm nextStep={nextStep} prevStep={prevStep} />
      )}
    </AffiliateRoute>
  );
};

export default affiliateIndex;
