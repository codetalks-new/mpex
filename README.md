# mpex

微信小程序 API 的 Promise 版本,及实用方法集合

## 安装

使用 npm `npm install -S mpex`
使用 yarn `yarn add mpex`

## 使用说明

mpex 对绝大部分的小程序 API 进行了 Promise 化的封装。

首先导入 `mpex` 库。

```js
import * as mpex from "mpex";
// 或者直接使用
import { <WxApi> } from "mpex"
```

以实现一个下载附件，保存附件，及询问用户是否打开附件的功能为例演示使用代码。

```ts
  async downloadAttachment(url: string) {
    mpex.showLoading("正在下载附件…");
    const ret1 = await mpex.downloadFile({ url: attachment.uri });
    const ret2 = await mpex.saveFile({ tempFilePath: ret1.tempFilePath });
    mpex.hideLoading();
    const msg = `附件已经下载完成。 点击确定马上打开。`;
    const res = await mpex.prompt(msg);
    if (res.confirm) {
      wx.openDocument({ filePath: ret2.savedFilePath });
    }
  }
```

除了 `wx` 命名空间下的 API。 本库
还提供了对 `CameraContext` 和 `MapContext` 对象下的接口的 Promise 化封装。

```ts
export function promisifyMapContext(ctx: wx.MapContext);

export function promisifyCameraContext(ctx: wx.CameraContext);
```

下面是其他一些封装的常见功能。

1.  使用封装的导航 API， 以 `navigateTo` 为例。 可免去手动拼接 query 的麻烦。

```js
mpex.navigateTo("/pages/news/main", { newsId: 1988, cate: 2 });
```

2. 提供 showActionSheet 的封装 `chooseActionMenu` 用于选择菜单的使用。TS 下有 TS 泛型加持。

```ts
const menus = [
  LeaveCategory.sick,
  LeaveCategory.absence,
  LeaveCategory.work
].map(category => {
  const title = formatLeaveCategory(category);
  return { title, category };
});
mpex.chooseActionMenu(menus).then(menu => {
  this.state.category = menu.category;
});
```

## 其他

有问题和建议欢迎通过 `issue` 反馈。
