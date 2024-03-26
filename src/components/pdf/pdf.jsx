const Pdf = (props) => {
  return (
    <div>
      <iframe src={props.pdf} title={props.name}></iframe>
    </div>
  );
};

export default Pdf;
