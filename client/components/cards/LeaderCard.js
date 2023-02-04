import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";


const LeaderCard = () => {
  return (
    
    <div className="mb-2" style={{border:"2px solid blue",padding:"1rem",borderRadius:"10px"}}>
        <div className="w-100 d-flex mb-1 flex-wrap align-items-center">
            <img src="https://images.indianexpress.com/2020/04/online759.jpg" alt="" style={{width:"3rem",height:"3rem",borderRadius:"50%",marginRight:"2rem"}}></img>
            <p style={{fontSize:"1.3rem"}}>Sandeep</p>
        </div>
        <h5 className="w-100 text-center">Rs. 100000</h5>
    </div>
  );
};

export default LeaderCard;
