import star from "/star.png";
export default function Card(props) {
  const data = props.item;

  let badgeText;
  if (data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (data.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={data.coverImg} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{data.stats.rating}</span>
        <span className="gray">({data.stats.reviewCount}) • </span>
        <span className="gray">{data.location}</span>
      </div>
      <p className="card--title">{data.title}</p>
      <p className="card--price">
        <span className="bold">From ${data.price}</span> / person
      </p>
    </div>
  );
}
