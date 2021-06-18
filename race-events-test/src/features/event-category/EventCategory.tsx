import EventThumbnail from "./EventThumbnail";
import "./EventCategory.less";
import { Link } from "react-router-dom";

const EventCategory: React.FC<{}> = (props) => {
  return (
    <div className="box-top">
      <h3>Events</h3>
      <ul style={{ padding: 0 }}>
        <li>
          <Link to="/events/races?sportType=running">
            <EventThumbnail
              title="Running"
              thumbnail="/icons/category-run.png"
              backgroundColor="rgb(8, 191, 169)"
            />
          </Link>
        </li>
        <li>
          <Link to="/events/races?sportType=cycling">
            <EventThumbnail
              title="Cycling"
              thumbnail="/icons/category-bike.png"
              backgroundColor="rgb(58, 183, 240)"
            />
          </Link>
        </li>
        <li>
          <Link to="/events/races?sportType=walking">
            <EventThumbnail
              title="Walking"
              thumbnail="/icons/category-walk.png"
              backgroundColor="rgb(255, 112, 67)"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EventCategory;
