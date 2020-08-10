import React from "react";

const section = (props) => {
  return (
    <div className={"Section" + (props.dark ? " SectionDark" : "")}>
      <div className="section-content" id={props.id}>
       {props.children}
      </div>
    </div>
  );
}

export default section;