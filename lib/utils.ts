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
  fun: (options: P) => any,
  thisInstance?: object
) {
  const newFun = function(options?: P) {
    const opts = options || ({} as any);
    return new Promise<R>(function(resolve, reject) {
      opts.success = (res: any) => {
        resolve(res);
      };
      opts.fail = (reason: any) => {
        if (reason) {
          console.error(reason);
        }
        reject(reason);
      };
      if (thisInstance) {
        fun.call(thisInstance, opts);
      } else {
        fun(opts);
      }
    });
  };

  return newFun;
}

/**
 * Act like Promise.deferred
 * creates an object consisting of { promise, resolve, reject }:
 * promise is a promise that is currently in the pending state.
 * resolve(value) resolves the promise with value.
 * reject(reason) moves the promise from the pending state to the rejected state, with rejection reason reason.
 */
export function deferred<T>() {
  let resolve: (value?: T | PromiseLike<T> | undefined) => void = value =>
    value;
  let reject: (reason?: any) => void = error => error;
  const promise = new Promise<T>((resolveP, rejectP) => {
    resolve = resolveP;
    reject = rejectP;
  });
  return { promise, resolve, reject };
}
