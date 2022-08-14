import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
    // Create the browser window.electron
    mainWindow = new BrowserWindow({
        height: 1024,
        width: 768,
        minWidth: 485,
        minHeight: 300,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // and load the index.html of the app
    mainWindow.loadFile(path.join(__dirname, "index.html"));

    // open the DevTools on start
    //mainWindow.webContents.openDevTools();

    // emitted when the window is closed
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
