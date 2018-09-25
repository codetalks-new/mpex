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
function promisify(fun, thisInstance) {
    const newFun = function (options) {
        const opts = options || {};
        return new Promise(function (resolve, reject) {
            opts.success = (res) => {
                resolve(res);
            };
            opts.fail = (reason) => {
                if (reason) {
                    console.error(reason);
                }
                reject(reason);
            };
            if (thisInstance) {
                fun.call(thisInstance, opts);
            }
            else {
                fun(opts);
            }
        });
    };
    return newFun;
}
exports.promisify = promisify;
/**
 * Act like Promise.deferred
 * creates an object consisting of { promise, resolve, reject }:
 * promise is a promise that is currently in the pending state.
 * resolve(value) resolves the promise with value.
 * reject(reason) moves the promise from the pending state to the rejected state, with rejection reason reason.
 */
function deferred() {
    let resolve = value => value;
    let reject = error => error;
    const promise = new Promise((resolveP, rejectP) => {
        resolve = resolveP;
        reject = rejectP;
    });
    return { promise, resolve, reject };
}
exports.deferred = deferred;
