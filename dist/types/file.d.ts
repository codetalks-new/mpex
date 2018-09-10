export declare const saveFile: (options?: wx.SaveFileOptions | undefined) => Promise<wx.SavedFileData>;
export declare const getSavedFileList: (options?: wx.GetSavedFileListOptions | undefined) => Promise<wx.GetSavedFileListData>;
export declare const getSavedFileInfo: (options?: wx.GetSavedFileInfoOptions | undefined) => Promise<wx.SavedFileInfoData>;
export declare const removeSavedFile: (options?: wx.RemoveSavedFileOptions | undefined) => Promise<wx.BaseResponse>;
export declare const getFileInfo: (options?: wx.GetFileInfoOptions | undefined) => Promise<wx.GetFileInfoResponse>;
export declare const openDocument: (options?: wx.OpenDocumentOptions | undefined) => Promise<wx.BaseResponse>;
