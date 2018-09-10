export declare const setStorage: (options?: wx.SetStorageOptions | undefined) => Promise<wx.BaseResponse>;
/**
 *
 * @param key 本地缓存中的指定的 key
 * @param data 需要存储的内容
 */
export declare function setStorageByKey(key: string, data: string | object): Promise<wx.BaseResponse>;
export declare const getStorage: (options?: wx.GetStorageOptions | undefined) => Promise<wx.BaseResponse>;
/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param key 本地缓存中的指定的 key
 */
export declare function getStorageByKey(key: string): Promise<wx.BaseResponse>;
export declare const removeStorage: (options?: wx.RemoveStorageOptions | undefined) => Promise<wx.BaseResponse>;
/**
 * 从本地缓存中异步移除指定 key 。
 * @param key 本地缓存中的指定的 key
 */
export declare function removeStorageByKey(key: string): Promise<wx.BaseResponse>;
