import React from 'react'
import InfoSec from './InfoSec'
import TradeList from './TradeList'
import { SiteLayout } from '@/StyledComponents/LayoutStyled'

const ContentMenu = () => {
  return (
    <SiteLayout>
      <InfoSec/>
      <TradeList/>
    </SiteLayout>
  )
}

export default ContentMenu
