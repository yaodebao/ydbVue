# yitong-ui 

 `yitong-ui` 是一款基于 `Vue` ，参考了```element-ui``` 、`ant-design`。
- `在线演示：` [yitong-ui](https:///)

### 由来

- 项目需要。
- 更好的做好各行网银项目 


### 安装

```bash
npm i yitong-ui --save
```

### 使用

#### 全局使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import YTUI from 'yitong-ui' // 引入组件库
import 'yitong-ui/packages/theme-set/lib/index.css' // 引入样式库

Vue.use(YTUI)
```

在模板中，用 `<h-button></h-button>` 自定义标签的方式使用组件

```html
<template>
  <h-button>这是一个按钮</h-button>
</template>
```

#### 自定义主题

`UI` 基于stylus,可修改 `yitong-ui/packages/theme-set/common/var.css` 文件自定义主题


### 问题

在使用 `yitong-ui` 时遇到问题，或者有好的建议，欢迎提出来！skr，skr，O(∩_∩)O~
