<template>
  <div class="">
    <header>
      <a-button type="primary">新增</a-button>
    </header>
    <main>
      <a-table :dataSource="dataSource" :columns="columns">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a class="alink" @click="() => (open = true)">设置权限</a>
            <a class="alink">新增子角色</a>
            <a class="alink">拷贝</a>
            <a class="alink">编辑</a>
            <a class="alink">删除</a>
          </template>
        </template>
      </a-table>

      <a-modal v-model:open="open" title="设置权限">
        <a-tabs v-model:activeKey="activeKey" :tab-position="'left'" animated>
          <a-tab-pane key="1" tab="Tab 1">Content of Tab 1</a-tab-pane>
          <a-tab-pane key="2" tab="Tab 2">Content of Tab 2</a-tab-pane>
          <a-tab-pane key="3" tab="Tab 3">Content of Tab 3</a-tab-pane>
        </a-tabs>
      </a-modal>
    </main>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { getAuthorityList } from '@/api/account/role';
  const dataSource = ref<Role[]>([]);
  const columns = [
    {
      title: '角色ID',
      dataIndex: 'authorityId',
      key: 'authorityId',
    },
    {
      title: '角色名称',
      dataIndex: 'authorityName',
      key: 'authorityName',
    },
    {
      title: '控制',
      key: 'action',
    },
  ];
  const open = ref(false);
  const activeKey = ref(false);

  const pager = ref<Pager>({
    page: 1,
    pageSize: 10,
  });

  const getList = async () => {
    const {
      data: { list },
    } = await getAuthorityList(pager.value);
    dataSource.value = list;
  };
  getList();
</script>
<style scoped lang="scss">
  .alink {
    margin-right: 20px;
  }
</style>
