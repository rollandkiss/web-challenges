function Smiley({ isHappy }) {
  // Variante mit lokaler Variablen
  //   let icon = ":-(";
  //   if (isHappy) {
  //     icon = ":-)";
  //   }

  // Variante mit Trinär-Operator
  return (
    <>
      {/* <p>{icon}</p> */}
      <p>{isHappy ? ":-)" : ":-("}</p>
    </>
  );
}

export { Smiley };
