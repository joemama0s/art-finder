import React from "react";

function Loader(props: { show: Boolean }) {
  return props.show ? <div></div> : null;
}

export default Loader;
