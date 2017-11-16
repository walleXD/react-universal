import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'

import Test from '../'

storiesOf('Test', module)
  .add('Base', () =>
    <View>
      <Test />
    </View>
  )
