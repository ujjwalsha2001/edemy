import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";

const LeaderCard = () => {
  return (
    <div
      className="mb-2 leadercard"
      style={{
        border: "2px solid rgba(0, 0, 0, 0.2)",
        padding: "1rem",
        borderRadius: "10px",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center",
        flexDirection:"column"
      }}
    >
      <div>
        <img
          src="https://images.indianexpress.com/2020/04/online759.jpg"
          alt=""
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          }}
        ></img>
        <p style={{ fontSize: "1.3rem" }}>Sandeep</p>
      </div>
      <h5 className="w-100 text-center">Rs. 100000</h5>
    </div>
  );
};

export default LeaderCard;
