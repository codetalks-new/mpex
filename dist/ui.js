"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
exports.setTabBarItem = utils_1.promisify(wx.setTabBarItem);
exports.modalOptions = {
    title: "提示",
    content: "提示内容",
    showCancel: true,
    cancelText: "取消",
    cancelColor: "#000000",
    confirmText: "确定",
    confirmColor: "#3CC51F" //确定按钮的文字颜色,
};
exports.showModal = utils_1.promisify(wx.showModal);
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
const _showToast = utils_1.promisify(wx.showToast);
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
        return url + "?" + utils_1.encodeQuery(params);
    }
    else {
        return url;
    }
}
exports.makeNavigationUrl = makeNavigationUrl;
function enhanceNavigation(fun) {
    const pfun = utils_1.promisify(fun);
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
/**
 * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
 *
 * 注意：为了不让用户在使用小程序时造成困扰，
 *
 * **目前页面路径最多只能10层**，请尽量避免多层级的交互方式。
 *
 * Tip:
 * `wx.navigateTo` 和 `wx.redirectTo` 不允许跳转到 tabbar 页面，只能用 `wx.switchTab` 跳转到 tabbar 页面
 */
exports.navigateTo = enhanceNavigation(wx.navigateTo);
/**
 * 关闭当前页面，跳转到应用内的某个页面。
 * Tip:
 * `wx.navigateTo` 和 `wx.redirectTo` 不允许跳转到 tabbar 页面，只能用 `wx.switchTab` 跳转到 tabbar 页面
 */
exports.redirectTo = enhanceNavigation(wx.redirectTo);
/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
 */
exports.switchTab = enhanceNavigation(wx.switchTab);
/**
 * 关闭所有页面，打开到应用内的某个页面。
 */
exports.reLaunch = enhanceNavigation(wx.reLaunch);
/**
 *
 * 关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。
 *
 * @param delta  返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 * @default 1
 */
function navigateBack(delta = 1) {
    const newFun = utils_1.promisify(wx.navigateBack);
    const options = {
        delta
    };
    return newFun(options);
}
exports.navigateBack = navigateBack;
/**
 * 动态设置当前页面的标题。
 * @param title 页面标题
 */
function setNavigationBarTitle(title) {
    wx.setNavigationBarTitle({ title });
}
exports.setNavigationBarTitle = setNavigationBarTitle;
exports.showActionSheet = utils_1.promisify(wx.showActionSheet);
/**
 *
 * @param actionMenus 操作菜单数组
 * @param itemColor 按钮的文字颜色，默认为"#000000"
 */
function chooseActionMenu(actionMenus, itemColor = "#000000") {
    return __awaiter(this, void 0, void 0, function* () {
        const menus = actionMenus.map(it => it.title);
        try {
            const resp = yield exports.showActionSheet({ itemList: menus, itemColor });
            return actionMenus[resp.tapIndex];
        }
        catch (error) {
            return Promise.reject(error);
        }
    });
}
exports.chooseActionMenu = chooseActionMenu;
