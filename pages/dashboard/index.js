import Layout from "@/components/Dashboard/Layout";
import { GratingContainer, GratingText, GratingTitle } from "@/StyledComponents/DashboardStyled";
import React from "react";

const index = () => {
  const date = new Date();
  const hour = date.getHours();
  let greeting = "";

  if (hour >= 1 && hour <= 11) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour <= 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return (
    <Layout>
      <GratingContainer>
        <GratingTitle>{`${greeting}, mit!`}</GratingTitle>
        <GratingText>
          what's happening with your JackelGame on-site today.
        </GratingText>
      </GratingContainer>
    </Layout>
  );
};

export default index;
