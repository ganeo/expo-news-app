import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Article from './Article'

const ArticleList = ({ articles }) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            article={item}
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default ArticleList
