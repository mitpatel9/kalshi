import {
  IdeaCommentContainer,
  IdeaContainer,
  IdeaContent,
  IdeaIcons,
  IdeaImage,
  IdeaLeft,
  IdeaSubComment,
  IdeaUserName,
  UserComment,
} from "@/StyledComponents/MarketsStyled";
import React from "react";
import Image from "next/image";
import Test from "../../asset/Image/test.jpg";
import { Icon } from "@iconify/react";
import { Hr } from "@/StyledComponents/CommonStyled";

const Ideas = () => {
  return (
    <IdeaContainer>
      <IdeaCommentContainer>
        {/* main comment */}
        <IdeaImage>
          {" "}
          <Image src={Test} className="image" />
        </IdeaImage>
        <IdeaContent>
          <IdeaUserName>
            CryptoOGWhale <span>17d ago</span>
          </IdeaUserName>
          <UserComment>
            S&P just updated their credit report on Tether and put them at
            "weak". Basically on the verge of bankruptcy.
          </UserComment>
          <IdeaIcons>
            <Icon icon="mdi:heart-outline" className="icons" />
            12
            <Icon icon="iconamoon:comment" className="icons" />
          </IdeaIcons>
          {/* sub comment */}
          <IdeaSubComment>
            <IdeaImage>
              {" "}
              <Image src={Test} className="image" />
            </IdeaImage>
            <IdeaContent>
              <IdeaUserName>
                CryptoOGWhale <span>17d ago</span>
              </IdeaUserName>
              <UserComment>
                S&P just updated their credit report on Tether and put them at
                "weak". Basically on the verge of bankruptcy.
              </UserComment>
              <IdeaIcons>
                <Icon icon="mdi:heart-outline" className="icons" />
                12
                <Icon icon="iconamoon:comment" className="icons" />
              </IdeaIcons>{" "}
            </IdeaContent>
          </IdeaSubComment>
        </IdeaContent>
      </IdeaCommentContainer>
      <Hr />
      <IdeaCommentContainer>
        {/* main comment */}
        <IdeaImage>
          {" "}
          <Image src={Test} className="image" />
        </IdeaImage>
        <IdeaContent>
          <IdeaUserName>
            CryptoOGWhale <span>17d ago</span>
          </IdeaUserName>
          <UserComment>
            S&P just updated their credit report on Tether and put them at
            "weak". Basically on the verge of bankruptcy.
          </UserComment>
          <IdeaIcons>
            <Icon icon="mdi:heart-outline" className="icons" />
            12
            <Icon icon="iconamoon:comment" className="icons" />
          </IdeaIcons>
          {/* sub comment */}
         
        </IdeaContent>
      </IdeaCommentContainer> <Hr />
      <IdeaCommentContainer>
        {/* main comment */}
        <IdeaImage>
          {" "}
          <Image src={Test} className="image" />
        </IdeaImage>
        <IdeaContent>
          <IdeaUserName>
            CryptoOGWhale <span>17d ago</span>
          </IdeaUserName>
          <UserComment>
            S&P just updated their credit report on Tether and put them at
            "weak". Basically on the verge of bankruptcy.
          </UserComment>
          <IdeaIcons>
            <Icon icon="mdi:heart-outline" className="icons" />
            12
            <Icon icon="iconamoon:comment" className="icons" />
          </IdeaIcons>
          {/* sub comment */}
          <IdeaSubComment>
            <IdeaImage>
              {" "}
              <Image src={Test} className="image" />
            </IdeaImage>
            <IdeaContent>
              <IdeaUserName>
                CryptoOGWhale <span>17d ago</span>
              </IdeaUserName>
              <UserComment>
                S&P just updated their credit report on Tether and put them at
                "weak". Basically on the verge of bankruptcy.
              </UserComment>
              <IdeaIcons>
                <Icon icon="mdi:heart-outline" className="icons" />
                12
                <Icon icon="iconamoon:comment" className="icons" />
              </IdeaIcons>
                <IdeaSubComment>
                 <IdeaImage>
              {" "}
              <Image src={Test} className="image" />
            </IdeaImage>
            <IdeaContent>
              <IdeaUserName>
                CryptoOGWhale <span>17d ago</span>
              </IdeaUserName>
              <UserComment>
                S&P just updated their credit report on Tether and put them at
                "weak". Basically on the verge of bankruptcy.
              </UserComment>
              <IdeaIcons>
                <Icon icon="mdi:heart-outline" className="icons" />
                12
                <Icon icon="iconamoon:comment" className="icons" />
              </IdeaIcons>{" "}
            </IdeaContent>
            </IdeaSubComment>
            </IdeaContent>
          
          </IdeaSubComment>
        </IdeaContent>
      </IdeaCommentContainer> <Hr />
    </IdeaContainer>
  );
};

export default Ideas;
