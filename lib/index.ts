
//自定义组件导入
import setup from './element-plus/index'
import { addWidget, add_en_us_setting, add_zh_cn_setting } from 'coder-vform-render';
const modules = import.meta.glob('./Element-plus/*.vue', { eager: true, import: 'default' })

const installer = {
  install: (app: any) => {
    setup();
    for (const path in modules) {
      let comp = modules[path] as any;
      addWidget(comp);
    }
    add_en_us_setting('checkStrictly', 'Any Level Selectable')
    add_en_us_setting('showAllLevels', 'Show All Levels')
    add_zh_cn_setting('checkStrictly', '任意级节点可选')
    add_zh_cn_setting('showAllLevels', '显示完整路径')
  }
}
export default installer