function HogDetails({ specialty, weight, greased, highestMedal }) {
  return (
    <div>
      <h3>Specialty: {specialty}</h3>
      <h3>Weight: {weight}</h3>
      <h3>Greased?: {greased ? "Yes" : "No"}</h3>
      <h3>Highest Medal: {highestMedal}</h3>
    </div>
  );
}

export default HogDetails;
