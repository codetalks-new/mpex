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
export declare function promisify<P extends wx.BaseOptions, R>(fun: (options: P) => any, thisInstance?: object): (options?: P | undefined) => Promise<R>;
/**
 * Act like Promise.deferred
 * creates an object consisting of { promise, resolve, reject }:
 * promise is a promise that is currently in the pending state.
 * resolve(value) resolves the promise with value.
 * reject(reason) moves the promise from the pending state to the rejected state, with rejection reason reason.
 */
export declare function deferred<T>(): {
    promise: Promise<T>;
    resolve: (value?: T | PromiseLike<T> | undefined) => void;
    reject: (reason?: any) => void;
};
