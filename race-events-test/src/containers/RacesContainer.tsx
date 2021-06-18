import { Divider, Switch } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import RaceItemVertical from "../components/RaceItem/RaceItemVertical";
import RaceFilter from "../features/race-filter/RaceFilter";
import { updateRaceFilter } from "../store/races/racesAction";
import { selectRaceList, selectTotalRaces } from "../store/races/racesSelector";
import MainContainer from "../templates/MainContainer";
import "./RacesContainer.less";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const RacesContainer: React.FC<{}> = (props) => {
  let query = useQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateRaceFilter({ sportType: query.get("sportType") }));
  }, [query.get("sportType")]);
  const total = useSelector(selectTotalRaces)
  const raceList = useSelector(selectRaceList)
  return (
    <div className="races-container race-vertical">
      <MainContainer>
        <RaceFilter />
        <Divider />
        <div className="races-container__header">
          <h3>{total} events</h3>
          <div>
              <small>Modal view</small> <Switch defaultChecked className="switch-view"/>
          </div>
        </div>
        {
            raceList.map((race, key)=> <RaceItemVertical key={key} race={race}/>)
        }
      </MainContainer>
    </div>
  );
};
export default RacesContainer;
