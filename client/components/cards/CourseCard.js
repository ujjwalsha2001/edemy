import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  return (
    
    <div key={course._id} className="mb-5 courseCard">
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className="subCard"
          cover={
            <img
              src={image? image.Location : "https://images.indianexpress.com/2020/04/online759.jpg"}
              alt={name}
              style={{ height: "200px", objectFit: "fill" ,borderRadius:"10px"}}
            />
          }
        >
          <h2 className="font-weight-bold courseTitle">{name}</h2>
          <div className="d-flex justify-content-between">
            <p className="courseAuthor">by {instructor.name}</p>
            <Badge
              count={category}
              style={{ backgroundColor: "#062868",}}
            />
          </div>
          <h4 className="coursePrice">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "Free"}
          </h4>
        </Card>
      </a>
    </Link>

    </div>
  );
};

export default CourseCard;
