const { app, BrowserWindow, Menu, MenuItem } = require('electron')
require('electron-reload')(__dirname);

const createWindow = () => {
    let win2
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    })

    win.loadFile('index.html')

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
               win2.loadFile('second.html')
            }
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

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
