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
