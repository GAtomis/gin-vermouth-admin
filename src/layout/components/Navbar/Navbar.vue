<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-16 17:04:43
 * @LastEditTime: 2024-05-27 15:11:29
 * @LastEditors: GAtomis 850680822@qq.com
-->

<template>
  <div class="header-warp">
    <div name="warp" class="header-primary">
      <div class="left-region">
        <slot name="collapsed" />
        <a-breadcrumb>
          <transition-group name="breadcrumb">
            <a-breadcrumb-item v-for="item in breadcrumb" :key="item.path">
              <router-link :to="item.path">
                {{ item.title }}
              </router-link>
            </a-breadcrumb-item>
          </transition-group>
        </a-breadcrumb>
      </div>

      <div class="right-region">
        <a-tooltip placement="bottom">
          <template #title>
            <span>{{ 'GitHub' }}</span>
          </template>

          <a
            href="https://github.com/GAtomis/vue-artemis-admin"
            style="color: #333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>
        </a-tooltip>

        <a-tooltip placement="bottom">
          <template #title>
            <span>
              {{ isFullscreen ? 'exit full screen mode' : 'full screen mode' }}
            </span>
          </template>

          <component
            :is="isFullscreen ? FullscreenExitOutlined : FullscreenOutlined"
            @click="toggleFullScreen"
          />
        </a-tooltip>

        <span class="info-inner">
          <label>User:</label>
          <span>{{userInfo?.nickName }}</span>
        </span>
        <a-dropdown>
          <a-badge dot>
            <a-avatar :src="userInfo?.headerImg" />
          </a-badge>
          <template #overlay>
            <a-menu>
              <template v-for="(item, index) in menuList" :key="index">
                <a-menu-item @click="item.handleEvent">
                  <component :is="item.icon" />
                  {{ item.title }}
                </a-menu-item>
              </template>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import {
    GithubOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
  } from '@ant-design/icons-vue'

  //第三方工具类hook
  import { useFullscreen } from '@vueuse/core'
  //hook
  import { getCurrentRoute } from '@/hooks/global/breadcrumb'
  import { getMenuList } from './hooks/avatarMenuHook'

  import { computed, reactive, toRefs } from 'vue'
  import { useUser } from '@/store/pinia/index'
  //全屏hook
  const { isFullscreen, enter, exit } = useFullscreen()
  const toggleFullScreen = () => {
    isFullscreen.value ? exit() : enter()
  }

  const $route = useRoute()
  //个人信息 UserInfo
  const userInfo=computed(()=>{
    return useUser().getInfo
  })
  //toRefs解构reactive

  //menuList 菜单

  const menuList = getMenuList()

  // 面包屑导航
  const { data: breadcrumb } = getCurrentRoute($route)
</script>

<style lang="scss" scope>
  .header-warp {
    line-height: 50px;
    position: sticky;
    top: 0;
    z-index: 10;
    // height: $header-height;
    padding: 0;
    // background-color: #fff;

    .header-primary {
      // border-bottom: 1px solid rgb(71, 70, 70);;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-region {
        display: flex;
        align-items: center;
      }
      .right-region {
        display: flex;
        align-items: center;
        font-size: 18px;
        > * {
          margin-right: 15px;
          cursor: pointer;
        }
        .info-inner {
          font-size: 12px;
          span {
            margin-left: 5px;
          }
          margin-right: 12px;
        }
      }

      .breadcrumb-enter-active,
      .breadcrumb-leave-active {
        transition: all 0.5s;
      }

      .breadcrumb-enter-from,
      .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
      }

      .breadcrumb-move {
        transition: all 0.5s;
      }

      .breadcrumb-leave-active {
        position: absolute;
      }
    }
  }
</style>
