import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import {
  PageFoundWrapper,
  PageNotFoundBtn,
  PageNotFoundContainer,
  PageNotFoundHed,
  PageNotFoundImg,
  PageNotFoundText,
  SiteLayout,
} from "@/StyledComponents/LayoutStyled";
import React from "react";
import Test from "../asset/Image/test.jpg";
import Image from "next/image";
import { useRouter } from "next/router";

const PageNotFound = () => {
    const router=useRouter();
  return (
    <SiteLayout>
      <HeaderLayout />
      <PageNotFoundContainer>
        <PageFoundWrapper>
          <PageNotFoundImg>
            <Image src={Test} className="image" />
          </PageNotFoundImg>
          <PageNotFoundHed>Oops! Page Not Found</PageNotFoundHed>
          <PageNotFoundText>
            We can’t seem to find the page you’re looking for. Please check that
            the link is correct. If the issue continues, feel free to contact
            us.
          </PageNotFoundText>
          <PageNotFoundBtn onClick={()=>router.push("/")}>Go to home page</PageNotFoundBtn>
        </PageFoundWrapper>
      </PageNotFoundContainer>
    </SiteLayout>
  );
};

export default PageNotFound;
