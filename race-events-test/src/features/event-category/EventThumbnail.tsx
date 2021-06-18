import "./EventThumbnail.less"

export interface IEventThumbnailProps {
    title: string
    thumbnail: string
    backgroundColor: string
}
const EventThumbnail: React.FC<IEventThumbnailProps> = (props) => {
  return (
    <>
      <p>
        <span>{props.title}</span>
      </p>
      <div
        className="box-wrap"
        style={{
          backgroundImage:
            `url('${props.thumbnail}')`,
          backgroundColor: props.backgroundColor,
        }}
      ></div>
    </>
  );
};

export default EventThumbnail;
