"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
exports.saveFile = utils_1.promisify(wx.saveFile);
exports.getSavedFileList = utils_1.promisify(wx.getSavedFileList);
exports.getSavedFileInfo = utils_1.promisify(wx.getSavedFileInfo);
exports.removeSavedFile = utils_1.promisify(wx.removeSavedFile);
exports.getFileInfo = utils_1.promisify(wx.getFileInfo);
exports.openDocument = utils_1.promisify(wx.openDocument);
