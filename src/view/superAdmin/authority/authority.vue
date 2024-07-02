<template>
  <div class="">
    <header>
      <a-button type="primary">新增</a-button>
    </header>
    <main>
      <a-table :dataSource="dataSource" :columns="columns" />
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
      title: '年龄',
      dataIndex: 'authorityName',
      key: 'authorityName',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
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
