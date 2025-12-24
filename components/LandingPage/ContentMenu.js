import React from 'react'
import InfoSec from './InfoSec'
import TradeList from './TradeList'
import { SiteLayout } from '@/StyledComponents/LayoutStyled'
import SliderMarket from './SliderMarket'

const ContentMenu = () => {
  return (
    <SiteLayout>
      <SliderMarket/>
      <InfoSec/>
      <TradeList/>
    </SiteLayout>
  )
}

export default ContentMenu
