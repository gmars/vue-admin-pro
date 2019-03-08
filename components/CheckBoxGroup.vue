<template>
  <div class="component-checkboxgroup-wrap">
    <slot name="label">
      <div class="component-checkboxgroup-label">
        <label class="el-form-item__label">{{ label }}</label>
      </div>
    </slot>
    <div class="component-checkboxgroup-content">
      <el-row class="el-form-item">
        <div class="el-form-item__content">
          <div
            :class="{'component-checkboxgroup-tagselect-expand': expand}"
            class="component-checkboxgroup-tagselect component-checkboxgroup-tagselect-hasexpand"
          >
            <el-tag
              :class="allChecked? 'component-checkboxgroup-tag-checked' : 'component-checkboxgroup-tag-unchecked'"
              size="mini"
              class="component-checkboxgroup-tag"
              @click.native="checkAllHandle">全部</el-tag>
            <el-tag
              v-for="(item, index) in list"
              :key="index"
              :class="item.checked? 'component-checkboxgroup-tag-checked' : 'component-checkboxgroup-tag-unchecked'"
              size="mini"
              class="component-checkboxgroup-tag"
              @click.native="checkHandle(index, item)">{{ item.label }}</el-tag>
            <el-button 
              type="text"
              class="component-checkboxgroup-trigger"
              @click.native="expandHandle">{{ expand? '收起' : '展开' }}<i
                :class="expand? 'anticon-up' : 'anticon-down'" 
                class="anticon"/></el-button>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter'
export default {
  name: 'CheckBoxGroup',
  props: {
    list: {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data: function() {
    return {
      expand: false,
      allChecked: false
    }
  },
  created: function() {
    let checkTmp = true
    this.list.forEach((val, index) => {
      checkTmp = checkTmp && val.checked
      if (val.checked) {
        this.value.push(val.label)
      }
    })
    this.allChecked = checkTmp ? true : false
  },
  methods: {
    expandHandle() {
      this.expand = !this.expand
    },
    checkHandle(index, item) {
      this.list[index].checked = !this.list[index].checked
      let checkTmp = true
      this.list.forEach((val, index) => {
        checkTmp = checkTmp && val.checked
      })
      this.allChecked = checkTmp ? true : false
      this.list[index].checked
        ? this.value.push(this.list[index].label)
        : this.value.splice(this.value.indexOf(this.list[index].label), 1)
    },
    checkAllHandle() {
      this.allChecked = !this.allChecked
      this.value.splice(0)
      this.list.forEach((val, index) => {
        val.checked = this.allChecked
        if (val.checked) {
          this.value.push(val.label)
        }
      })
    }
  }
}
</script>

<style scoped>
.component-checkboxgroup-wrap {
  display: flex;
}
.component-checkboxgroup-label {
  padding: 0px 12px 0px 0px;
}
.component-checkboxgroup-content {
  flex: 1 1;
}
.component-checkboxgroup-tagselect {
  user-select: none;
  margin-left: -8px;
  position: relative;
  overflow: hidden;
  max-height: 40px;
  line-height: 40px;
  transition: all 0.3s;
}
.component-checkboxgroup-tagselect-hasexpand {
  padding-right: 50px;
}
.component-checkboxgroup-tagselect-expand {
  max-height: 200px;
  transition: all 0.3s;
}
.component-checkboxgroup-tag {
  margin-right: 24px;
  background-color: rgb(255, 255, 255);
  border: none;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding: 0px 8px;
  cursor: pointer;
}
.component-checkboxgroup-tag-unchecked {
  background-color: transparent;
  border-color: transparent;
}
.component-checkboxgroup-tag-checked {
  background-color: #409eff;
  color: #ffffff;
}
.component-checkboxgroup-trigger {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
