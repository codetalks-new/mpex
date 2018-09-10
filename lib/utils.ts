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
  fun: (options?: P) => any,
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
