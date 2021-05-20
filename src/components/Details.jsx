import React from "react";
import Input from "./Input";

function Details(props) {
  return (
    <div className="details container">
      <h1 className="heading">
        <span>
        WE'RE
        </span>
        <br />
          COMING
          <br />
          SOON
      </h1>

      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deserunt
        eveniet neque voluptatum odit fugiat corrupti necessitatibus sit
        laudantium hic.
      </p>

      <Input />
    </div>
  );
}

export default Details;
