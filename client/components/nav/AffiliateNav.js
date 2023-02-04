import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const AffiliateNav = () => {
  const [current, setCurrent] = useState("");


  const [toggle, setToggle] = useState(false);

    const handleChange = async() => {
        if(toggle)  handleAdd();
        else handleRemove();
        setToggle(!toggle)
      };

  const handleAdd=()=>{
    let el = document.getElementById("affNav");
    el.style.display = "none";
  }
  const handleRemove=()=>{
    let el = document.getElementById("affNav");
    el.style.display = "flex";
  }

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
      <div className="side-navbar">
      <MenuUnfoldOutlined className="burgermenu" onClick={handleChange}/>
    <div className="nav" id="affNav">
      <Link href="/affiliate">
        <h6 className="nav-ap-heading">Affiliate Panel</h6>
      </Link>
      <Link href="/affiliate">
        <a className={`nav-link ${current === "/affiliate" && "active-current"}`}>
            Dashboard
        </a>
      </Link>
      <Link href="/affiliate/kyc">
        <a className={`nav-link ${current === "/affiliate/kyc" && "active-current"}`}>
          KYC
        </a>
      </Link>
      <Link href="/affiliate/affiliates">
        <a className={`nav-link ${current === "/affiliate/affiliates" && "active-current"}`}>
          Affiliates
        </a>
      </Link>
      <Link href="/affiliate/leaderboard">
        <a className={`nav-link ${current === "/affiliate/leaderboard" && "active-current"}`}>
          Leaderboard
        </a>
      </Link>
      <div className="line"></div>
      <Link href="/support">
        <a className={`nav-link ${current === "support" && "active-current"}`}>
          Support
        </a>
      </Link>
    </div>
    </div>
  );
};

export default AffiliateNav;