import React from "react";
import { useSelector } from "react-redux";
import { selectFeatured } from "../../store/events/eventsSelector";
import RECarousel from "../RECarousel/RECarousel";
import "./FeatureSlider.less";

const FeatureSlider: React.FC<{}> = () => {
  const featured = useSelector(selectFeatured);
  return (
    <RECarousel
      items={featured}
      renderSide={(item, key) => (
        <div className="slide" key={key}>
          <img className="slide__img" src={item.banner_card} alt="" />
        </div>
      )}
    ></RECarousel>
  );
};

export default FeatureSlider;
