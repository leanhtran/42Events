import React from "react";
import { useMemo } from "react";
import { IRace } from "../../model/event";
import Tag, { ITag } from "../Tag/Tag";
import "./RaceItemVertical.less";
interface IProps {
  race: IRace;
}

const getTagIcon = (tag: string) => {
  switch (tag) {
    case "running":
      return "https://s3-ap-southeast-1.amazonaws.com/web42-assets/images/events/run-icon.png";
    case "cycling":
      return "https://s3-ap-southeast-1.amazonaws.com/web42-assets/images/events/cycling-icon.png";
    case "walking":
      return "https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/Vector-png-ei215102019-164429";
    default:
      return "";
  }
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RaceItemVertical = ({ race }: IProps) => {
  const tags: ITag[] = useMemo(() => {
    return [
      {
        text: capitalizeFirstLetter(race.sportType),
        iconSrc: getTagIcon(race.sportType),
      },
      {
        text: `${race.raceRunners} joined`,
      },
      {
        text: `${race.racePrice}`,
      },
      ...(race.categories?.map((category) => ({
        text: category,
      })) || []),
      {
        text: `${capitalizeFirstLetter(race.eventType)} submission`,
      },
    ];
  }, [race]);

  return (
    <div className="list list-race">
      <a href="/">
        <div className="d-flex">
          <div className="box-event-banner">
            {race.isFreeEngraving && (
              <div className="event-red-tag">
                <span>Free Medal engraving</span>
              </div>
            )}
            <img
              src={race.banner_card}
              alt={race.race_name}
              style={{ width: "100%" }}
            />
          </div>
          <div className="race-info">
            <p className="race-title">{race.race_name}</p>
            <p className="race-date">{race.racePeriod}</p>
            <div className="tag">
              <ul>
                {tags.map((tag, index) => (
                  <li key={tag.text + index}>
                    <Tag tag={tag}></Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RaceItemVertical;
