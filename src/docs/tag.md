## Tag 标签

用于标记和选择。

### 基础用法
- 由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。
<style>
  .yt-tag + .yt-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .tag-group{
      margin-bottom:10px;
  }
</style>
<div class="demo-block">
    <yt-tag>标签一</yt-tag>
    <yt-tag type="success">标签二</yt-tag>
    <yt-tag type="info">标签三</yt-tag>
    <yt-tag type="warning">标签四</yt-tag>
    <yt-tag type="danger">标签五</yt-tag>
</div>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

:::demo 

```html
<yt-tag>标签一</yt-tag>
<yt-tag type="success">标签二</yt-tag>
<yt-tag type="info">标签三</yt-tag>
<yt-tag type="warning">标签四</yt-tag>
<yt-tag type="danger">标签五</yt-tag>
```
:::

### 可移除标签

- 设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。
<div class="demo-block">
  <yt-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</yt-tag>
</div>

:::demo

```html
<yt-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</yt-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      };
    }
  }
</script>
```
:::

### 动态编辑标签

- 动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现
<div class="demo-block">
   <yt-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</yt-tag>
<yt-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</yt-input>
<yt-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</yt-button>
</div>


:::demo
```html
<yt-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</yt-tag>
<yt-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</yt-input>
<yt-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</yt-button>

<style>
  .yt-tag + .yt-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script> 
```
:::

### 不同尺寸

- Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
- 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
<div class="demo-block">
    <yt-tag closable>默认标签</yt-tag>
    <yt-tag size="medium" closable>中等标签</yt-tag>
    <yt-tag size="small" closable>小型标签</yt-tag>
    <yt-tag size="mini" closable>超小标签</yt-tag>
</div>

:::demo 

```html
<yt-tag closable>默认标签</yt-tag>
<yt-tag size="medium" closable>中等标签</yt-tag>
<yt-tag size="small" closable>小型标签</yt-tag>
<yt-tag size="mini" closable>超小标签</yt-tag>
```
:::

### 不同主题

- Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`
- 通过设置`effect`属性来改变主题，默认为 `light`
<div class="demo-block">
  <div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <yt-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </yt-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <yt-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </yt-tag>
</div>
</div>

:::demo 
```html
<div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <yt-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </yt-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <yt-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </yt-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string | success/info/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| disable-transitions | 是否禁用渐变动画 | boolean | — | false |
| hit | 是否有边框描边 | boolean | — | false |
| color | 背景色 | string | — | — |
| size | 尺寸 | string | medium / small / mini | — |
| effect | 主题 | string | dark / light / plain | light |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击 Tag 时触发的事件 | — |
| close | 关闭 Tag 时触发的事件 | — |
