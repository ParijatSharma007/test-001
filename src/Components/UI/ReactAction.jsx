import React, { useState } from "react";
import "./ReactAction.css";
import Modal from "./Modal";

const ReactAction = (props) => {
  const [likeState, setLikeState] = useState(false);
  const [heartState, setHeartState] = useState(false);
  const [wowState, setWowState] = useState(false);
  const [react, setReact] = useState([]);

  const likeButtonHandler = () => {
    setLikeState((prevState) => !prevState);
    setReact([...react, "like"]);
  };

  const heartButtonHandler = () => {
    setHeartState((prevState) => !prevState);
    setReact([...react, "heart"]);
  };

  const wowButtonHandler = () => {
    setWowState((prevState) => !prevState);
    setReact([...react, "wow"]);
  };

  const onClickDone = (event) => {
    event.preventDefault();
    props.reactData({
      like: likeState,
      heart: heartState,
      wow: wowState,
      reacts: [...react],
    });
  };

  return (
    <Modal onClick={props.onClick}>
      <form className="react_button">
        <button
          onClick={likeButtonHandler}
          style={{ background: `${likeState ? "#48abe0" : ""}` }}
          type="button"
        >
          <img src={require("../../assets/haha.png")} alt="" />
        </button>
        <button
          onClick={heartButtonHandler}
          style={{ background: `${heartState ? "#48abe0" : ""}` }}
          type="button"
        >
          <img src={require("../../assets/love.png")} alt="" />
        </button>
        <button
          onClick={wowButtonHandler}
          style={{ background: `${wowState ? "#48abe0" : ""}` }}
          type="button"
        >
          <img src={require("../../assets/wow.png")} alt="" />
        </button>
        <button onClick={onClickDone}></button>
      </form>
    </Modal>
  );
};

export default ReactAction;
