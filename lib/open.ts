import { promisify } from "./utils";

export const authorize = promisify<wx.AuthorizeOptions, wx.AuthorizeResponse>(
  wx.authorize
);

export const chooseAddress = promisify<
  wx.ChooseAddressOptions,
  wx.ChooseAddressResponse
>(wx.chooseAddress);

export const addCard = promisify<wx.AddCardOptions, wx.AddCardResponse>(
  wx.addCard
);

export const openCard = promisify<wx.OpenCardOptions, wx.BaseResponse>(
  wx.openCard
);

export const chooseInvoiceTitle = promisify<
  wx.ChooseInvoiceTitleOptions,
  wx.ChooseInvoiceTitleResponse
>(wx.chooseInvoiceTitle);

export const login = promisify<wx.LoginOptions, wx.LoginResponse>(wx.login);

export const checkSession = promisify<wx.CheckSessionOption, wx.BaseResponse>(
  wx.checkSession
);

export const requestPayment = promisify<
  wx.RequestPaymentOptions,
  wx.BaseResponse
>(wx.requestPayment);

export const getSetting = promisify<wx.SettingOptions, wx.SettingsResponse>(
  wx.getSetting
);

export const showShareMenu = promisify(wx.showShareMenu);
export const hideShareMenu = promisify(wx.hideShareMenu);
export const updateShareMenu = promisify(wx.updateShareMenu);
export const getShareInfo = promisify<
  wx.ShareInfoOptions,
  wx.ShareInfoResponse
>(wx.getShareInfo);

export const checkIsSupportSoterAuthentication = promisify<
  wx.CheckIsSupportSoterAuthenticationOptions,
  wx.CheckIsSupportSoterAuthenticationResponse
>(wx.checkIsSupportSoterAuthentication);

export const startSoterAuthentication = promisify<
  wx.StartSoterAuthenticationOptions,
  wx.StartSoterAuthenticationResponse
>(wx.startSoterAuthentication);

export const checkIsSoterEnrolledInDevice = promisify<
  wx.CheckIsSoterEnrolledInDeviceOptions,
  wx.CheckIsSoterEnrolledInDeviceResponse
>(wx.checkIsSoterEnrolledInDevice);

export const getUserInfo = promisify<
  wx.GetUserInfoOptions,
  wx.UserInfoResponse
>(wx.getUserInfo);

export const getWeRunData = promisify<
  wx.GetWeRunDataOption,
  wx.GetWeRunDataResponse
>(wx.getWeRunData);
