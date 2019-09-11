import ytCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
ytCarouselItem.install = function(Vue) {
  Vue.component(ytCarouselItem.name, ytCarouselItem);
};

export default ytCarouselItem;
