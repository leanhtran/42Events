import React from 'react';
import { IRace } from '../../model/event';
import { Settings } from 'react-slick';
import RaceItem from '../RaceItem/RaceItem';
import './EventSection.less';
import RECarousel from '../../features/RECarousel/RECarousel';


interface IProps {
  title: string;
  races: IRace[];
}

const SliderSetting: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
};

const EventSection = ({ title, races }: IProps) => {
  return (
    <div className='box-group'>
      <h3>{title}</h3>
      <RECarousel
        items={races}
        renderSide={(item) => <RaceItem key={item._id} race={item}></RaceItem>}
        {...SliderSetting}
      ></RECarousel>
    </div>
  );
};

export default EventSection;
