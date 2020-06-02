import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import axios from 'axios'
import styled from 'styled-components/native'
import ArticleList from '../components/ArticleList'
import Loding from '../components/Loding'
import { categories } from '../category-list'
import news from '../news.json'

// News APIのAPIキー
const API = '<APIキー>'

const HomeScreen = ({ route }) => {
  const [category, setCategory] = useState(categories[0])
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setCategory(route.name)
    fetchArticles()
  }, [category])

  // News APIから特定カテゴリーのニュースデータを取得
  const fetchArticles = async () => {
    try {
      setLoading(true)
      const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=${API}`
      const res = await axios.get(URL)
      setArticles(res.data.articles)
      // テスト用にローカルに保存したNewsデータを利用する場合は、下3行のコメントを外し上3行をコメントアウト
      // let data = JSON.stringify(news)
      // data = JSON.parse(data)
      // setArticles(data.articles)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err)
      console.error(err)
    }
  }

  return (
    <SafeAreaView>
      {loading ? (
        <Loding />
      ) : !error ? (
        <ArticleList articles={articles} />
      ) : (
        <StyledText>データを取得できませんでした。</StyledText>
      )}
    </SafeAreaView>
  )
}

export default HomeScreen

const StyledText = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  color: red;
`
