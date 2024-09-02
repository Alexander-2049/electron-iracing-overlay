import path from "path";

export const PORT_WSS = "4004";
export const IS_DEV = process.env.NODE_ENV === "development";

export const RESOURCES_PATH = IS_DEV
  ? path.join(__dirname, "../../", "assets")
  : path.join(process.resourcesPath);
