import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ id, user }) {
  // console.log(user);
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {/* <Tag tag={user.roles[0]} /> */}
        {user.roles.map((role) => {
          if (role !== "admin") {
            return <Tag key={role} tag={role} className="tag" />;
          }
          return <Tag key={role} tag={role} className="tag tag--highlight" />;
        })}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
