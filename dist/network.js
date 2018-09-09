"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
exports.request = utils_1.promisify(wx.request);
/**
 * 创建一个 WebSocket 连接。使用前请先阅读说明。

基础库 1.7.0 之前，一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个
WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.7.0 及以后，
支持存在多个 WebSokcet 连接，每次成功调用 wx.connectSocket 会返回一个新的 SocketTask。
 */
exports.connectSocket = utils_1.promisify(wx.connectSocket);
/**
 * 通过 WebSocket 连接发送数据，需要先 connectSocket，并在 onSocketOpen 回调之后才能发送。
 */
exports.sendSocketMessage = utils_1.promisify(wx.sendSocketMessage);
/**
 * 关闭 WebSocket 连接。
 * //注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
 */
exports.closeSocket = utils_1.promisify(wx.closeSocket);
exports.uploadFile = utils_1.promisify(wx.uploadFile);
exports.downloadFile = utils_1.promisify(wx.downloadFile);
