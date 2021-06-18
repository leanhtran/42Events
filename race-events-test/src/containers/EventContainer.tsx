import React from 'react';
import { useSelector } from 'react-redux';
import EventSection from '../components/EventSection/EventSection';
import EventCategory from '../features/event-category/EventCategory';
import FeatureSlider from '../features/feature-slider/FeatureSlider';
import { IRace } from '../model/event';
import { useFetchEvents } from '../store/events/eventsAction';
import { selectEvents } from '../store/events/eventsSelector';
import { IEventsSlice } from '../store/events/eventsSlice';
import MainContainer from '../templates/MainContainer';
import './EventContainer.less';

const EVENT_SECTIONS = {
  startingSoon: 'Starting Soon',
  popular: 'Popular',
  newRelease: 'New Release',
  free: 'Free',
  past: 'Past Event',
};
const EventContainer = () => {
  useFetchEvents();
  const eventData = useSelector(selectEvents);
  return (
    <>
      <FeatureSlider></FeatureSlider>

      <EventCategory></EventCategory>

      {Object.keys(EVENT_SECTIONS).map((key) => (
        <EventSection
          key={key}
          title={(EVENT_SECTIONS as any)[key]}
          races={eventData[key as keyof IEventsSlice] as IRace[]}
        ></EventSection>
      ))}
    </>
  );
};
export default EventContainer;
