import { app } from 'electron'
import createWindow, { windows } from './createWindow'
import isDev from 'electron-is-dev'
import { resolve } from 'path'

const windowIdKeeper = {}

const createMainWindow = () => {
  const mainWindow = createWindow(
    { name: 'main' },
    {
      devURL: `http://localhost:9080`,
      prodURL: `file://${__dirname}/index.html`
    },
    { file: 'main-window-state.json' }
  )
  if (isDev) mainWindow.webContents.openDevTools()
  windowIdKeeper.main = mainWindow.id
}

app.on('activate', () => {
  const mainWindow = windows[windowIdKeeper.main]
  if (!mainWindow) createMainWindow()
})

export default async () => {
  createMainWindow()
}
