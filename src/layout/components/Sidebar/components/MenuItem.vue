<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-08 16:50:22
 * @LastEditTime: 2024-05-31 13:12:18
 * @LastEditors: GAtomis 850680822@qq.com
-->

<template>
  <a-sub-menu
    v-if="menuItem?.children?.length && !menuItem?.meta?.only"
    :key="menuItem.name"
    v-bind="$attrs"
  >
    <template #icon>
      <icon-font :style="{ fontSize: fontSize }" :type="menuItem.meta.icon" />
    </template>
    <template #title>
      <span>{{ menuItem?.meta?.title }}</span>
    </template>
    <template v-for="item in menuItem.children" :key="item.name">
      <a-menu-item v-if="!item.children" :key="item.name">
        <template #icon>
          <icon-font :style="{ fontSize: fontSize }" :type="item.meta.icon" />
        </template>

        <span>{{ item?.meta?.title }}</span>
      </a-menu-item>

      <!-- {{item.name}} -->
      <menu-item v-else :menu-item="item" :collapsed="collapsed" />
    </template>
  </a-sub-menu>
  <!-- 默认读only第一个子集 -->
  <a-menu-item
    v-else
    :key="menuItem?.name || ''"
  >
    <template #icon>
      <icon-font
        :style="{ fontSize: fontSize }"
        :type="menuItem?.children?.[0]?.meta.icon"
      />
    </template>
    <span>{{ menuItem?.meta?.title }}</span>
  </a-menu-item>
</template>

<!-- <script lang="ts" setup>
import {computed } from 'vue'
const props=defineProps({
  menuItem: {
    type: Object,
    default: () => ({})
  },
  collapsed: Boolean
  

})
//变量css太香了呀
const fontSize = computed(()=>props.collapsed?'25px':'20px')
const fontWidth = computed(()=>props.collapsed?'38px':'0px')
const menuItem = {}

</script> -->

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  import { useTheme } from '@/store/pinia/index'
  export default defineComponent({
    name: 'MenuItem',
    components: {
      // MenuItemChild
    },
    props: {
      menuItem: {
        type: Object,
        default: () => ({}),
      },
      collapsed: Boolean,
    },

    setup(props) {
      //变量css太香了呀
      const fontSize = computed(() => (props.collapsed ? '21px' : '16px'))
      const themeMenu = computed(() => useTheme().themeMenu)

      return {
        fontSize,
        themeMenu,
      }
    },
  })
</script>

<style lang="scss" scoped>
  :deep(.ant-menu-item-icon) {
    margin-left: 3px;
  }

  :deep(.ant-menu-item-selected) {
    background-color: #304156;
  }
</style>
<style lang="scss">
  #menu-warp {
    .ant-menu-item-selected,
    .ant-menu-item:hover,
    .ant-menu-item-active {
      background-color: v-bind(themeMenu) !important;
    }
  }
  .ant-menu-item-selected,
  .ant-menu-item:hover,
  .ant-menu-item-active {
    background-color: v-bind(themeMenu) !important;
  }
</style>
