/**
 * @author yaodebao
 * Date: 17/11/9
 */
export default {
    name: 'ytCol',
  
    props: {
      span: {
        type: Number,
        default: 24
      },
      tag: {
        type: String,
        default: 'div'
      },
      offset: Number,
      pull: Number,
      push: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },
  
    computed: {
      gutter() {
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'ytRow') {
          parent = parent.$parent;
        }
        return parent ? parent.gutter : 0;
      }
    },
    render(h) {
      let classList = [];
      let style = {};
  
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      }
  
      ['span', 'offset', 'pull', 'push'].forEach(prop => {
        if (this[prop]) {
          classList.push(
            prop !== 'span'
              ? `yt-col-${prop}-${this[prop]}`
              : `yt-col-${this[prop]}`
          );
        }
      });
  
      ['xs', 'sm', 'md', 'lg'].forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`yt-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== 'span'
                ? `yt-col-${size}-${prop}-${props[prop]}`
                : `yt-col-${size}-${props[prop]}`
            );
          });
        }
      });
  
      return h(this.tag, {
        class: ['yt-col', classList],
        style
      }, this.$slots.default);
    }
  };
  