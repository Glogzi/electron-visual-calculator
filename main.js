const {app, BrowserWindow, Menu} = require("electron");

//https://www.youtube.com/watch?v=zjfdrxexNPs
console.log("Hello World!");
function root(){
    const wind = new BrowserWindow({
        width: 450,
        height: 620,
        resizable: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            devTools: false,
        },
        autoHideMenuBar: true
        
    });
    wind.loadFile("index.html");
}
app.whenReady().then(root);