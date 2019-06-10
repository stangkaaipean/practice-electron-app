const { ipcRenderer } = require('electron')

document.getElementById('send').addEventListener("click", () => {
    console.log('work')
    ipcRenderer.send('main-window-message', document.getElementsByClassName('input').value)
}
)




