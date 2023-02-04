import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const UserNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const [toggle, setToggle] = useState(false);

  const handleChange = async() => {
      if(toggle) handleAdd();
      else handleRemove();
     setToggle(!toggle)
    };

const handleAdd=()=>{
  let el = document.getElementById("userNav");
  el.style.display = "none";
}
const handleRemove=()=>{
  let el = document.getElementById("userNav");
  el.style.display = "flex";
}

  return (
    <div className="side-navbar">
    <MenuUnfoldOutlined className="burgermenu" onClick={handleChange}/>
    <div className="nav" id="userNav">
      <Link href="/user">
      <h6 className="nav-ap-heading">Bundle</h6>
      </Link>
      <Link href="/user">
        <a className={`nav-link ${current === "/affiliate" && "active-current"}`}>
            Marketing Mastery
        </a>
      </Link>
      <Link href="/user">
        <a className={`nav-link ${current === "/affiliate/kyc" && "active-current"}`}>
          Branding Mastery
        </a>
      </Link>
      <Link href="/user">
        <a className={`nav-link ${current === "/affiliate/affiliates" && "active-current"}`}>
          Traffic Mastery
        </a>
      </Link>
      <div className="line"></div>
      <Link href="/user">
        <h6 className="nav-ap-heading">Courseflix</h6>
      </Link>
      <Link href="/user">
        <a className={`nav-link ${current === "/affiliate/affiliates" && "active-current"}`}>
          Adobe After Effects
        </a>
      </Link>
      <div className="line"></div>
      <Link href="/user">
        <h6 className="nav-ap-heading">Live QnA</h6>
      </Link>
    </div>
    </div>
  );
};

export default UserNav;
