import Button from './button/index.js';
import collapseTransition from './collapse-transition/collapse-transition.js';
import Message from './message/index.js';
import Carousel from './carousel/index.js';
import CarouselItem from './carousel-item/index.js';
import ytRow from './row/index.js';
import ytCol from './col/index.js';
import Radio from './radio/index.js';
import RadioGroup from './radio-group/index.js';
import RadioButton from './radio-button/index.js';
import Checkbox from './checkbox/index.js';
import CheckboxButton from './checkbox-button/index.js';
import CheckboxGroup from './checkbox-group/index.js';
import Input from './input/index.js';
import InputNumber from './input-number/index.js';
import Tag from './tag/index.js';
import Select from './select/index.js';
import Scrollbar from './scrollbar/index.js';
import Option from './option/index.js';
import OptionGroup from './option-group/index.js';
import Autocomplete from './autocomplete/index.js';


const components = [
  Button,
  collapseTransition,
  Carousel,
  CarouselItem,
  ytRow,
  ytCol,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Input,
  InputNumber,
  Tag,
  Select,
  Scrollbar,
  Option,
  OptionGroup,
  Autocomplete
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Message,
  collapseTransition,
  Carousel,
  CarouselItem,
  ytRow,
  ytCol,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Input,
  InputNumber,
  Tag,
  Select,
  Scrollbar,
  Option,
  OptionGroup,
  Autocomplete
}
