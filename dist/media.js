"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function promisifyCameraContext(ctx) {
    return {
        takePhoto: utils_1.promisify(ctx.takePhoto, ctx),
        startRecord: utils_1.promisify(ctx.startRecord, ctx),
        stopRecord: utils_1.promisify(ctx.stopRecord)
    };
}
exports.promisifyCameraContext = promisifyCameraContext;
exports.loadFontFace = utils_1.promisify(wx.loadFontFace);
exports.chooseImage = utils_1.promisify(wx.chooseImage);
exports.previewImage = utils_1.promisify(wx.previewImage);
exports.getImageInfo = utils_1.promisify(wx.getImageInfo);
exports.saveImageToPhotosAlbum = utils_1.promisify(wx.saveImageToPhotosAlbum);
exports.chooseVideo = utils_1.promisify(wx.chooseVideo);
exports.saveVideoToPhotosAlbum = utils_1.promisify(wx.saveVideoToPhotosAlbum);
