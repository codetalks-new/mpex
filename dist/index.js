/**
 * 将 微信回调风格的接口函数包装成支持 Promise 风格的函数。
 * @param fun 微信回调风格接口函数
 */
export function promisify(fun) {
    function newFun(options) {
        const opts = options || {};
        return new Promise(function (resolve, reject) {
            opts.success = (res) => {
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
