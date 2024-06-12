<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-31 17:05:12
 * @LastEditTime: 2024-05-27 15:12:21
 * @LastEditors: GAtomis 850680822@qq.com
-->
<template>
  <div class="dashboard">
    <a-card title="Dashboard">
      <a-row a-row type="flex" justify="space-around">
        <a-col :span="1" class="avatar">
          <a-avatar :size="64" :src="userInfo?.headerImg">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </a-col>
        <a-col :span="5" class="userInfo">
          <ul>
            <li>
              <span>Name</span>
              : {{ userInfo?.nickName }}
            </li>
            <li>
              <span>Position</span>
              :{{ userInfo?.email }}
            </li>
            <li>
              <span>Authority</span>
              :{{ userInfo?.userName }}
            </li>
          </ul>
        </a-col>
        <a-col :span="13" class="greeting">
          <h1>
            {{
              `Hello, ${userInfo?.nickName}. This is your ${userInfo?.phone} days working here. Wish you a good mood every day!`
            }}
          </h1>
        </a-col>
        <a-col :span="4" class="data" />
      </a-row>
    </a-card>
    <main>
      <!-- <component :is="LineCard" /> -->
    </main>
    <footer>

    </footer>
  </div>
</template>
<script lang="ts" setup>
import userStore from '@/store/pinia/user'
const store =userStore()
const userInfo =store.getInfo
</script>

<style lang="scss" scoped>
  .userInfo {
    li {
      list-style: none;
      span {
        color: #aab7aa;
      }
    }
  }
  main {
  }
  .greeting {
    // line-height: 64px;
    font-size: 18px;
  }
  .dashboard {
    & > * {
      margin-bottom: 10px;
    }
  }
</style>
