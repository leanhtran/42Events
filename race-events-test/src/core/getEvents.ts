import { IRaceEvent } from "../model/event";
import API from "./api";
import { IResponse } from "./Response";

export const GetEvent = () => API.get<IResponse<IRaceEvent>>(`/api/v1/race-events`)