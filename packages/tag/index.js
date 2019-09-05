import ytTag from './src/tag';

/* istanbul ignore next */
ytTag.install = function(Vue) {
  Vue.component(ytTag.name, ytTag);
};

export default ytTag;
