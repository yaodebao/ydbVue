import ytOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
ytOptionGroup.install = function(Vue) {
  Vue.component(ytOptionGroup.name, ytOptionGroup);
};

export default ytOptionGroup;
