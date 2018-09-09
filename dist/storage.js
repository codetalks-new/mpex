"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
exports.setStorage = utils_1.promisify(wx.setStorage);
/**
 *
 * @param key 本地缓存中的指定的 key
 * @param data 需要存储的内容
 */
function setStorageByKey(key, data) {
    return exports.setStorage({
        key,
        data
    });
}
exports.setStorageByKey = setStorageByKey;
exports.getStorage = utils_1.promisify(wx.getStorage);
/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param key 本地缓存中的指定的 key
 */
function getStorageByKey(key) {
    return exports.getStorage({ key });
}
exports.getStorageByKey = getStorageByKey;
exports.removeStorage = utils_1.promisify(wx.removeStorage);
/**
 * 从本地缓存中异步移除指定 key 。
 * @param key 本地缓存中的指定的 key
 */
function removeStorageByKey(key) {
    return exports.removeStorage({ key });
}
exports.removeStorageByKey = removeStorageByKey;
