import ytInputNumber from './src/input-number';

/* istanbul ignore next */
ytInputNumber.install = function(Vue) {
  Vue.component(ytInputNumber.name, ytInputNumber);
};

export default ytInputNumber;
