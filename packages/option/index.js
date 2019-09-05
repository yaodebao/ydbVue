import ytOption from '../select/src/option';

/* istanbul ignore next */
ytOption.install = function(Vue) {
  Vue.component(ytOption.name, ytOption);
};

export default ytOption;
