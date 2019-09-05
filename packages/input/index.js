import ytInput from './src/input';

/* istanbul ignore next */
ytInput.install = function(Vue) {
  Vue.component(ytInput.name, ytInput);
};

export default ytInput;
