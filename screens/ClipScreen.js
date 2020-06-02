import React, { useContext } from 'react'
import ArticleList from '../components/ArticleList'
import { ClipContext } from '../ClipContext'

const ClipScreen = () => {
  const { clipState } = useContext(ClipContext)

  return <ArticleList articles={clipState.clipArticles} />
}

export default ClipScreen
