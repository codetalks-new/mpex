/**
 * 将 微信回调风格的接口函数包装成支持 Promise 风格的函数。
 * @param fun 微信回调风格接口函数
 */
export declare function promisify<P extends wx.BaseOptions, R>(fun: (options: P) => any): ((options?: P) => Promise<R>);
export declare const login: (options?: any) => Promise<any>;
export declare const getUserInfo: (options?: any) => Promise<any>;
export declare const showModal: (options?: any) => Promise<any>;
export declare const getSetting: (options?: {} | undefined) => Promise<{}>;
export declare const modalOptions: {
    title: string;
    content: string;
    showCancel: boolean;
    cancelText: string;
    cancelColor: string;
    confirmText: string;
    confirmColor: string;
};
export declare function confirm(content: string, title?: string): Promise<any>;
export declare function prompt(content: string, title?: string): Promise<any>;
