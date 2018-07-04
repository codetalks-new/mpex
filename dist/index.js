"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将普通对象转换成编码成 urlQuery
 *  注意：不支持嵌套
 * @param object 普通对象
 */
function encodeQuery(object) {
    const po = object;
    const kvArray = [];
    for (const key in object) {
        if (!object.hasOwnProperty(key)) {
            continue;
        }
        const kv = encodeURIComponent(key) + "=" + encodeURIComponent(po[key]);
        kvArray.push(kv);
    }
    return kvArray.join("&");
}
exports.encodeQuery = encodeQuery;
/**
 * 将 微信回调风格的接口函数包装成支持 Promise 风格的函数。
 * @param fun 微信回调风格接口函数
 */
function promisify(fun) {
    function newFun(options) {
        const opts = options || {};
        return new Promise(function (resolve, reject) {
            opts.success = res => {
                resolve(res);
            };
            opts.fail = reason => {
                if (reason) {
                    console.error(reason);
                }
                reject(reason);
            };
            fun(opts);
        });
    }
    return newFun;
}
exports.promisify = promisify;
exports.login = promisify(wx.login);
exports.getUserInfo = promisify(wx.getUserInfo);
exports.showModal = promisify(wx.showModal);
exports.getSetting = promisify(wx.getSetting);
exports.downloadFile = promisify(wx.downloadFile);
exports.saveFile = promisify(wx.saveFile);
exports.getSystemInfo = promisify(wx.getSystemInfo);
exports.setTabBarItem = promisify(wx.setTabBarItem);
/**
 *
 * @param key 本地缓存中的指定的 key
 * @param data 需要存储的内容
 */
function setStorage(key, data) {
    const newFun = promisify(wx.setStorage);
    return newFun({
        key,
        data
    });
}
exports.setStorage = setStorage;
/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param key 本地缓存中的指定的 key
 */
function getStorageByKey(key) {
    const newFunc = promisify(wx.getStorage);
    return newFunc({ key });
}
exports.getStorageByKey = getStorageByKey;
/**
 * 从本地缓存中异步移除指定 key 。
 * @param key 本地缓存中的指定的 key
 */
function removeStorageByKey(key) {
    const newFunc = promisify(wx.removeStorage);
    return newFunc({ key });
}
exports.removeStorageByKey = removeStorageByKey;
/**
 * 创建一个 WebSocket 连接。使用前请先阅读说明。

基础库 1.7.0 之前，一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个
WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.7.0 及以后，
支持存在多个 WebSokcet 连接，每次成功调用 wx.connectSocket 会返回一个新的 SocketTask。
 */
exports.connectSocket = promisify(wx.connectSocket);
/**
 * 通过 WebSocket 连接发送数据，需要先 connectSocket，并在 onSocketOpen 回调之后才能发送。
 */
exports.sendSocketMessage = promisify(wx.sendSocketMessage);
/**
 * 关闭 WebSocket 连接。
 * //注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
 */
exports.closeSocket = promisify(wx.closeSocket);
/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
 */
exports.getLocation = promisify(wx.getLocation);
/**
 * 打开地图选择位置。
 * 需要用户授权 scope.userLocation
 */
exports.chooseLocation = promisify(wx.chooseLocation);
/**
 * 使用微信内置地图查看位置。
 * 需要用户授权 scope.userLocation
 */
exports.openLocation = promisify(wx.openLocation);
exports.modalOptions = {
    title: "提示",
    content: "提示内容",
    showCancel: true,
    cancelText: "取消",
    cancelColor: "#000000",
    confirmText: "确定",
    confirmColor: "#3CC51F" //确定按钮的文字颜色,
};
function showConfirm(content, title = "提示") {
    const options = Object.assign({}, exports.modalOptions);
    options.title = title;
    options.content = content;
    options.showCancel = false;
    return exports.showModal(options);
}
exports.showConfirm = showConfirm;
exports.confirm = showConfirm;
function showPrompt(content, title = "提示") {
    const options = Object.assign({}, exports.modalOptions);
    options.title = title;
    options.content = content;
    options.showCancel = true;
    return exports.showModal(options);
}
exports.showPrompt = showPrompt;
exports.prompt = showPrompt;
function showLoading(title = "加载中…") {
    wx.showLoading({
        title: title,
        mask: true //显示透明蒙层，防止触摸穿透,
    });
}
exports.showLoading = showLoading;
exports.hideLoading = wx.hideLoading;
const _showToast = promisify(wx.showToast);
/**
 *
 *
 * @param title 提示的内容
 * @param icon 图标，只支持"success"、"loading"
 * @param image 自定义图标的本地路径，image 的优先级高于 icon
 * @param duration 提示的延迟时间，单位毫秒，默认：1500
 * @param mask 是否显示透明蒙层，防止触摸穿透，默认：true
 */
function showToast(title, icon = "success", image, duration = 1500, mask = true) {
    return _showToast({ title, icon, image, duration, mask });
}
exports.showToast = showToast;
function showSuccess(title) {
    showToast(title);
}
exports.showSuccess = showSuccess;
function showToastLoading(title) {
    showToast(title);
}
exports.showToastLoading = showToastLoading;
function makeNavigationUrl(url, params) {
    if (url[0] != "/") {
        url = "/" + url;
    }
    if (params) {
        return url + "?" + encodeQuery(params);
    }
    else {
        return url;
    }
}
exports.makeNavigationUrl = makeNavigationUrl;
function enhanceNavigation(fun) {
    const pfun = promisify(fun);
    return function navigate(url, params) {
        pfun({ url: makeNavigationUrl(url, params) })
            .then(function (res) {
            console.info("NAV DONE " + url);
        })
            .catch(function (reason) {
            console.info("NAV FAIL " + url + ", reason:", reason);
        });
    };
}
exports.navigateTo = enhanceNavigation(wx.navigateTo);
exports.redirectTo = enhanceNavigation(wx.redirectTo);
exports.switchTab = enhanceNavigation(wx.switchTab);
exports.navigateBack = enhanceNavigation(wx.navigateBack);
exports.reLaunch = enhanceNavigation(wx.reLaunch);
function setNavigationBarTitle(title) {
    wx.setNavigationBarTitle({ title });
}
exports.setNavigationBarTitle = setNavigationBarTitle;
