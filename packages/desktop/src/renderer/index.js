import { parseArgs } from 'electron-window'

parseArgs()
const { name } = window.__args__

const initRenderer = async name => {
  switch (name) {
    case 'main': return import('./ui')
    default:
      console.error('Nothing to run')
  }
}

initRenderer(name)
