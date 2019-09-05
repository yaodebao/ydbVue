import ytAutocomplete from './src/autocomplete';

/* istanbul ignore next */
ytAutocomplete.install = function(Vue) {
  Vue.component(ytAutocomplete.name, ytAutocomplete);
};

export default ytAutocomplete;
