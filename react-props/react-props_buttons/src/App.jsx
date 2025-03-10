import { Button } from "../components/Button";

export default function App() {
  // Function to raise alert on Click-Event
  function handleClick() {
    alert("Kick me hardest");
  }
  return (
    <>
      <Button
        disabled={false}
        text="Gib Arschtritt"
        colorHex={"#0000ff"}
        // onClick={() => {
        //   console.log("You kicked me hard");
        // }}
        onClick={handleClick}
      ></Button>
    </>
  );
}
