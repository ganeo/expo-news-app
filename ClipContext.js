import React, { createContext } from 'react'

// App.jsに記述するとApp.js->AppNavigator.js->ClipScreen.js->App.jsの
// importのサイクルワーニングが発生するため分離
export const ClipContext = createContext()
