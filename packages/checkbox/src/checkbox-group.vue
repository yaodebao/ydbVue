<script>
  import Emitter from '../../../YTJS/mixins/emitter';

  export default {
    name: 'ytCheckboxGroup',

    componentName: 'ytCheckboxGroup',

    mixins: [Emitter],

    inject: {
      ytFormItem: {
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
        return (this.ytFormItem || {}).ytFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('ytFormItem', 'yt.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="yt-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
