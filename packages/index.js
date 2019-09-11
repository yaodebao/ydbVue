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
import Cascader from './cascader/index.js';
import CascaderPanel from './cascader-panel/index.js';
import Switch from './switch/index.js';
import Tooltip from './tooltip/index.js';
import Slider from './slider/index.js';
import Transfer from './transfer/index.js';
import DatePicker from './date-picker/index.js';
import TimeSelect from './time-select/index.js';
import TimePicker from './time-picker/index.js';
import Progress from './progress/index.js';
import Upload from './upload/index.js';
import Form from './form/index.js';
import FormItem from './form-item/index.js';
import Table from './table/index.js';
import TableColumn from './table-column/index.js';

const components = [
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
  Autocomplete,
  Cascader,
  CascaderPanel,
  Switch,
  Tooltip,
  Slider,
  Transfer,
  DatePicker,
  TimeSelect,
  TimePicker,
  Progress,
  Upload,
  Form,
  FormItem,
  Table,
  TableColumn
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
  Autocomplete,
  Cascader,
  CascaderPanel,
  Switch,
  Tooltip,
  Slider,
  Transfer,
  DatePicker,
  TimeSelect,
  TimePicker,
  Progress,
  Upload,
  Form,
  FormItem,
  Table,
  TableColumn
}
