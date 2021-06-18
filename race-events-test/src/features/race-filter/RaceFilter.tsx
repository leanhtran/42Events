import React from "react";
import { useSelector } from "react-redux";
import { selectRaceFilter } from "../../store/races/racesSelector";
import PopoverMenu, { IPopoverMenuItem } from "../popover-menu/PopoverMenu";
import "./RaceFilter.less";
const sportType: IPopoverMenuItem[] = [
  {
    name: "All",
    key: null,
  },
  {
    name: "Running",
    key: "running",
  },
  {
    name: "Cycling",
    key: "cycling",
  },
  {
    name: "Walking",
    key: "walking",
  },
];
const sortDates: IPopoverMenuItem[] = [
  {
    name: "Sort: Start date",
    key: "",
  },
];
const dates: IPopoverMenuItem[] = [
  {
    name: "All date",
    key: "",
  },
];
const eventTypes: IPopoverMenuItem[] = [
  {
    name: "All event type",
    key: "",
  },
];
const prices: IPopoverMenuItem[] = [
  {
    name: "All price",
    key: "",
  },
];
const RaceFilter: React.FC<{}> = (props) => {
  const filter = useSelector(selectRaceFilter);

  return (
    <div className="race-filter">
      <span className="race-filter__filter">
        <PopoverMenu items={sortDates} selected="" />
      </span>
      <span className="race-filter__filter">
        <PopoverMenu items={sportType} selected={filter.sportType} />
      </span>
      <span className="race-filter__filter">
        <PopoverMenu items={dates} selected="" />
      </span>
      <span className="race-filter__filter">
        <PopoverMenu items={eventTypes} selected="" />
      </span>
      <span className="race-filter__filter">
        <PopoverMenu items={prices} selected="" />
      </span>
    </div>
  );
};

export default RaceFilter;
