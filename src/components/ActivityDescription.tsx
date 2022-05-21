import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'
import { Subheading } from 'react-native-paper'

import CustomParagraph from './CustomParagraph'

export interface ActivityDescriptionProps {
  title: string
  description: string
  icon: ReactNode
  style?: ViewStyle
}

const ActivityDescription = ({ title, description, icon, style }: ActivityDescriptionProps) => {
  return (
    <View style={style}>
      <View>{icon}</View>
      <View>
        <Subheading>{title}</Subheading>
        <CustomParagraph>{description}</CustomParagraph>
      </View>
    </View>
  )
}

export default ActivityDescription
