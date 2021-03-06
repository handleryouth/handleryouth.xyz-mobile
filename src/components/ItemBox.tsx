import React from 'react'
import { View, ViewStyle } from 'react-native'

import CustomParagraph from './CustomParagraph'
import CustomTitle from './CustomTitle'

export interface ItemBoxProps {
  title: string
  company?: string
  description?: string
  time: string
  style?: ViewStyle
}

const ItemBox = ({ title, time, company, description, style }: ItemBoxProps) => {
  return (
    <View style={style}>
      <CustomTitle>{title}</CustomTitle>
      {company && <CustomParagraph>{company}</CustomParagraph>}
      <CustomParagraph>{time}</CustomParagraph>
      {description && <CustomParagraph>{description}</CustomParagraph>}
    </View>
  )
}

export default ItemBox
