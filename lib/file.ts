import { promisify } from "./utils";

export const saveFile = promisify<wx.SaveFileOptions, wx.SavedFileData>(
  wx.saveFile
);

export const getSavedFileList = promisify<
  wx.GetSavedFileListOptions,
  wx.GetSavedFileListData
>(wx.getSavedFileList);

export const getSavedFileInfo = promisify<
  wx.GetSavedFileInfoOptions,
  wx.SavedFileInfoData
>(wx.getSavedFileInfo);

export const removeSavedFile = promisify<
  wx.RemoveSavedFileOptions,
  wx.BaseResponse
>(wx.removeSavedFile);

export const getFileInfo = promisify<
  wx.GetFileInfoOptions,
  wx.GetFileInfoResponse
>(wx.getFileInfo);

export const openDocument = promisify<wx.OpenDocumentOptions, wx.BaseResponse>(
  wx.openDocument
);
