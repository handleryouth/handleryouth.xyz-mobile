import React, { ReactNode } from 'react'
import { ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomSafeAreaView = ({ children, style }: { children: ReactNode; style?: ViewStyle }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: 10,
        paddingHorizontal: 15,
        ...style,
      }}
    >
      {children}
    </SafeAreaView>
  )
}

export default CustomSafeAreaView
