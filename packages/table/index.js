import ytTable from './src/table';
/* istanbul ignore next */
ytTable.install = function(Vue) {
  Vue.component(ytTable.name, ytTable);
};

export default ytTable;
