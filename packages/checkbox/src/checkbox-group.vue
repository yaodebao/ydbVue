<script>
  import Emitter from 'yitong-ui/packages/mixins/emitter';

  export default {
    name: 'ytCheckboxGroup',

    componentName: 'ytCheckboxGroup',

    mixins: [Emitter],

    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('ytFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="yt-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
