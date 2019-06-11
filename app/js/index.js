const { ipcRenderer } = require('electron')

document.getElementById('send').addEventListener("click", () => {
    ipcRenderer.send('main-window-message', document.getElementById('input').value)
})
