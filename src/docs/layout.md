# Layout 布局
----
### 概述
栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。市面上一般使用 12栅格 系统，也有采用 8栅格 系统的，但是随着设备屏幕越来越大，传统的 12栅格 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 24栅格 系统。也就是将页面区域 24 等分。
### 基础布局
<div class="demo-block">
 <yt-row>
   <yt-col :span="24"><div class="grid-content bg-purple-dark"></div></yt-col>
 </yt-row>
 <yt-row class="mt-10">
   <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
   <yt-col :span="8"><div class="grid-content bg-purple-light"></div></yt-col>
   <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
 </yt-row>
 <yt-row class="mt-10">
   <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
   <yt-col :span="4"><div class="grid-content bg-purple-light"></div></yt-col>
   <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
   <yt-col :span="4"><div class="grid-content bg-purple-light"></div></yt-col>
   <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
   <yt-col :span="4"><div class="grid-content bg-purple-light"></div></yt-col>
 </yt-row>
</div>

::: demo
```html

<yt-row>
 <yt-col :span="24"><div class="grid-content bg-purple-dark"></div></yt-col>
</yt-row>
<yt-row class="mt-10">
 <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
 <yt-col :span="8"><div class="grid-content bg-purple-light"></div></yt-col>
 <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row class="mt-10">
 <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
 <yt-col :span="4"><div class="grid-content bg-purple-light"></div></yt-col>
 <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
 <yt-col :span="4"><div class="grid-content bg-purple-light"></div></yt-col>
 <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
 <yt-col :span="4"><div class="grid-content bg-purple-light"></div></yt-col>
</yt-row>

```
:::

### 分栏间隔

分栏之间存在间隔
Row 组件 提供 ```gutter``` 属性来指定每一栏之间的间隔，默认间隔为 0。

<div class="demo-block">
  <yt-row :gutter="20">
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
</div>

::: demo

```html

<yt-row :gutter="20">
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>

```

:::

### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="demo-block">
  <yt-row :gutter="20">
    <yt-col :span="16"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row :gutter="20" class="mt-10">
    <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row :gutter="20" class="mt-10">
    <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="16"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
</div>

::: demo

```html

<yt-row :gutter="20">
  <yt-col :span="16"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row :gutter="20" class="mt-10">
  <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="8"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row :gutter="20" class="mt-10">
  <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="16"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="4"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>

```

:::

### 分栏偏移

支持偏移指定的栏数。通过制定 col 组件的 ```offset``` 属性可以指定分栏偏移的栏数。

<div class="demo-block">
  <yt-row :gutter="20">
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row :gutter="20" class="mt-10">
    <yt-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row :gutter="20" class="mt-10">
    <yt-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
</div>

::: demo

```html

<yt-row :gutter="20">
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row :gutter="20" class="mt-10">
  <yt-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row :gutter="20" class="mt-10">
  <yt-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>

```

:::

### Flex 布局

通过 flex 布局来对分栏进行灵活的对齐。
将 ```type``` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 ```justify``` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
<div class="demo-block">
  <yt-row type="flex" class="royt-bg">
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row type="flex" class="royt-bg mt-10" justify="center">
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row type="flex" class="royt-bg mt-10" justify="end">
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row type="flex" class="royt-bg mt-10" justify="space-between">
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
  <yt-row type="flex" class="royt-bg mt-10" justify="space-around">
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
    <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  </yt-row>
</div>

::: demo

```html

<yt-row type="flex" class="royt-bg">
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row type="flex" class="royt-bg mt-10" justify="center">
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row type="flex" class="royt-bg mt-10" justify="end">
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row type="flex" class="royt-bg mt-10" justify="space-between">
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>
<yt-row type="flex" class="royt-bg mt-10" justify="space-around">
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple-light"></div></yt-col>
  <yt-col :span="6"><div class="grid-content bg-purple"></div></yt-col>
</yt-row>

```

:::

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：```xs```、```sm```、```md```、```lg``` 和 ```xl```。
<div class="demo-block">
  <yt-row :gutter="10">
    <yt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></yt-col>
    <yt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></yt-col>
    <yt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></yt-col>
  </yt-row>
</div>


::: demo
```html

<yt-row :gutter="10">
  <yt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></yt-col>
  <yt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></yt-col>
  <yt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></yt-col>
</yt-row>

```

:::

### Row Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

### Col Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | — |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | string | * | div |
