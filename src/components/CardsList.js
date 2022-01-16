import Card from "./Card";

function CardsList({ hogs }) {
  const cards = hogs.map((hog) => {
    return (
      <Card
        key={hog.name}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        highestMedal={hog["highest medal achieved"]}
      />
    );
  });

  return <div className="ui three cards">{cards}</div>;
}

export default CardsList;
