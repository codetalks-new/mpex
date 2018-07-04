/**
 * 将普通对象转换成编码成 urlQuery
 *  注意：不支持嵌套
 * @param object 普通对象
 */
export function encodeQuery(object: object): string {
  const po = object as any;
  const kvArray: string[] = [];
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
export function promisify<P extends wx.BaseOptions, R>(
  fun: (options: P) => any
) {
  function newFun(options?: P): Promise<R> {
    const opts: P = options || ({} as P);
    return new Promise(function(resolve, reject) {
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

export const login = promisify<wx.LoginOptions, wx.LoginResponse>(wx.login);
export const getUserInfo = promisify<
  wx.GetUserInfoOptions,
  wx.UserInfoResponse
>(wx.getUserInfo);

export const showModal = promisify<wx.ModalOptions, wx.ModalResponse>(
  wx.showModal
);

export const getSetting = promisify<wx.SettingOptions, wx.SettingsResponse>(
  wx.getSetting
);

export const downloadFile = promisify<
  wx.DownloadFileOptions,
  wx.DownloadFileResponse
>(wx.downloadFile);

export const saveFile = promisify<wx.SaveFileOptions, wx.SavedFileData>(
  wx.saveFile
);

export const getSystemInfo = promisify<wx.GetSystemInfoOptions, wx.SystemInfo>(
  wx.getSystemInfo
);

export const setTabBarItem = promisify<wx.TabBarItem, wx.BaseResponse>(
  wx.setTabBarItem
);

/**
 *
 * @param key 本地缓存中的指定的 key
 * @param data 需要存储的内容
 */
export function setStorage(key: string, data: string | object) {
  const newFun = promisify<wx.SetStorageOptions, wx.BaseResponse>(
    wx.setStorage
  );
  return newFun({
    key,
    data
  });
}

/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param key 本地缓存中的指定的 key
 */
export function getStorageByKey(key: string) {
  const newFunc = promisify<wx.GetStorageOptions, wx.BaseResponse>(
    wx.getStorage
  );
  return newFunc({ key });
}

/**
 * 从本地缓存中异步移除指定 key 。
 * @param key 本地缓存中的指定的 key
 */
export function removeStorageByKey(key: string) {
  const newFunc = promisify<wx.RemoveStorageOptions, wx.BaseResponse>(
    wx.removeStorage
  );
  return newFunc({ key });
}

/**
 * 创建一个 WebSocket 连接。使用前请先阅读说明。

基础库 1.7.0 之前，一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个
WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.7.0 及以后，
支持存在多个 WebSokcet 连接，每次成功调用 wx.connectSocket 会返回一个新的 SocketTask。
 */
export const connectSocket = promisify<
  wx.ConnectSocketOptions,
  wx.BaseResponse
>(wx.connectSocket);

/**
 * 通过 WebSocket 连接发送数据，需要先 connectSocket，并在 onSocketOpen 回调之后才能发送。
 */
export const sendSocketMessage = promisify<
  wx.SendSocketMessageOptions,
  wx.BaseResponse
>(wx.sendSocketMessage);

/**
 * 关闭 WebSocket 连接。
 * //注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
 */
export const closeSocket = promisify<wx.CloseSocketOptions, wx.BaseResponse>(
  wx.closeSocket
);

/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
 */
export const getLocation = promisify<wx.GetLocationOptions, wx.LocationData>(
  wx.getLocation
);

/**
 * 打开地图选择位置。
 * 需要用户授权 scope.userLocation
 */
export const chooseLocation = promisify<
  wx.ChooseLocationOptions,
  wx.ChooseLocationData
>(wx.chooseLocation);

/**
 * 使用微信内置地图查看位置。
 * 需要用户授权 scope.userLocation
 */
export const openLocation = promisify<wx.OpenLocationOptions, wx.BaseResponse>(
  wx.openLocation
);

export const modalOptions = {
  title: "提示", //提示的标题,
  content: "提示内容", //提示的内容,
  showCancel: true, //是否显示取消按钮,
  cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
  cancelColor: "#000000", //取消按钮的文字颜色,
  confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
  confirmColor: "#3CC51F" //确定按钮的文字颜色,
};

export function showConfirm(content: string, title: string = "提示") {
  const options: wx.ModalOptions = Object.assign({}, modalOptions);
  options.title = title;
  options.content = content;
  options.showCancel = false;
  return showModal(options);
}

export const confirm = showConfirm;

export function showPrompt(content: string, title: string = "提示") {
  const options: wx.ModalOptions = Object.assign({}, modalOptions);
  options.title = title;
  options.content = content;
  options.showCancel = true;
  return showModal(options);
}

export const prompt = showPrompt;

export function showLoading(title: string = "加载中…") {
  wx.showLoading({
    title: title, //提示的内容,
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
export function showToast(
  title: string,
  icon: "success" | "loading" = "success",
  image?: string,
  duration: number = 1500,
  mask: boolean = true
) {
  return _showToast({ title, icon, image, duration, mask });
}

export function showSuccess(title: string) {
  showToast(title);
}

export function showToastLoading(title: string) {
  showToast(title);
}

export function makeNavigationUrl(url: string, params?: object) {
  if (url[0] != "/") {
    url = "/" + url;
  }
  if (params) {
    return url + "?" + encodeQuery(params);
  } else {
    return url;
  }
}

declare var console: any;

type OldNavigationFunction = typeof wx.navigateTo;
function enhanceNavigation(fun: OldNavigationFunction) {
  const pfun = promisify(fun);
  return function navigate(url: string, params?: object) {
    pfun({ url: makeNavigationUrl(url, params) })
      .then(function(res) {
        console.info("NAV DONE " + url);
      })
      .catch(function(reason) {
        console.info("NAV FAIL " + url + ", reason:", reason);
      });
  };
}

export const navigateTo = enhanceNavigation(wx.navigateTo);
export const redirectTo = enhanceNavigation(wx.redirectTo);
export const switchTab = enhanceNavigation(wx.switchTab);
export const navigateBack = enhanceNavigation(wx.navigateBack);
export const reLaunch = enhanceNavigation(wx.reLaunch);

export function setNavigationBarTitle(title: string) {
  wx.setNavigationBarTitle({ title });
}
