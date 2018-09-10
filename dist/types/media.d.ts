export declare function promisifyCameraContext(ctx: wx.CameraContext): {
    takePhoto: (options?: wx.TakePhotoOptions | undefined) => Promise<wx.TakePhotoResponse>;
    startRecord: (options?: wx.StartRecordOptions | undefined) => Promise<wx.StartRecordResponse>;
    stopRecord: (options?: wx.StopRecordOptions | undefined) => Promise<wx.StopRecordResponse>;
};
export declare const loadFontFace: (options?: wx.LoadFontFaceOptions | undefined) => Promise<wx.BaseResponse>;
export declare const chooseImage: (options?: wx.ChooseImageOptions | undefined) => Promise<wx.ChooseImageResponse>;
export declare const previewImage: (options?: wx.PreviewImageOptions | undefined) => Promise<wx.BaseResponse>;
export declare const getImageInfo: (options?: wx.GetImageInfoOptions | undefined) => Promise<wx.GetImageInfoResponse>;
export declare const saveImageToPhotosAlbum: (options?: wx.SaveImageToPhotosAlbumOptions | undefined) => Promise<wx.BaseResponse>;
export declare const chooseVideo: (options?: wx.ChooseVideoOptions | undefined) => Promise<wx.VideoData>;
export declare const saveVideoToPhotosAlbum: (options?: wx.SaveVideoOptions | undefined) => Promise<wx.BaseResponse>;
