import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ClipContext } from '../ClipContext'
import { createClip, deleteClip } from '../flux/actions/ClipAction'

const Article = ({ article, onPress }) => {
  const { clipState, clipDispatch } = useContext(ClipContext)

  // すでにWebクリップされた記事かどうかを判定
  const isClipped = () => {
    return clipState.clipArticles.some(
      (clipArticle) => clipArticle.url === article.url
    )
  }

  // Webクリップをチェックした際の処理
  const handleClip = () => {
    if (isClipped()) {
      clipDispatch(deleteClip({ clipArticle: article }))
    } else {
      clipDispatch(createClip({ clipArticle: article }))
    }
  }

  return (
    <StyledViewBase>
      {article.urlToImage && (
        <StyledImage source={{ uri: article.urlToImage }} />
      )}
      <StyledViewContent>
        <TouchableOpacity onPress={onPress}>
          <StyledTextTitle numberOfLines={3}>{article.title}</StyledTextTitle>
        </TouchableOpacity>
        <StyledTouchableOpacityClip onPress={handleClip}>
          <StyledTextClip>後で読む</StyledTextClip>
          <MaterialCommunityIcons
            name={
              isClipped() ? 'checkbox-marked-outline' : 'checkbox-blank-outline'
            }
            size={16}
            color='green'
          />
        </StyledTouchableOpacityClip>
      </StyledViewContent>
    </StyledViewBase>
  )
}

export default Article

const StyledViewBase = styled.View`
  height: 100px;
  background-color: #fff;
  border-color: #eee;
  border-width: 1px;
  flex-direction: row;
`

const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
`

const StyledViewContent = styled.View`
  padding: 5px;
  flex: 1;
  justify-content: space-between;
`

const StyledTextTitle = styled.Text`
  font-size: 16px;
`

const StyledTouchableOpacityClip = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
`

const StyledTextClip = styled(StyledTextTitle)`
  color: green;
`
