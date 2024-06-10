import React, { useState } from "react";
import "./styles/tabs.css";

function Tabs({ bgColor, children, textColor, cls, height, width, lineColor }) {
  const [currId, setCurrId] = useState(1);
  function handleClick(e) {
    const id = e.currentTarget.id;
    children.map((val) => {
      if (Number(id) === val.props.id) {
        setCurrId(Number(id));
      }
    });
  }
  return (
    <div
      className={"tabs" || cls}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        height: height,
        width: width,
      }}
    >
      <div className="tabs__header">
        {children.map((val) => {
          return (
            <div
              className="tabs__header__text"
              onClick={handleClick}
              id={val.props.id}
              style={
                currId === val.props.id
                  ? { backgroundColor: val.props.selectedColor }
                  : null
              }
            >
              <h2>{val.props.title}</h2>
              {currId === val.props.id && (
                <div
                  className="line"
                  style={{ backgroundColor: lineColor }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="tabs__content">
        {children.map((val) => {
          if (currId === val.props.id) {
            return (
              <div
                className="tabs__content__text"
                id={val.props.id}
                style={{ backgroundColor: val.props.selectedColor }}
              >
                {val.props.children}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Tabs;
