const { ipcRenderer } = require('electron')

ipcRenderer.on('main-window-message', (event, arg) => {
    console.log('work2')
    console.log(arg)
})