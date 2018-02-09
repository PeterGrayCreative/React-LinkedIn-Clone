import React from 'react';
import './GridItem.css';

function GridItem(props) {
  return (
    <div className="col-md-4 grid-item d-flex flex-column text-center">
      <img src={props.user.image_url} />
      <span className="grid-item__name">
        {props.user.first_name} {props.user.last_name}
      </span>
      <span className="grid-item__job-title">{props.user.job_title}</span>
      <button className="grid-item__button">
        <span>Connect</span>
      </button>
    </div>
  );
}

export default GridItem;
