export declare const startAccelerometer: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const stopAccelerometer: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const openBluetoothAdapter: (options?: wx.OpenBluetoothAdapterOptions | undefined) => Promise<wx.BaseResponse>;
export declare const closeBluetoothAdapter: (options?: wx.CloseBluetoothAdapterOptions | undefined) => Promise<wx.BaseResponse>;
export declare const getBluetoothAdapterState: (options?: wx.GetBluetoothAdapterStateOptions | undefined) => Promise<wx.BluetoothAdapterStateResponse>;
export declare const startBluetoothDevicesDiscovery: (options?: wx.StartBluetoothDevicesDiscoveryOptions | undefined) => Promise<wx.ErrMsgResponse>;
export declare const stopBluetoothDevicesDiscovery: (options?: wx.StopBluetoothDevicesDiscoveryOptions | undefined) => Promise<wx.ErrMsgResponse>;
export declare const getBluetoothDevices: (options?: wx.GetBluetoothDevicesOptions | undefined) => Promise<wx.GetBluetoothDevicesResponse>;
export declare const getConnectedBluetoothDevices: (options?: wx.GetConnectedBluetoothDevicesOptions | undefined) => Promise<wx.GetConnectedBluetoothDevicesResponse>;
export declare const createBLEConnection: (options?: wx.CreateBLEConnectionOptions | undefined) => Promise<wx.ErrMsgResponse>;
export declare const closeBLEConnection: (options?: wx.CloseBLEConnectionOptions | undefined) => Promise<wx.ErrMsgResponse>;
export declare const getBLEDeviceServices: (options?: wx.GetBLEDeviceServicesOptions | undefined) => Promise<wx.GetBLEDeviceServicesResponse>;
export declare const getBLEDeviceCharacteristics: (options?: wx.GetBLEDeviceCharacteristicsOptions | undefined) => Promise<wx.GetBLEDeviceCharacteristicsReponse>;
export declare const readBLECharacteristicValue: (options?: wx.ReadBLECharacteristicValueOptions | undefined) => Promise<wx.ReadBLECharacteristicValueResponse>;
export declare const writeBLECharacteristicValue: (options?: wx.WriteBLECharacteristicValueOptions | undefined) => Promise<wx.ErrMsgResponse>;
export declare const notifyBLECharacteristicValueChange: (options?: wx.NotifyBLECharacteristicValueChangeOptions | undefined) => Promise<wx.ErrMsgResponse>;
export declare const startCompass: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const stopCompass: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const setClipboardData: (options?: wx.SetClipboardDataOptions | undefined) => Promise<wx.BaseResponse>;
export declare const getClipboardData: (options?: wx.GetClipboardDataOptions | undefined) => Promise<wx.GetClipboardDataResponse>;
export declare const startBeaconDiscovery: (options?: wx.StartBeaconOptions | undefined) => Promise<wx.BaseResponse>;
export declare const stopBeaconDiscovery: (options?: wx.StopBeaconOptions | undefined) => Promise<wx.BaseResponse>;
export declare const getBeacons: (options?: wx.GetBeaconsOptions | undefined) => Promise<wx.GetBeaconsResponse>;
export declare const getNetworkType: (options?: wx.GetNetworkTypeOptions | undefined) => Promise<wx.NetworkTypeData>;
export declare const getHCEState: (options?: wx.GetHCEStateOptions | undefined) => Promise<wx.HCEBaseResponse>;
export declare const startHCE: (options?: wx.StartHCEOptions | undefined) => Promise<wx.HCEBaseResponse>;
export declare const stopHCE: (options?: wx.HCEBaseOptions | undefined) => Promise<wx.HCEBaseResponse>;
export declare const sendHCEMessage: (options?: wx.SendHCEMessageOptions | undefined) => Promise<wx.HCEBaseResponse>;
export declare const addPhoneContact: (options?: wx.AddPhoneContactOptions | undefined) => Promise<wx.BaseResponse>;
export declare const makePhoneCall: (options?: wx.MakePhoneCallOptions | undefined) => Promise<wx.BaseResponse>;
export declare const scanCode: (options?: wx.ScanCodeOptions | undefined) => Promise<wx.ScanCodeData>;
export declare const setScreenBrightness: (options?: wx.SetScreenBrightnessOptions | undefined) => Promise<{}>;
export declare const getScreenBrightness: (options?: wx.GetScreenBrightnessOptions | undefined) => Promise<{}>;
export declare const setKeepScreenOn: (options?: wx.SetKeepScreenOnOptions | undefined) => Promise<{}>;
export declare const getSystemInfo: (options?: wx.GetSystemInfoOptions | undefined) => Promise<wx.SystemInfo>;
export declare const vibrateLong: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const vibrateShort: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const startWifi: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const stopWifi: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const connectWifi: (options?: wx.ConnectWifiOptions | undefined) => Promise<{}>;
export declare const getWifiList: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const setWifiList: (options?: wx.SetWifiListOptions | undefined) => Promise<{}>;
export declare const getConnectedWifi: (options?: wx.GetConnectedWifiOptions | undefined) => Promise<wx.GetConnectedWifiResponse>;
