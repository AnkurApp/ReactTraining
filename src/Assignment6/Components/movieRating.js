import React from "react";

const movieRating = React.memo((props) => {
  console.log(props.id);
  return (
    <>
      <p>{`Rating: ${props.rating}`}</p>
    </>
  );
});

export default movieRating;
