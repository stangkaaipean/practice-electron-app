const { ipcRenderer } = require('electron')

ipcRenderer.on('message', (event, arg) => {
    console.log(arg)
})