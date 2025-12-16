import { Hr } from "@/StyledComponents/CommonStyled";
import {
  NotificationArea,
  NotificationInner,
  NotificationSideBar,
  NotificationTitle,
} from "@/StyledComponents/LayoutStyled";
import React from "react";

const Notification = (props) => {
  return (
    <NotificationSideBar
      className={props.notify ? "active" : ""}
      onClick={() => props.setNotify(!props.notify)}
    >
      <NotificationInner>
        <NotificationTitle>Notifications</NotificationTitle>
        <Hr />
        <NotificationArea></NotificationArea>
      </NotificationInner>
    </NotificationSideBar>
  );
};

export default Notification;
