import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'

const Loding = () => {
  return (
    <StyledSafeAreaView>
      <ActivityIndicator size='large' />
    </StyledSafeAreaView>
  )
}

export default Loding

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
`
