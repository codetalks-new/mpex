/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
 */
export declare const getLocation: (options: wx.GetLocationOptions) => Promise<wx.LocationData>;
/**
 * 打开地图选择位置。
 * 需要用户授权 scope.userLocation
 */
export declare const chooseLocation: (options: wx.ChooseLocationOptions) => Promise<wx.ChooseLocationData>;
/**
 * 使用微信内置地图查看位置。
 * 需要用户授权 scope.userLocation
 */
export declare const openLocation: (options: wx.OpenLocationOptions) => Promise<wx.BaseResponse>;
export declare function promisifyMapContext(ctx: wx.MapContext): {
    getCenterLocation: (options: wx.GetCenterLocationOptions) => Promise<wx.Position>;
    moveToLocation: () => void;
    translateMarker: (options: wx.TranslateMarkerOptions) => Promise<wx.BaseResponse>;
    includePoints: (options: wx.IncludePointsOptions) => void;
    getRegion: (options: wx.GetRegionOptions) => Promise<wx.GetRegionResponse>;
    getScale: (options: wx.GetScaleOptions) => Promise<wx.GetScaleResponse>;
};
