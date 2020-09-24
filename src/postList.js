import React from "react";
import WithData from "./withData";
function postList({ data }) {
  return (
    <div>
      <div>
        Post
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    </div>
  );
}

export default WithData(postList);
