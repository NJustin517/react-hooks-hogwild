import { useState } from "react";
import HogDetails from "./HogDetails";

function Card({ name, image, specialty, weight, greased, highestMedal }) {
  const [showDetails, setShowDetails] = useState(false);

  function details() {
    return (
      <HogDetails
        specialty={specialty}
        weight={weight}
        greased={greased}
        highestMedal={highestMedal}
      />
    );
  }

  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      style={{ padding: "10px" }}
      className="ui pink card"
    >
      <h2>{name}</h2>
      <img src={image} alt="piggy"></img>
      {showDetails ? details() : null}
    </div>
  );
}

export default Card;
