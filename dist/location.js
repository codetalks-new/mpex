"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
 */
exports.getLocation = utils_1.promisify(wx.getLocation);
/**
 * 打开地图选择位置。
 * 需要用户授权 scope.userLocation
 */
exports.chooseLocation = utils_1.promisify(wx.chooseLocation);
/**
 * 使用微信内置地图查看位置。
 * 需要用户授权 scope.userLocation
 */
exports.openLocation = utils_1.promisify(wx.openLocation);
function promisifyMapContext(ctx) {
    return {
        getCenterLocation: utils_1.promisify(ctx.getCenterLocation, ctx),
        moveToLocation: ctx.moveToLocation,
        translateMarker: utils_1.promisify(ctx.translateMarker, ctx),
        includePoints: ctx.includePoints,
        getRegion: utils_1.promisify(ctx.getRegion, ctx),
        getScale: utils_1.promisify(ctx.getScale, ctx)
    };
}
exports.promisifyMapContext = promisifyMapContext;
