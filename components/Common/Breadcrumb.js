import {
  AddButton,
  BreadcrumbIcon,
  BreadcrumbLeft,
  BreadcrumbLI,
  BreadcrumbMain,
  BreadcrumbOl,
  BreadcrumbRight,
  BreadcrumbText,
  BreadcrumbTitle,
} from "@/StyledComponents/DashboardStyled";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = (props) => {
  return (
    <BreadcrumbMain>
      <BreadcrumbLeft>
        <BreadcrumbIcon>
          <Icon icon={props.Icon} width={38} height={28} />
        </BreadcrumbIcon>
        <BreadcrumbText>
          <BreadcrumbTitle>{props.Title}</BreadcrumbTitle>
          <BreadcrumbOl className="breadcrumb m-0">
            <BreadcrumbLI className="breadcrumb-item">
              {props.From}
            </BreadcrumbLI>
            <BreadcrumbLI className="breadcrumb-item active">
              {props.Title}
            </BreadcrumbLI>
          </BreadcrumbOl>
        </BreadcrumbText>
      </BreadcrumbLeft>
      <BreadcrumbRight>
        {props.Add != "" && (
          <AddButton onClick={() => router.push(props.Path)}>
            {props.Add}
          </AddButton>
        )}
      </BreadcrumbRight>
    </BreadcrumbMain>
  );
};

export default Breadcrumb;
