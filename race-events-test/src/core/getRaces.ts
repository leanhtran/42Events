import { RaceList } from "../model/event";
import API from "./api";
import { IPaging, IResponse } from "./Response";
const removeNullProps = (obj: object) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));

export interface IGetRaceParams extends IPaging {
  sportType: string | null;
}
export const GetRaces = (params: IGetRaceParams) =>
  API.get<IResponse<RaceList>>(
    `/api/v1/race-filters?${new URLSearchParams(
      removeNullProps(params) as any
    ).toString()}`
  );
