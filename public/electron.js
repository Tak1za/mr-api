const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");
const expressApp = require("./server");

let mainWindow;

const PORT = process.env.PORT || 3001;

expressApp.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${PORT}`);
});

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1366,
    minHeight: 768,
    vibrancy: "under-window",
    visualEffectState: "followWindow",
    backgroundColor: "#00000000",
  });
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", function () {
  setTimeout(function () {
    createWindow();
  }, 10);
});

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
