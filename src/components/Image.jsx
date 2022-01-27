import React from "react";

const Image = ({ src }) => {
  const imageLink =
    src || `https://loremflickr.com/400/225?random=${Math.floor(Math.random() * 100)}`;

  return (
    <div className="imgContainer">
      <img src={imageLink} />
    </div>
  );
};

export default Image;
