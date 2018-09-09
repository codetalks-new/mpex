export declare const setTabBarItem: (options: wx.TabBarItem) => Promise<wx.BaseResponse>;
export declare const modalOptions: {
    title: string;
    content: string;
    showCancel: boolean;
    cancelText: string;
    cancelColor: string;
    confirmText: string;
    confirmColor: string;
};
export declare const showModal: (options: wx.ModalOptions) => Promise<wx.ModalResponse>;
export declare function showConfirm(content: string, title?: string): Promise<wx.ModalResponse>;
export declare const confirm: typeof showConfirm;
export declare function showPrompt(content: string, title?: string): Promise<wx.ModalResponse>;
export declare const prompt: typeof showPrompt;
export declare function showLoading(title?: string): void;
export declare const hideLoading: typeof wx.hideLoading;
/**
 *
 *
 * @param title 提示的内容
 * @param icon 图标，只支持"success"、"loading"
 * @param image 自定义图标的本地路径，image 的优先级高于 icon
 * @param duration 提示的延迟时间，单位毫秒，默认：1500
 * @param mask 是否显示透明蒙层，防止触摸穿透，默认：true
 */
export declare function showToast(title: string, icon?: "success" | "loading", image?: string, duration?: number, mask?: boolean): Promise<{}>;
export declare function showSuccess(title: string): void;
export declare function showToastLoading(title: string): void;
export declare function makeNavigationUrl(url: string, params?: object): string;
declare type Params = {
    [key: string]: any;
};
/**
 * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
 *
 * 注意：为了不让用户在使用小程序时造成困扰，
 *
 * **目前页面路径最多只能10层**，请尽量避免多层级的交互方式。
 *
 * Tip:
 * `wx.navigateTo` 和 `wx.redirectTo` 不允许跳转到 tabbar 页面，只能用 `wx.switchTab` 跳转到 tabbar 页面
 */
export declare const navigateTo: (url: string, params?: Params | undefined) => void;
/**
 * 关闭当前页面，跳转到应用内的某个页面。
 * Tip:
 * `wx.navigateTo` 和 `wx.redirectTo` 不允许跳转到 tabbar 页面，只能用 `wx.switchTab` 跳转到 tabbar 页面
 */
export declare const redirectTo: (url: string, params?: Params | undefined) => void;
/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
 */
export declare const switchTab: (url: string, params?: Params | undefined) => void;
/**
 * 关闭所有页面，打开到应用内的某个页面。
 */
export declare const reLaunch: (url: string, params?: Params | undefined) => void;
/**
 *
 * 关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。
 *
 * @param delta  返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 * @default 1
 */
export declare function navigateBack(delta?: number): Promise<{}>;
/**
 * 动态设置当前页面的标题。
 * @param title 页面标题
 */
export declare function setNavigationBarTitle(title: string): void;
export declare const showActionSheet: (options: wx.ActionSheetOptions) => Promise<wx.ActionSheetResponse>;
/**
 * ActionSheet 操作菜单项接口
 */
export interface ActionMenu {
    title: string;
}
/**
 *
 * @param actionMenus 操作菜单数组
 * @param itemColor 按钮的文字颜色，默认为"#000000"
 */
export declare function chooseActionMenu<T extends ActionMenu>(actionMenus: T[], itemColor?: string): Promise<T>;
export {};
