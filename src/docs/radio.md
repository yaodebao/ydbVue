## Radio 单选框

在一组备选项中进行单选

### 基础用法

- 由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

- 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。
<div class="demo-block">
  <yt-radio v-model="radio" label="1">备选项</yt-radio>
  <yt-radio v-model="radio" label="2">备选项</yt-radio>
</div>

<script>
  export default {
    data () {
      return {
        radio: '1',
        radio2: 3,
        radio3: '选中且禁用',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        radio7: '上海',
        radio8: '8',
        radio9: '9',
        radio10: '10',
        radio11: '11'
      };
    }
  }
</script>

:::demo 

```html
 <template>
  <yt-radio v-model="radio" label="1">备选项</yt-radio>
  <yt-radio v-model="radio" label="2">备选项</yt-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 1
      };
    }
  }
</script>
```
:::
### 禁用状态

单选框不可用的状态。

- 只要在`yt-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
<div class="demo-block">
    <yt-radio disabled v-model="radio3" label="禁用">备选项</yt-radio>
    <yt-radio disabled v-model="radio3" label="选中且禁用">备选项</yt-radio>
</div>

:::demo 
```html
<template>
  <yt-radio disabled v-model="radio" label="禁用">备选项</yt-radio>
  <yt-radio disabled v-model="radio" label="选中且禁用">备选项</yt-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>
```
:::
### 单选框组

适用于在多个互斥的选项中选择的场景

- 结合`yt-radio-group`元素和子元素`yt-radio`可以实现单选组，在`yt-radio-group`中绑定`v-model`，在`yt-radio`中设置好`label`即可，无需再给每一个`yt-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`
<div class="demo-block">
    <yt-radio-group v-model="radio2">
        <yt-radio :label="3">备选项</yt-radio>
        <yt-radio :label="6">备选项</yt-radio>
        <yt-radio :label="9">备选项</yt-radio>
    </yt-radio-group>
</div>


:::demo 
```html
<template>
  <yt-radio-group v-model="radio2">
    <yt-radio :label="3">备选项</yt-radio>
    <yt-radio :label="6">备选项</yt-radio>
    <yt-radio :label="9">备选项</yt-radio>
  </yt-radio-group>
</template>

<script>

  export default {
    data () {
      return {
        radio2: "3"
      };
    }
  }
</script>
```
:::

### 按钮样式

按钮样式的单选组合。

- 只需要把`yt-radio`元素换成`yt-radio-button`元素即可，此外，YT-ui 还提供了`size`属性。
<div class="demo-block">
    <div>
    <yt-radio-group v-model="radio4">
      <yt-radio-button label="上海"></yt-radio-button>
      <yt-radio-button label="北京"></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio5" size="medium">
      <yt-radio-button label="上海" ></yt-radio-button>
      <yt-radio-button label="北京"></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio6" size="small">
      <yt-radio-button label="上海"></yt-radio-button>
      <yt-radio-button label="北京" disabled ></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio7" disabled size="mini">
      <yt-radio-button label="上海"></yt-radio-button>
      <yt-radio-button label="北京"></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
</div>


:::demo 
```html
<template>
  <div>
    <yt-radio-group v-model="radio4">
      <yt-radio-button label="上海"></yt-radio-button>
      <yt-radio-button label="北京"></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio5" size="medium">
      <yt-radio-button label="上海" ></yt-radio-button>
      <yt-radio-button label="北京"></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio6" size="small">
      <yt-radio-button label="上海"></yt-radio-button>
      <yt-radio-button label="北京" disabled ></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio7" disabled size="mini">
      <yt-radio-button label="上海"></yt-radio-button>
      <yt-radio-button label="北京"></yt-radio-button>
      <yt-radio-button label="广州"></yt-radio-button>
      <yt-radio-button label="深圳"></yt-radio-button>
    </yt-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        radio7: '上海'
      };
    }
  }
</script>
```
:::

### 带有边框

- 设置`border`属性可以渲染为带有边框的单选框。
<div class="demo-block">
    <div>
    <yt-radio v-model="radio8" label="8" border>备选项1</yt-radio>
    <yt-radio v-model="radio8" label="9" border>备选项2</yt-radio>
  </div>
  <div style="margin-top: 20px">
    <yt-radio v-model="radio9" label="8" border size="medium">备选项1</yt-radio>
    <yt-radio v-model="radio9" label="9" border size="medium">备选项2</yt-radio>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio10" size="small">
      <yt-radio label="10" border>备选项1</yt-radio>
      <yt-radio label="11" border disabled>备选项2</yt-radio>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio11" size="mini" disabled>
      <yt-radio label="10" border>备选项1</yt-radio>
      <yt-radio label="11" border>备选项2</yt-radio>
    </yt-radio-group>
  </div>
</div>


:::demo 
```html
<template>
  <div>
    <yt-radio v-model="radio8" label="8" border>备选项1</yt-radio>
    <yt-radio v-model="radio8" label="9" border>备选项2</yt-radio>
  </div>
  <div style="margin-top: 20px">
    <yt-radio v-model="radio9" label="8" border size="medium">备选项1</yt-radio>
    <yt-radio v-model="radio9" label="9" border size="medium">备选项2</yt-radio>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio10" size="small">
      <yt-radio label="10" border>备选项1</yt-radio>
      <yt-radio label="11" border disabled>备选项2</yt-radio>
    </yt-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yt-radio-group v-model="radio11" size="mini" disabled>
      <yt-radio label="10" border>备选项1</yt-radio>
      <yt-radio label="11" border>备选项2</yt-radio>
    </yt-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio8: '8',
        radio9: '9',
        radio10: '10',
        radio11: '11'
      };
    }
  }
</script>
```
:::

### Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
