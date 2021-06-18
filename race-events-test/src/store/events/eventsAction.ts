import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetEvent } from "../../core/getEvents";

export const fetchEvents = createAsyncThunk("events/fetch", () =>
  GetEvent().then((res) => res.data.data)
);

export function useFetchEvents() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
}
