import React from 'react';
import './Tag.less';

export interface ITag {
  text: string;
  iconSrc?: string;
}

const Tag = ({ tag }: { tag: ITag }) => {
  return (
    <div className="tag-item">
      {tag.iconSrc && <img src={tag.iconSrc} alt="icon" className="icon"></img>}
      <span>{tag.text}</span>
    </div>
  );
};

export default Tag;
