import ytTableColumn from '../table/src/table-column';

/* istanbul ignore next */
ytTableColumn.install = function(Vue) {
  Vue.component(ytTableColumn.name, ytTableColumn);
};

export default ytTableColumn;
