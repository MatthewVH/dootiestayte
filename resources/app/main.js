const electron = require('electron');
const url = require('url');
const path = require('path');

focused = true;


const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

//Listen for app to be ready
app.on('ready', function() {
    //Create new window
    mainWindow = new BrowserWindow({
        width:590,
        height:550,
        fullscreenable:false,
        fullscreen:false,
        maximizable:false,
        backgroundColor: '#2C2F33',
        opacity:0.97,
        // resizable:false
    });

    //Load HTML into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));

    mainWindow.removeMenu();

    globalShortcut.register('CommandOrControl+Shift+I', () => {
        if(focused)
            mainWindow.webContents.openDevTools();
    })

    globalShortcut.register("CommandOrControl+R", () => {
        if(focused)
            mainWindow.webContents.reload()
    })

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
});

function updateDutystateText(){
    // mainWindow.webContents.fromId("dutystate-text").
}