import { configureFonts, DefaultTheme } from 'react-native-paper'

import { fontConfig } from './fonts'

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
}
