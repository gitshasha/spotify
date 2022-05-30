import React from "react";
import "./style.css";
function Circle({ genrescore }) {
  console.log(genrescore);
  return (
    <div className="alltop">
      {genrescore &&
        Object.keys(genrescore).map((data, ind) => (
          <div className="topgenre" key={ind}>
            <div className="genrename">{data}</div>{" "}
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle"
                strokeDasharray={[genrescore[data], 100]}
                d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        ))}
    </div>
  );
}

export default Circle;
