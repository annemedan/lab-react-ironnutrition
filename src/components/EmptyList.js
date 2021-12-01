import noFood from "./../msg28111671-721020.jpg";
function EmptyList() {
  return (
    <div>
      <p> There's no more food content to be displayed. </p>
      <br />
      <img src={noFood} alt="no more food" width="50%" />
    </div>
  );
}

export default EmptyList;
