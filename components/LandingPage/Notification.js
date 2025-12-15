import {
  NotificationInner,
  NotificationSideBar,
} from "@/StyledComponents/LayoutStyled";
import React from "react";

const Notification = (props) => {
  return (
    <NotificationSideBar
      className={props.notify ? "active" : ""}
      onClick={() => props.setNotify(!props.notify)}
    >
      <NotificationInner>Notification</NotificationInner>
    </NotificationSideBar>
  );
};

export default Notification;
