import React from 'react';

const DisplayStars = ({ value }) => {
  const stars = [];

  for (let i = 0; i < value; i++) {
    stars.push(<i class="fa fa-star" style={{"color":"#f7e51d","fontSize":"20px"}}></i>);
  }

  return <div>{stars}</div>;
};

export default DisplayStars;
