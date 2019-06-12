import { ipcRenderer } from 'electron'

ipcRenderer.on('message', (event: any, arg: string) => {
    console.log(arg)
})