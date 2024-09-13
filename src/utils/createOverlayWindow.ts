import { BrowserWindow } from "electron";
import { preloadWebpackEntry } from "../main";

export const createOverlayWindow = (
  url: string,
  options?: Electron.BrowserWindowConstructorOptions
) => {
  // Create the browser window.
  const overlayWindow = new BrowserWindow({
    height: 43,
    width: 474,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    hasShadow: false,
    minimizable: false,
    fullscreenable: false,
    skipTaskbar: true,
    resizable: false,
    webPreferences: {
      preload: preloadWebpackEntry,
      nodeIntegration: true,
    },
    ...options,
  });
  // and load the index.html of the app.
  overlayWindow.loadURL(url);

  overlayWindow.setAlwaysOnTop(true, "screen-saver");
  overlayWindow.setVisibleOnAllWorkspaces(true); // Ensures it's visible across all workspaces
  overlayWindow.setFullScreenable(false);

  overlayWindow.on("minimize", () => {
    overlayWindow.restore();
  });

  overlayWindow.on("system-context-menu", (event) => {
    event.preventDefault();
  });

  overlayWindow.on("close", (event) => {
    event.preventDefault();
  });

  return overlayWindow;
};
