import { CommonDiv } from '@/StyledComponents/CommonStyled'
import { HeaderInner, HeaderMain, LeftSideItem, RightSideItem, UserName, UserNameField } from '@/StyledComponents/DashboardStyled'
import { Icon } from '@iconify/react'
import React from 'react'
import { Input } from 'reactstrap'

const Header = (props) => {
  return (
   <HeaderMain>
            <HeaderInner>
                <LeftSideItem>
                    <Icon icon="iconamoon:search-thin" />
                    <Input type="search" placeholder="Type here..." />
                </LeftSideItem>
                <RightSideItem>
                    <UserName>
                        <UserNameField>Welcome mit!</UserNameField>
                    </UserName>
                </RightSideItem>
                <CommonDiv
                    className="mobileView"
                    onClick={() => props.setMobileView(!props.mobileView)}
                >
                    <Icon icon="ion:menu" />
                </CommonDiv>
            </HeaderInner>
        </HeaderMain>
  )
}

export default Header
