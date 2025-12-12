import React, { useState } from "react";
import Ideas from "./Ideas";
import TopHolder from "./TopHolder";
import Activity from "./Activity";
import {
  CommentArea,
  CommentBottom,
  CommentBtn,
  CommentContainer,
  CommentCount,
  CommentLeft,
  CommentMenu,
  CommentMenuItem,
  CommentRight,
  CommentTextArea,
  CommetntBox,
} from "@/StyledComponents/MarketsStyled";
import { Input } from "reactstrap";

const BottomSec = () => {
  const [MenuSwitch, setMenuSwitch] = useState("Ideas");
  const [text, setText] = useState("");

  const countWords = (str) => {
    return str
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };
  return (
    <CommentContainer>
      <CommentMenu>
        <CommentMenuItem
          onClick={() => setMenuSwitch("Ideas")}
          className={MenuSwitch === "Ideas" ? "active" : ""}
        >
          Ideas(1,777)
        </CommentMenuItem>
        <CommentMenuItem
          onClick={() => setMenuSwitch("TopHolder")}
          className={MenuSwitch === "TopHolder" ? "active" : ""}
        >
          TopHolder
        </CommentMenuItem>
        <CommentMenuItem
          onClick={() => setMenuSwitch("Activity")}
          className={MenuSwitch === "Activity" ? "active" : ""}
        >
          Activity
        </CommentMenuItem>
      </CommentMenu>

      {MenuSwitch === "Ideas" && (
        <CommetntBox>
          <CommentTextArea>
            <Input
              type="textarea"
              placeholder="What's your predictions"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </CommentTextArea>
          <CommentBottom>
            <CommentLeft></CommentLeft>
            <CommentRight>
              <CommentCount>{800 - countWords(text)} Left</CommentCount>
              <CommentBtn>Post</CommentBtn>
            </CommentRight>
          </CommentBottom>
        </CommetntBox>
      )}

      <CommentArea>
        {MenuSwitch === "Ideas" && <Ideas />}
        {MenuSwitch === "TopHolder" && <TopHolder />}
        {MenuSwitch === "Activity" && <Activity />}
      </CommentArea>
    </CommentContainer>
  );
};

export default BottomSec;
