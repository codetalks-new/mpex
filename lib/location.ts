import { promisify } from "./utils";

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

export function promisifyMapContext(ctx: wx.MapContext) {
  return {
    getCenterLocation: promisify<wx.GetCenterLocationOptions, wx.Position>(
      ctx.getCenterLocation,
      ctx
    ),
    moveToLocation: ctx.moveToLocation,
    translateMarker: promisify<wx.TranslateMarkerOptions, wx.BaseResponse>(
      ctx.translateMarker,
      ctx
    ),
    includePoints: ctx.includePoints,
    getRegion: promisify<wx.GetRegionOptions, wx.GetRegionResponse>(
      ctx.getRegion,
      ctx
    ),
    getScale: promisify<wx.GetScaleOptions, wx.GetScaleResponse>(
      ctx.getScale,
      ctx
    )
  };
}
