import React, { useReducer } from 'react'
import AppNavigator from './navigation/AppNavigator'
import { ClipContext } from './ClipContext'
import clipReducer from './flux/reducers/ClipReducer'

export default App = () => {
  const [state, dispatch] = useReducer(clipReducer, { clipArticles: [] })

  return (
    // 子コンポーネントでWebクリップ用のstateとdispatchを共有できるように設定
    <ClipContext.Provider value={{ clipState: state, clipDispatch: dispatch }}>
      <AppNavigator />
    </ClipContext.Provider>
  )
}
