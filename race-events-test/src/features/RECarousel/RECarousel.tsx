import { Carousel } from 'antd';
import { Settings } from '@ant-design/react-slick';
import React from 'react';
import './RECarousel.less';

export interface RECarousel<T> extends Settings {
  items: T[];
  renderSide: (item: T, key: number) => React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
const RECarousel: React.FC<RECarousel<any>> = (props) => {
  const { afterChange, items, renderSide, ...rest } = props;
  return (
    <Carousel
      afterChange={afterChange}
      arrows={true}
      {...rest}
    >
      {items && items.map(renderSide)}
    </Carousel>
  );
};
export default RECarousel;
