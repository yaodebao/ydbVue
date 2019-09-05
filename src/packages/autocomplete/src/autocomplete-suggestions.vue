<template>
  <transition name="yt-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="yt-autocomplete-suggestion yt-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <yt-scrollbar
        tag="ul"
        wrap-class="yt-autocomplete-suggestion__wrap"
        view-class="yt-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="yt-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </yt-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from '@/utils/vue-popper';
  import Emitter from '@/mixins/emitter';
  import ElScrollbar from '../../scrollbar';

  export default {
    components: { ElScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'ytAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('ytAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
      this.referenceList = this.$el.querySelector('.yt-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
