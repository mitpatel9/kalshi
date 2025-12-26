import {
  Searchbar,
  SearchbarHedTitle,
  SearchbarImg,
  SearchbarInner,
  SearchbarListing,
} from "@/StyledComponents/LayoutStyled";
import React, { useState } from "react";
import Image from "next/image";
import Test from "../../asset/Image/test.jpg";
import { useRouter } from "next/router";

const SearchBarModal = (props) => {
  const router = useRouter();
  return (
    <Searchbar
      className={props.openSearch ? "active" : ""}
      onClick={() => props.setOpenSearch(!props.openSearch)}
    >
      <SearchbarInner>
        <SearchbarListing>
          <SearchbarImg>
            {" "}
            <Image src={Test} className="image" />
          </SearchbarImg>
          <SearchbarHedTitle onClick={() => router.push("/markets/12")}>
            Who will visit Mar-a-Lago before 2026?
          </SearchbarHedTitle>
        </SearchbarListing>
      </SearchbarInner>
    </Searchbar>
  );
};

export default SearchBarModal;
