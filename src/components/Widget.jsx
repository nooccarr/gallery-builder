import React from 'react';
import Image from './Image';

const Widget = ({ title, description, image, id, deleteWidget }) => {
  return (
    <div className="widget">
      <div className="itemContainer">
        <div className="textContainer">
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <Image src={image} />
      </div>
      <button className="delete" onClick={() => deleteWidget(id)}>
        Delete
      </button>
    </div>
  );
};

export default Widget;
