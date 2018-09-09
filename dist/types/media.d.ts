export declare function promisifyCameraContext(ctx: wx.CameraContext): {
    takePhoto: (options: wx.TakePhotoOptions) => Promise<wx.TakePhotoResponse>;
    startRecord: (options: wx.StartRecordOptions) => Promise<wx.StartRecordResponse>;
    stopRecord: (options: wx.StopRecordOptions) => Promise<wx.StopRecordResponse>;
};
export declare const loadFontFace: (options: wx.LoadFontFaceOptions) => Promise<wx.BaseResponse>;
export declare const chooseImage: (options: wx.ChooseImageOptions) => Promise<wx.ChooseImageResponse>;
export declare const previewImage: (options: wx.PreviewImageOptions) => Promise<wx.BaseResponse>;
export declare const getImageInfo: (options: wx.GetImageInfoOptions) => Promise<wx.GetImageInfoResponse>;
export declare const saveImageToPhotosAlbum: (options: wx.SaveImageToPhotosAlbumOptions) => Promise<wx.BaseResponse>;
export declare const chooseVideo: (options: wx.ChooseVideoOptions) => Promise<wx.VideoData>;
export declare const saveVideoToPhotosAlbum: (options: wx.SaveVideoOptions) => Promise<wx.BaseResponse>;
