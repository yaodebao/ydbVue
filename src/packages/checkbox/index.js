import ytCheckbox from './src/checkbox';

/* istanbul ignore next */
ytCheckbox.install = function(Vue) {
  Vue.component(ytCheckbox.name, ytCheckbox);
};

export default ytCheckbox;
