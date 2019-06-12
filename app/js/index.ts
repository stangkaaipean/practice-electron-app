import { ipcRenderer } from 'electron'
import axios from 'axios'

document.getElementById('send').addEventListener("click", () => {
    ipcRenderer.send('main-window-message', (<HTMLInputElement>document.getElementById('input')).value)
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