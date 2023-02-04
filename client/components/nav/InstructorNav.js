import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const InstructorNav = () => {
  const [current, setCurrent] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const handleChange = async() => {
    if(toggle)  handleAdd();
    else handleRemove();
    setToggle(!toggle)
  };

const handleAdd=()=>{
let el = document.getElementById("insNav");
el.style.display = "none";
}
const handleRemove=()=>{
let el = document.getElementById("insNav");
el.style.display = "flex";
}

  return (
    <div className="side-navbar">
      <MenuUnfoldOutlined className="burgermenu" onClick={handleChange}/>
    <div className="nav" id="insNav">
      <Link href="/instructor">
        <a className={`nav-link ${current === "/instructor" && "active-current"}`}>
          Dashboard
        </a>
      </Link>
      <Link href="/instructor/course/create">
        <a
          className={`nav-link ${
            current === "/instructor/course/create" && "active-current"
          }`}
        >
          Course Create
        </a>
      </Link>

      <Link href="/instructor/revenue">
        <a
          className={`nav-link ${
            current === "/instructor/revenue" && "active-current"
          }`}
        >
          Revenue
        </a>
      </Link>
    </div>
    </div>
  );
};

export default InstructorNav;
