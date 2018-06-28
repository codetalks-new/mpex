/**
 * 将普通对象转换成编码成 urlQuery
 *  注意：不支持嵌套
 * @param object 普通对象
 */
export declare function encodeQuery(object: object): string;
/**
 * 将 微信回调风格的接口函数包装成支持 Promise 风格的函数。
 * @param fun 微信回调风格接口函数
 */
export declare function promisify<P extends wx.BaseOptions, R>(fun: (options: P) => any): (options?: P | undefined) => Promise<R>;
export declare const login: (options?: wx.LoginOptions | undefined) => Promise<wx.LoginResponse>;
export declare const getUserInfo: (options?: wx.GetUserInfoOptions | undefined) => Promise<wx.UserInfoResponse>;
export declare const showModal: (options?: wx.ModalOptions | undefined) => Promise<wx.ModalResponse>;
export declare const getSetting: (options?: wx.SettingOptions | undefined) => Promise<wx.SettingsResponse>;
export declare const downloadFile: (options?: wx.DownloadFileOptions | undefined) => Promise<wx.DownloadFileResponse>;
export declare const saveFile: (options?: wx.SaveFileOptions | undefined) => Promise<wx.SavedFileData>;
export declare const getSystemInfo: (options?: wx.GetSystemInfoOptions | undefined) => Promise<wx.SystemInfo>;
export declare const setTabBarItem: (options?: wx.TabBarItem | undefined) => Promise<wx.BaseResponse>;
/**
 * 创建一个 WebSocket 连接。使用前请先阅读说明。

基础库 1.7.0 之前，一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个
WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.7.0 及以后，
支持存在多个 WebSokcet 连接，每次成功调用 wx.connectSocket 会返回一个新的 SocketTask。
 */
export declare const connectSocket: (options?: wx.ConnectSocketOptions | undefined) => Promise<wx.BaseResponse>;
/**
 * 通过 WebSocket 连接发送数据，需要先 connectSocket，并在 onSocketOpen 回调之后才能发送。
 */
export declare const sendSocketMessage: (options?: wx.SendSocketMessageOptions | undefined) => Promise<wx.BaseResponse>;
/**
 * 关闭 WebSocket 连接。
 * //注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
 */
export declare const closeSocket: (options?: wx.CloseSocketOptions | undefined) => Promise<wx.BaseResponse>;
/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
 */
export declare const getLocation: (options?: wx.GetLocationOptions | undefined) => Promise<wx.LocationData>;
/**
 * 打开地图选择位置。
 * 需要用户授权 scope.userLocation
 */
export declare const chooseLocation: (options?: wx.ChooseLocationOptions | undefined) => Promise<wx.ChooseLocationData>;
/**
 * 使用微信内置地图查看位置。
 * 需要用户授权 scope.userLocation
 */
export declare const openLocation: (options?: wx.OpenLocationOptions | undefined) => Promise<wx.BaseResponse>;
export declare const modalOptions: {
    title: string;
    content: string;
    showCancel: boolean;
    cancelText: string;
    cancelColor: string;
    confirmText: string;
    confirmColor: string;
};
export declare function confirm(content: string, title?: string): Promise<wx.ModalResponse>;
export declare function prompt(content: string, title?: string): Promise<wx.ModalResponse>;
export declare function showLoading(title?: string): void;
export declare const hideLoading: typeof wx.hideLoading;
/**
 *
 *
 * @param title 提示的内容
 * @param icon 图标，只支持"success"、"loading"
 * @param image 自定义图标的本地路径，image 的优先级高于 icon
 * @param duration 提示的延迟时间，单位毫秒，默认：1500
 * @param mask 是否显示透明蒙层，防止触摸穿透，默认：true
 */
export declare function showToast(title: string, icon?: "success" | "loading", image?: string, duration?: number, mask?: boolean): Promise<{}>;
export declare function showSuccess(title: string): void;
export declare function showToastLoading(title: string): void;
export declare function makeNavigationUrl(url: string, params?: object): string;
export declare const navigateTo: (url: string, params?: object | undefined) => void;
export declare const redirectTo: (url: string, params?: object | undefined) => void;
export declare const switchTab: (url: string, params?: object | undefined) => void;
export declare const navigateBack: (url: string, params?: object | undefined) => void;
export declare const reLaunch: (url: string, params?: object | undefined) => void;
export declare function setNavigationBarTitle(title: string): void;
