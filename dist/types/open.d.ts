export declare const authorize: (options?: wx.AuthorizeOptions | undefined) => Promise<wx.AuthorizeResponse>;
export declare const chooseAddress: (options?: wx.ChooseAddressOptions | undefined) => Promise<wx.ChooseAddressResponse>;
export declare const addCard: (options?: wx.AddCardOptions | undefined) => Promise<wx.AddCardResponse>;
export declare const openCard: (options?: wx.OpenCardOptions | undefined) => Promise<wx.BaseResponse>;
export declare const chooseInvoiceTitle: (options?: wx.ChooseInvoiceTitleOptions | undefined) => Promise<wx.ChooseInvoiceTitleResponse>;
export declare const login: (options?: wx.LoginOptions | undefined) => Promise<wx.LoginResponse>;
export declare const checkSession: (options?: wx.BaseOptions | undefined) => Promise<wx.BaseResponse>;
export declare const requestPayment: (options?: wx.RequestPaymentOptions | undefined) => Promise<wx.BaseResponse>;
export declare const getSetting: (options?: wx.SettingOptions | undefined) => Promise<wx.SettingsResponse>;
export declare const showShareMenu: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const hideShareMenu: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const updateShareMenu: (options?: wx.BaseOptions | undefined) => Promise<{}>;
export declare const getShareInfo: (options?: wx.ShareInfoOptions | undefined) => Promise<wx.ShareInfoResponse>;
export declare const checkIsSupportSoterAuthentication: (options?: wx.CheckIsSupportSoterAuthenticationOptions | undefined) => Promise<wx.CheckIsSupportSoterAuthenticationResponse>;
export declare const startSoterAuthentication: (options?: wx.StartSoterAuthenticationOptions | undefined) => Promise<wx.StartSoterAuthenticationResponse>;
export declare const checkIsSoterEnrolledInDevice: (options?: wx.CheckIsSoterEnrolledInDeviceOptions | undefined) => Promise<wx.CheckIsSoterEnrolledInDeviceResponse>;
export declare const getUserInfo: (options?: wx.GetUserInfoOptions | undefined) => Promise<wx.UserInfoResponse>;
export declare const getWeRunData: (options?: wx.GetWeRunDataOption | undefined) => Promise<wx.GetWeRunDataResponse>;
