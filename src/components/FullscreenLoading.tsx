import React from 'react'

import { fullDimensionHelper } from '../utils'

import CustomSafeAreaView from './CustomSafeAreaView'
import LoadingIndicator from './LoadingIndicator'

const FullscreenLoading = () => {
  const { width, height } = fullDimensionHelper()
  return (
    <CustomSafeAreaView
      style={{
        height: height,
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoadingIndicator />
    </CustomSafeAreaView>
  )
}

export default FullscreenLoading
