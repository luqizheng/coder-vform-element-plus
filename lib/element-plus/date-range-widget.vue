<template>
  <form-item-wrapper
    :designer="designer"
    :field="field"
    :rules="rules"
    :design-state="designState"
    :parent-widget="parentWidget"
    :parent-list="parentList"
    :index-of-parent-list="indexOfParentList"
    :sub-form-row-index="subFormRowIndex"
    :sub-form-col-index="subFormColIndex"
    :sub-form-row-id="subFormRowId"
  >
    <div :class="[!!field.options.autoFullWidth ? 'auto-full-width' : '']">
      <ElConfigProvider :locale="local">
      <el-date-picker
        ref="fieldEditor"
        :type="field.options.type"
        v-model="fieldModel"
        :disabled="field.options.disabled"
        :readonly="field.options.readonly"
        :size="widgetSize"
        :clearable="field.options.clearable"
        :editable="field.options.editable"
        :format="field.options.format"
        :value-format="field.options.valueFormat"
        :start-placeholder="
          field.options.startPlaceholder ||
          i18nt('render.hint.startDatePlaceholder')
        "
        :end-placeholder="
          field.options.endPlaceholder ||
          i18nt('render.hint.endDatePlaceholder')
        "
        @focus="handleFocusCustomEvent"
        @blur="handleBlurCustomEvent"
        @change="handleChangeEvent"
      >
      </el-date-picker></ElConfigProvider>
    </div>
  </form-item-wrapper>
</template>

<script>
import { FormItemWrapper, emitter, i18n, fieldMixin } from "coder-vform-render";
import { ElDatePicker,ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
export default {
  name: "date-range-widget",
  componentName: "FieldWidget", //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,

    designState: {
      type: Boolean,
      default: false,
    },

    subFormRowIndex: {
      /* 子表单组件行索引，从0开始计数 */ type: Number,
      default: -1,
    },
    subFormColIndex: {
      /* 子表单组件列索引，从0开始计数 */ type: Number,
      default: -1,
    },
    subFormRowId: {
      /* 子表单组件行Id，唯一id且不可变 */ type: String,
      default: "",
    },
  },
  components: {
    FormItemWrapper,ElDatePicker,ElConfigProvider
  },
  data() {
    return {
      oldFieldValue: null, //field组件change之前的值
      fieldModel: null,
      rules: [],
      local:zhCn
    };
  },
  computed: {},
  beforeCreate() {
    /* 这里不能访问方法和属性！！ */
  },

  created() {
    /* 注意：子组件mounted在父组件created之后、父组件mounted之前触发，故子组件mounted需要用到的prop
         需要在父组件created中初始化！！ */
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();

    this.handleOnCreated();
  },

  mounted() {
    this.handleOnMounted();
  },

  beforeUnmount() {
    this.unregisterFromRefList();
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./element.scss"; /* form-item-wrapper已引入，还需要重复引入吗？ */

.full-width-input {
  width: 100% !important;
}

.auto-full-width {
  width: 100%;

  :deep(.el-range-editor) {
    width: 100% !important;
  }
}
</style>
