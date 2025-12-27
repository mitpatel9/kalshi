import { CommonDiv } from "@/StyledComponents/CommonStyled";
import {
  SidebarInnerList,
  SidebarItems,
  SidebarItemsIcon,
  SideBarLogo,
  SidebarMain,
  SidebarMenuItems,
} from "@/StyledComponents/DashboardStyled";
import { Icon } from "@iconify/react";
import React from "react";
import menuIcons from "../../components/JsonData/SidebarData.json";
import { useRouter } from "next/router";
import { webSiteName } from "@/utils/enums";

const Sidebar = (props) => {
  const router = useRouter();
  return (
    <SidebarMain className={props.mobileView ? "active" : ""}>
      <SideBarLogo>
        <CommonDiv className="innerAdmin">
          <CommonDiv className="mt-1">{webSiteName.domain} </CommonDiv>
        </CommonDiv>

        <Icon
          icon="ic:round-close"
          onClick={() => props.setMobileView(!props.mobileView)}
        />
      </SideBarLogo>
      <SidebarInnerList>
        {menuIcons.map((d, index) => {
          return (
            <div className="w-100" key={d.id || index}>
              <SidebarItems
                key={d.id}
                className={
                  router.asPath === d.path ||
                  (router.asPath.startsWith(d.path + "/") &&
                    d.path !== "/dashboard")
                    ? "active"
                    : ""
                }
                onClick={() =>
                  d.name === "Log Out" ? handleLogout() : router.push(d.path)
                }
              >
                <SidebarItemsIcon className="innerIcon">
                  <Icon icon={d.icon} width={18} height={18} />
                </SidebarItemsIcon>
                <SidebarMenuItems>{d.name}</SidebarMenuItems>
              </SidebarItems>
            </div>
          );
        })}
      </SidebarInnerList>
    </SidebarMain>
  );
};

export default Sidebar;
