export default {
  type: 'cascader',
  icon: 'cascader-field',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelAlign: '',
    defaultValue: '',
    placeholder: '',
    size: '',
    labelWidth: null,
    labelHidden: false,
    columnWidth: '200px',
    disabled: false,
    hidden: false,
    clearable: true,
    filterable: false,
    multiple: false,
    checkStrictly: false,  //可选择任意一级选项，默认不开启
    showAllLevels: true,  //显示完整路径
    optionItems: [
      { label: 'select 1', value: 1, children: [{ label: 'child 1', value: 11 }] },
      { label: 'select 2', value: 2 },
      { label: 'select 3', value: 3 },
    ],
    required: false,
    requiredHint: '',
    customRule: '',
    customRuleHint: '',
    //-------------------
    customClass: '',  //自定义css类名
    labelIconClass: null,
    labelIconPosition: 'rear',
    labelTooltip: null,
    //-------------------
    onCreated: '',
    onMounted: '',
    onChange: '',
    onFocus: '',
    onBlur: '',
    onValidate: '',
  },
}