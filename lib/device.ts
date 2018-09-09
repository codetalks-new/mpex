import { promisify } from "./utils";

export const startAccelerometer = promisify(wx.startAccelerometer);
export const stopAccelerometer = promisify(wx.stopAccelerometer);

export const openBluetoothAdapter = promisify<
  wx.OpenBluetoothAdapterOptions,
  wx.BaseResponse
>(wx.openBluetoothAdapter);

export const closeBluetoothAdapter = promisify<
  wx.CloseBluetoothAdapterOptions,
  wx.BaseResponse
>(wx.closeBluetoothAdapter);

export const getBluetoothAdapterState = promisify<
  wx.GetBluetoothAdapterStateOptions,
  wx.BluetoothAdapterStateResponse
>(wx.getBluetoothAdapterState);

export const startBluetoothDevicesDiscovery = promisify<
  wx.StartBluetoothDevicesDiscoveryOptions,
  wx.ErrMsgResponse
>(wx.startBluetoothDevicesDiscovery);

export const stopBluetoothDevicesDiscovery = promisify<
  wx.StopBluetoothDevicesDiscoveryOptions,
  wx.ErrMsgResponse
>(wx.stopBluetoothDevicesDiscovery);

export const getBluetoothDevices = promisify<
  wx.GetBluetoothDevicesOptions,
  wx.GetBluetoothDevicesResponse
>(wx.getBluetoothDevices);

export const getConnectedBluetoothDevices = promisify<
  wx.GetConnectedBluetoothDevicesOptions,
  wx.GetConnectedBluetoothDevicesResponse
>(wx.getConnectedBluetoothDevices);

export const createBLEConnection = promisify<
  wx.CreateBLEConnectionOptions,
  wx.ErrMsgResponse
>(wx.createBLEConnection);

export const closeBLEConnection = promisify<
  wx.CloseBLEConnectionOptions,
  wx.ErrMsgResponse
>(wx.closeBLEConnection);

export const getBLEDeviceServices = promisify<
  wx.GetBLEDeviceServicesOptions,
  wx.GetBLEDeviceServicesResponse
>(wx.getBLEDeviceServices);

export const getBLEDeviceCharacteristics = promisify<
  wx.GetBLEDeviceCharacteristicsOptions,
  wx.GetBLEDeviceCharacteristicsReponse
>(wx.getBLEDeviceCharacteristics);

export const readBLECharacteristicValue = promisify<
  wx.ReadBLECharacteristicValueOptions,
  wx.ReadBLECharacteristicValueResponse
>(wx.readBLECharacteristicValue);

export const writeBLECharacteristicValue = promisify<
  wx.WriteBLECharacteristicValueOptions,
  wx.ErrMsgResponse
>(wx.writeBLECharacteristicValue);

export const notifyBLECharacteristicValueChange = promisify<
  wx.NotifyBLECharacteristicValueChangeOptions,
  wx.ErrMsgResponse
>(wx.notifyBLECharacteristicValueChange);

export const startCompass = promisify(wx.startCompass);
export const stopCompass = promisify(wx.stopCompass);

export const setClipboardData = promisify<
  wx.SetClipboardDataOptions,
  wx.BaseResponse
>(wx.setClipboardData);

export const getClipboardData = promisify<
  wx.GetClipboardDataOptions,
  wx.GetClipboardDataResponse
>(wx.getClipboardData);

export const startBeaconDiscovery = promisify<
  wx.StartBeaconOptions,
  wx.BaseResponse
>(wx.startBeaconDiscovery);

export const stopBeaconDiscovery = promisify<
  wx.StopBeaconOptions,
  wx.BaseResponse
>(wx.stopBeaconDiscovery);

export const getBeacons = promisify<
  wx.GetBeaconsOptions,
  wx.GetBeaconsResponse
>(wx.getBeacons);

export const getNetworkType = promisify<
  wx.GetNetworkTypeOptions,
  wx.NetworkTypeData
>(wx.getNetworkType);

export const getHCEState = promisify<wx.GetHCEStateOptions, wx.HCEBaseResponse>(
  wx.getHCEState
);

export const startHCE = promisify<wx.StartHCEOptions, wx.HCEBaseResponse>(
  wx.startHCE
);

export const stopHCE = promisify<wx.HCEBaseOptions, wx.HCEBaseResponse>(
  wx.stopHCE
);

export const sendHCEMessage = promisify<
  wx.SendHCEMessageOptions,
  wx.HCEBaseResponse
>(wx.sendHCEMessage);

export const addPhoneContact = promisify<
  wx.AddPhoneContactOptions,
  wx.BaseResponse
>(wx.addPhoneContact);

export const makePhoneCall = promisify<
  wx.MakePhoneCallOptions,
  wx.BaseResponse
>(wx.makePhoneCall);

export const scanCode = promisify<wx.ScanCodeOptions, wx.ScanCodeData>(
  wx.scanCode
);

export const setScreenBrightness = promisify(wx.setScreenBrightness);

export const getScreenBrightness = promisify(wx.getScreenBrightness);

export const setKeepScreenOn = promisify(wx.setKeepScreenOn);

export const getSystemInfo = promisify<wx.GetSystemInfoOptions, wx.SystemInfo>(
  wx.getSystemInfo
);

export const vibrateLong = promisify(wx.vibrateLong);

export const vibrateShort = promisify(wx.vibrateShort);

export const startWifi = promisify(wx.startWifi);

export const stopWifi = promisify(wx.stopWifi);

export const connectWifi = promisify(wx.connectWifi);

export const getWifiList = promisify(wx.getWifiList);

export const setWifiList = promisify(wx.setWifiList);

export const getConnectedWifi = promisify<
  wx.GetConnectedWifiOptions,
  wx.GetConnectedWifiResponse
>(wx.getConnectedWifi);
