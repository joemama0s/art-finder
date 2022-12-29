import React from "react";

function Loader(props: { show: Boolean }) {
  return props.show ? <div className="loader"></div> : null;
}

export default Loader;
