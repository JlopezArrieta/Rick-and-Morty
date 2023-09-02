import Card from "./Card";

export default function Cards({ characters }) {
  const onClose = () => window.alert("Emulamos que se cierra la cards");
  return (
    <div>
      {characters.map(
        ({ id, name, status, species, gender, origin, image}) => {
          return (
            <Card
              key={id}
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
