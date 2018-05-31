# mpex

基于 TypeScript 的一个微信小程序开发支持库。

## 安装

使用 npm `npm install -S mpex`
使用 yarn `yarn install -S mpex`

## 使用说明

首先导入 `mpex` 库。

```js
import * as mpex from "mpex";
```

下面是一些封装的常见功能。

1.  使用封装的导航 API， 以 `navigateTo` 为例。 可免去手动拼接 query 的麻烦。

```js
mpex.navigateTo("/pages/news/main", { newsId: 1988, cate: 2 });
```

2.  Promise 化 小程序 API 调用。 以 `showModal` 为例。官方示例如下：

```js
wx.showModal({
  title: "提示",
  content: "这是一个模态弹窗",
  success: function(res) {
    if (res.confirm) {
      console.log("用户点击确定");
    } else if (res.cancel) {
      console.log("用户点击取消");
    }
  }
});
```

使用 `mpex` 封装的方法，因为我们封装的函数返回的是一个 Promise 所以，上面的代码可改写如下：

```js
const res = await mpex.showModal("”这是一个模态窗口");
if (res.confirm) {
    console.log('用户点击确定')
} else if (res.cancel) {
    console.log('用户点击取消')
}
```

虽然 `mpex` 暂时只封装了我目前使用到的一些 API。但是也可以使用 `mpex` 提供的 `promisify` 方法轻松的封装其他的 API。比如 `wx.login` 接口。
`mpex` 中便是向下面这样封装的。

```ts
export const login = promisify<wx.LoginOptions, wx.LoginResponse>(wx.login);
```

## 其他

有问题和建议欢迎通过 `issue` 反馈。
