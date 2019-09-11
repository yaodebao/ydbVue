import ytFormItem from '../form/src/form-item';

/* istanbul ignore next */
ytFormItem.install = function(Vue) {
  Vue.component(ytFormItem.name, ytFormItem);
};

export default ytFormItem;
