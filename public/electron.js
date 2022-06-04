const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    minHeight: 800,
    minWidth: 1400,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.maximize();

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: "right" });
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length == 0) {
    createWindow();
  }
});
