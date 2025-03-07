import "./SumValues.css";

function SumValues({ valueA, valueB }) {
  let sumUp = valueA + valueB;
  return (
    <>
      <p>
        {valueA} + {valueB} = {sumUp}
      </p>
    </>
  );
}

export { SumValues };
