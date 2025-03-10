// Imports
//
// Link Component Function
function Link({ text, href, linkClass }) {
  return (
    <>
      <a className={linkClass} href={href}>
        {text}
      </a>
    </>
  );
}
// Exports
export { Link };
