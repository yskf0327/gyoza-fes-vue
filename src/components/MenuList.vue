<script setup>
import items from '@/data/items.json';
import stores from '@/data/stores.json';
import MenuCard from './MenuCard.vue';

const getStoreInfo = (storeId)=>{
  return stores.find((store)=>store.id === storeId);
}
</script>

<template>
  <ul class="menu-list">
    <MenuCard
      v-for="(item,index) in items "
      :key="index"
      :menuName="item.menuName"
      :portion="item.portion"
      :price="item.price"
      :description="item.description"
      :image="item.image"
      :storeName="getStoreInfo(item.storeId).storeName"
      :booth="getStoreInfo(item.storeId).booth"
    ></MenuCard>
  </ul>
</template>

<style scoped>
.menu-list{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
  gap: var(--s-sm);
}
</style>