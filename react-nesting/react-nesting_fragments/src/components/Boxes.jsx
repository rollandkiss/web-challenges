import Box from "./Box";

function Boxes() {
  return (
    // using fragments to avoid unnessessary blcoks destroying the styles, e.g. DIV
    <> 
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}

export { Boxes };
