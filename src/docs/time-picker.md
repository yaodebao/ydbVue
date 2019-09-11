## TimePicker 时间选择器

 用于选择或输入日期

### 固定时间点

提供几个固定的时间点供用户选择

 <div class="demo-block demo-date">
   <yt-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</yt-time-select>
 </div>
 <style>
  .demo-date .block,.demo-date .container{
      display:inline-block;
      margin-right:20px;
  }
  .demo-date .demonstration{
      margin:15px 0;
  }
 </style>
<script>
  export default {
    data() {
      return {
        value: '',
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40),
        value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>


:::demo 
```html
<yt-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</yt-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
```
:::

### 任意时间点

可以选择任意时间

 使用 yt-time-picker 标签，通过`selectableRange`限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。
<div class="demo-block">
 <yt-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </yt-time-picker>
  <yt-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </yt-time-picker>
</div>

:::demo 
```html
<template>
  <yt-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </yt-time-picker>
  <yt-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </yt-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
```
:::

### 任意时间范围

可选择任意的时间范围

添加`is-range`属性即可选择时间范围，同样支持`arrow-control`属性。
<div class="demo-block">
 <yt-time-picker
    is-range
    v-model="value3"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </yt-time-picker>
  <yt-time-picker
    is-range
    arrow-control
    v-model="value4"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </yt-time-picker>
</div>


:::demo 
```html
<template>
  <yt-time-picker
    is-range
    v-model="value1"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </yt-time-picker>
  <yt-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </yt-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | date(TimePicker) / string(TimeSelect) | — | — |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size          | 输入框尺寸     | string          | medium / small / mini  | — |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| is-range | 是否为时间范围选择，仅对`<yt-time-picker>`有效 | boolean | — | false |
| arrow-control | 是否使用箭头进行时间选择，仅对`<yt-time-picker>`有效 | boolean | — | false |
| align | 对齐方式 | string | left / center / right | left |
| popper-class | TimePicker 下拉框的类名 | string | — | — |
| picker-options | 当前时间日期选择器特有的选项参考下表 | object | — | {} |
| range-separator | 选择范围时的分隔符 | string | - | '-' |
| value-format | 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象 | string | 见[日期格式] | — |
| default-value | 可选，选择器打开时默认显示的时间 | Date(TimePicker) / string(TimeSelect) | 可被`new Date()`解析(TimePicker) / 可选值(TimeSelect) | — |
| name | 原生属性 | string | — | — |
| prefix-icon | 自定义头部图标的类名 | string | — | yt-icon-time |
| clear-icon | 自定义清空图标的类名 | string | — | yt-icon-circle-close |

### Time Select Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| start | 开始时间 | string | — | 09:00 |
| end | 结束时间 | string | — | 18:00 |
| step | 间隔时间 | string | — | 00:30 |
| minTime | 最小时间，小于该时间的时间段将被禁用 | string | — | 00:00 |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | string | — | — |

### Time Picker Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | 可选时间段，例如`'18:30:00 - 20:30:00'`或者传入数组`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string / array | — | — |
| format | 时间格式化(TimePicker) | string | 小时：`HH`，分：`mm`，秒：`ss`，AM/PM `A` | 'HH:mm:ss' |

### Events
| 事件名 | 说明 | 参数 |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
