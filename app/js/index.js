const { ipcRenderer } = require('electron')
const axios = require('axios')

document.getElementById('send').addEventListener("click", () => {
    ipcRenderer.send('main-window-message', document.getElementById('input').value)
})

document.getElementById('get').onclick = () => {
    axios({
        method: 'get',
        url: 'http://localhost:3000/data'
    })
        .then(function (response) {
            console.log(response)
        });
}