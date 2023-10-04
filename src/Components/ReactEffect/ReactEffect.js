/* eslint-disable no-unused-vars */
import React from "react";
import "./ReactEffect.css";
import { useMyContext } from "../../hooks/Context/Context";

const listItems = [
  {
    data: "like",
  },
  {
    data: "love",
  },
  {
    data: "haha",
  },
  {
    data: "wow",
  },
  {
    data: "sad",
  },
  {
    data: "angry",
  },
];

export default function ReactEffect(props) {
  const { reacts, setReactsValue, getReactsValue } = useMyContext();

  return (
    <div className="react">
      <div className="react-me">
        {props.children}
        <div className="inner">
          <div className="react-box">
            <ul
              // onClick={(event) => {
              //   props.reactHnadler(event.target.getAttribute("data-hover"));
              // }}
              className="react-list"
            >
              {listItems.map((item, index) => (
                <li
                  onClick={() => setReactsValue(item?.data)}
                  key={index}
                  className={item.data}
                  data-hover={item.data}
                  style={{
                    border: `${
                      item?.data === reacts?.filter((r) => r === item.data)[0]
                        ? "2px"
                        : "0"
                    } solid green`,
                    borderRadius: "50%",
                  }}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
