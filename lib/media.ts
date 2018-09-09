import { promisify } from "./utils";

export function promisifyCameraContext(ctx: wx.CameraContext) {
  return {
    takePhoto: promisify<wx.TakePhotoOptions, wx.TakePhotoResponse>(
      ctx.takePhoto,
      ctx
    ),
    startRecord: promisify<wx.StartRecordOptions, wx.StartRecordResponse>(
      ctx.startRecord,
      ctx
    ),
    stopRecord: promisify<wx.StopRecordOptions, wx.StopRecordResponse>(
      ctx.stopRecord
    )
  };
}

export const loadFontFace = promisify<wx.LoadFontFaceOptions, wx.BaseResponse>(
  wx.loadFontFace
);

export const chooseImage = promisify<
  wx.ChooseImageOptions,
  wx.ChooseImageResponse
>(wx.chooseImage);

export const previewImage = promisify<wx.PreviewImageOptions, wx.BaseResponse>(
  wx.previewImage
);

export const getImageInfo = promisify<
  wx.GetImageInfoOptions,
  wx.GetImageInfoResponse
>(wx.getImageInfo);

export const saveImageToPhotosAlbum = promisify<
  wx.SaveImageToPhotosAlbumOption,
  wx.BaseResponse
>(wx.saveImageToPhotosAlbum);

export const chooseVideo = promisify<
  wx.ChooseVideoOptions,
  wx.ChooseVideoResponse
>(wx.chooseVideo);

export const saveVideoToPhotosAlbum = promisify<
  wx.SaveVideoOptions,
  wx.BaseResponse
>(wx.saveVideoToPhotosAlbum);
