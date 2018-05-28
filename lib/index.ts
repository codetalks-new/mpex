/**
 * 将 微信回调风格的接口函数包装成支持 Promise 风格的函数。
 * @param fun 微信回调风格接口函数
 */

export function promisify<P extends wx.BaseOptions, R>(
  fun: (options: P) => any
): ((options?: P) => Promise<R>) {
  function newFun(options?: P): Promise<R> {
    const opts: P = options || ({} as P);
    return new Promise(function(resolve, reject) {
      opts.success = (res: R) => {
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

export const login = promisify<wx.LoginOptions, wx.LoginResponse>(wx.login);
export const getUserInfo = promisify<
  wx.GetUserInfoOptions,
  wx.UserInfoResponse
>(wx.getUserInfo);

export const showModal = promisify<wx.ModalOptions, wx.ModalResponse>(
  wx.showModal
);

export const getSetting = promisify(wx.getSetting);

export const modalOptions = {
  title: "提示", //提示的标题,
  content: "提示内容", //提示的内容,
  showCancel: true, //是否显示取消按钮,
  cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
  cancelColor: "#000000", //取消按钮的文字颜色,
  confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
  confirmColor: "#3CC51F" //确定按钮的文字颜色,
};

export function confirm(content: string, title: string = "提示") {
  const options: wx.ModalOptions = Object.assign({}, modalOptions);
  options.title = title;
  options.content = content;
  options.showCancel = false;
  return showModal(options);
}

export function prompt(content: string, title: string = "提示") {
  const options: wx.ModalOptions = Object.assign({}, modalOptions);
  options.title = title;
  options.content = content;
  options.showCancel = true;
  return showModal(options);
}
