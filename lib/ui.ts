import { promisify, encodeQuery } from "./utils";

export const setTabBarItem = promisify<wx.TabBarItem, wx.BaseResponse>(
  wx.setTabBarItem
);

export const modalOptions = {
  title: "提示", //提示的标题,
  content: "提示内容", //提示的内容,
  showCancel: true, //是否显示取消按钮,
  cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
  cancelColor: "#000000", //取消按钮的文字颜色,
  confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
  confirmColor: "#3CC51F" //确定按钮的文字颜色,
};

export const showModal = promisify<wx.ModalOptions, wx.ModalResponse>(
  wx.showModal
);

export function showConfirm(content: string, title: string = "提示") {
  const options: wx.ModalOptions = Object.assign({}, modalOptions);
  options.title = title;
  options.content = content;
  options.showCancel = false;
  return showModal(options);
}

export const confirm = showConfirm;

export function showPrompt(content: string, title: string = "提示") {
  const options: wx.ModalOptions = Object.assign({}, modalOptions);
  options.title = title;
  options.content = content;
  options.showCancel = true;
  return showModal(options);
}

export const prompt = showPrompt;

export function showLoading(title: string = "加载中…") {
  wx.showLoading({
    title: title, //提示的内容,
    mask: true //显示透明蒙层，防止触摸穿透,
  });
}

export const hideLoading = wx.hideLoading;

const _showToast = promisify(wx.showToast);

/**
 *
 *
 * @param title 提示的内容
 * @param icon 图标，只支持"success"、"loading"
 * @param image 自定义图标的本地路径，image 的优先级高于 icon
 * @param duration 提示的延迟时间，单位毫秒，默认：1500
 * @param mask 是否显示透明蒙层，防止触摸穿透，默认：true
 */
export function showToast(
  title: string,
  icon: "success" | "loading" = "success",
  image?: string,
  duration: number = 1500,
  mask: boolean = true
) {
  return _showToast({ title, icon, image, duration, mask });
}

export function showSuccess(title: string) {
  showToast(title);
}

export function showToastLoading(title: string) {
  showToast(title);
}

export function makeNavigationUrl(url: string, params?: object) {
  if (url[0] != "/") {
    url = "/" + url;
  }
  if (params) {
    return url + "?" + encodeQuery(params);
  } else {
    return url;
  }
}

declare var console: any;

type OldNavigationFunction = typeof wx.navigateTo;
type Params = { [key: string]: any };
function enhanceNavigation(fun: OldNavigationFunction) {
  const pfun = promisify(fun);
  return function navigate(url: string, params?: Params) {
    pfun({ url: makeNavigationUrl(url, params) })
      .then(function(res) {
        console.info("NAV DONE " + url);
      })
      .catch(function(reason) {
        console.info("NAV FAIL " + url + ", reason:", reason);
      });
  };
}

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
export const navigateTo = enhanceNavigation(wx.navigateTo);

/**
 * 关闭当前页面，跳转到应用内的某个页面。
 * Tip:
 * `wx.navigateTo` 和 `wx.redirectTo` 不允许跳转到 tabbar 页面，只能用 `wx.switchTab` 跳转到 tabbar 页面
 */
export const redirectTo = enhanceNavigation(wx.redirectTo);

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
 */
export const switchTab = enhanceNavigation(wx.switchTab);

/**
 * 关闭所有页面，打开到应用内的某个页面。
 */
export const reLaunch = enhanceNavigation(wx.reLaunch);

/**
 *
 * 关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。
 *
 * @param delta  返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 * @default 1
 */
export function navigateBack(delta: number = 1) {
  const newFun = promisify(wx.navigateBack);
  const options: wx.NavigateBackOptions = {
    delta
  };
  return newFun(options);
}

/**
 * 动态设置当前页面的标题。
 * @param title 页面标题
 */
export function setNavigationBarTitle(title: string) {
  wx.setNavigationBarTitle({ title });
}

export const showActionSheet = promisify<
  wx.ActionSheetOptions,
  wx.ActionSheetResponse
>(wx.showActionSheet);

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
export async function chooseActionMenu<T extends ActionMenu>(
  actionMenus: T[],
  itemColor: string = "#000000"
): Promise<T> {
  const menus = actionMenus.map(it => it.title);
  try {
    const resp = await showActionSheet({ itemList: menus, itemColor });
    return actionMenus[resp.tapIndex];
  } catch (error) {
    return Promise.reject(error);
  }
}
