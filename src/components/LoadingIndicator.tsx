import React from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper'

const LoadingIndicator = () => {
  return <ActivityIndicator animating color={Colors.blue500} />
}

export default LoadingIndicator
