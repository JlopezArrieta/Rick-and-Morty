import Card from '../Card/Card.jsx';
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.cartaHorizontal}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }, index) => {
          return (
            <Card
              key={index}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
