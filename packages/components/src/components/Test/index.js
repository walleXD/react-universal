import React from 'react'
import { Text } from 'react-native'

const Test = ({text}) =>
  <Text>{text || 'This is a Test'}</Text>

export default Test
