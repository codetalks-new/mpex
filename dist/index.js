/**
 * 将普通对象转换成编码成 urlQuery
 *  注意：不支持嵌套
 * @param object 普通对象
 */
export function encodeQuery(object) {
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
/**
 * 将 微信回调风格的接口函数包装成支持 Promise 风格的函数。
 * @param fun 微信回调风格接口函数
 */
export function promisify(fun) {
    function newFun(options) {
        const opts = options || {};
        return new Promise(function (resolve, reject) {
            opts.success = res => {
                resolve(res);
            };
            opts.fail = () => {
                reject();
            };
            fun(opts);
        });
    }
    return newFun;
}
export const login = promisify(wx.login);
export const getUserInfo = promisify(wx.getUserInfo);
export const showModal = promisify(wx.showModal);
export const getSetting = promisify(wx.getSetting);
export const downloadFile = promisify(wx.downloadFile);
export const saveFile = promisify(wx.saveFile);
export const getSystemInfo = promisify(wx.getSystemInfo);
export const modalOptions = {
    title: "提示",
    content: "提示内容",
    showCancel: true,
    cancelText: "取消",
    cancelColor: "#000000",
    confirmText: "确定",
    confirmColor: "#3CC51F" //确定按钮的文字颜色,
};
export function confirm(content, title = "提示") {
    const options = Object.assign({}, modalOptions);
    options.title = title;
    options.content = content;
    options.showCancel = false;
    return showModal(options);
}
export function prompt(content, title = "提示") {
    const options = Object.assign({}, modalOptions);
    options.title = title;
    options.content = content;
    options.showCancel = true;
    return showModal(options);
}
export function showLoading(title = "加载中…") {
    wx.showLoading({
        title: title,
        mask: true //显示透明蒙层，防止触摸穿透,
    });
}
export const hideLoading = wx.hideLoading;
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
export function showToast(title, icon = "success", image, duration = 1500, mask = true) {
    return _showToast({ title, icon, image, duration, mask });
}
export function showSuccess(title) {
    showToast(title);
}
export function showToastLoading(title) {
    showToast(title);
}
export function makeNavigationUrl(url, params) {
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
function enhanceNavigation(fun) {
    return function navigate(url, params) {
        fun({ url: makeNavigationUrl(url, params) });
    };
}
export const navigateTo = enhanceNavigation(wx.navigateTo);
export const redirectTo = enhanceNavigation(wx.redirectTo);
export const switchTab = enhanceNavigation(wx.switchTab);
export const navigateBack = enhanceNavigation(wx.navigateBack);
export const reLaunch = enhanceNavigation(wx.reLaunch);
export function setNavigationBarTitle(title) {
    wx.setNavigationBarTitle({ title });
}
