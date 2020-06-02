import React from 'react'
import { WebView } from 'react-native-webview'
import styled from 'styled-components/native'
import Loading from '../components/Loding'

const ArticleScreen = ({ route }) => {
  return (
    <StyledSafeAreaView>
      <WebView
        source={{ uri: route.params.article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      />
    </StyledSafeAreaView>
  )
}

export default ArticleScreen

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`
