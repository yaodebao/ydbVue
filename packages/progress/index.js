import ytProgress from './src/progress';

/* istanbul ignore next */
ytProgress.install = function(Vue) {
  Vue.component(ytProgress.name, ytProgress);
};

export default ytProgress;
