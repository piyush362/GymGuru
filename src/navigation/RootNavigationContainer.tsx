import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStackContainer from './StackNavigationContainer'

const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStackContainer />
    </NavigationContainer>
  )
}

export default RootNavigationContainer