const NewsItem = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default NewsItem;
