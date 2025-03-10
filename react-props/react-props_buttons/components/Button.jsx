import "./Button.css";

function Button({ colorHex, disabled, text, onClick }) {
//   // Function to raise alert on Click-Event
//   function handleClick() {
//     alert("Kick me harder");
//   }
  return (
    <>
      <button
        type="button"
        disabled={disabled}
        style={{ backgroundColor: colorHex }}
        // onClick={onClick} // this works with anoynmous call-back function
        // onClick={handleClick}
        onClick={onClick}   // Wird aus App mitgegeben als Param
      >
        {text}
      </button>
    </>
  );
}

export { Button };
