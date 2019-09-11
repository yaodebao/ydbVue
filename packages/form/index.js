import ytForm from './src/form';

/* istanbul ignore next */
ytForm.install = function(Vue) {
  Vue.component(ytForm.name, ytForm);
};

export default ytForm;
