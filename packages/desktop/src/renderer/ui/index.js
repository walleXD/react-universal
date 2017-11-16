import { AppRegistry } from 'react-native'

import App from './App'

const renderApp = Component => {
  AppRegistry.registerComponent('App', () => Component);

  AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('app')
  })
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () =>
    renderApp(require('./App').default)
  )
}
