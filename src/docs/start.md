# 快速开始 

----

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import YTUI from 'yitong-ui' // 引入组件库
import 'yitong-ui/packages/theme-set/lib/index.css' // 引入样式库

Vue.use(YTUI)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { Button } from 'yitong-ui'

export default {
  components: {
    Button
  }
}
```

在模板中，用 `<yt-button></yt-button>` 自定义标签的方式使用组件

```html
<template>
  <yt-button>这是一个按钮</yt-button>
</template>
```

### 自定义主题

`UI` 基于scss,可修改 `yitong-ui/packages/theme-set/src/common/var.scss` 文件自定义主题
