import { promisify } from "./utils";

export const setStorage = promisify<wx.SetStorageOptions, wx.BaseResponse>(
  wx.setStorage
);

/**
 *
 * @param key 本地缓存中的指定的 key
 * @param data 需要存储的内容
 */
export function setStorageByKey(key: string, data: string | object) {
  return setStorage({
    key,
    data
  });
}

export const getStorage = promisify<wx.GetStorageOptions, wx.BaseResponse>(
  wx.getStorage
);

/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param key 本地缓存中的指定的 key
 */
export function getStorageByKey(key: string) {
  return getStorage({ key });
}

export const removeStorage = promisify<
  wx.RemoveStorageOptions,
  wx.BaseResponse
>(wx.removeStorage);

/**
 * 从本地缓存中异步移除指定 key 。
 * @param key 本地缓存中的指定的 key
 */
export function removeStorageByKey(key: string) {
  return removeStorage({ key });
}
