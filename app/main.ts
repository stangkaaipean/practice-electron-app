import { app, BrowserWindow, Menu, MenuItem, ipcMain, ipcRenderer } from 'electron'
import { dirname } from 'path';

// require('electron-reload')(__dirname, {
//     // Note that the path to electron may vary according to the main file
//     electron: require(`${__dirname}/node_modules/electron`)
// });


const createWindow = () => {
    let win2: any
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    })

    win.loadFile(`${__dirname}/pages/index.html`)

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })

    win.once('ready-to-show', () => {
        win.show()
    })

    let menuItem = new MenuItem({
        label: 'Open second window',
        click: function () {
            if (!win2) {
                win2 = createSecondWindow(win)
                win2.loadFile(`${__dirname}/pages/second.html`)
            }

            ipcMain.on('main-window-message', (event, arg) => {
                win2.webContents.send('message', arg)
            })

        }
    })


    app.on('activate', () => {
        if (win === null) {
            createWindow()
        }
    })


    let menu = new Menu()
    menu.append(menuItem)

    win.setMenu(menu)
}

const createSecondWindow = (parent) => {
    return new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        parent: parent
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
