<script setup>
import items from '@/data/items.json';
import stores from '@/data/stores.json';
import MenuCard from './MenuCard.vue';
import { computed } from 'vue';

const props = defineProps({
  isDetail: Boolean,
  itemId: String,
});

const filteredItems = computed(()=>{
  if(props.isDetail){
    return items.filter((item)=>item.id === Number(props.itemId))
  }else{
    return items;
  }
})

const getStoreInfo = (storeId) => {
  return stores.find((store) => store.id === storeId);
}

// const getItemInfo =(itemId)=>{
//   return items.find((item)=>item.id===itemId);
// }
</script>

<template>
  <ul class="menu-list">
    <MenuCard v-for="(item, index) in filteredItems" 
    :key="index"
    :menuId="item.id"
    :menuName="item.menuName"
    :portion="item.portion"
    :price="item.price"
    :menuDesc="item.menuDesc"
    :image="item.image"
    :storeName="getStoreInfo(item.storeId).storeName" :storeDesc="getStoreInfo(item.storeId).storeDesc"
    :booth="getStoreInfo(item.storeId).booth"
    :isDetail="props.isDetail">
    </MenuCard>
  </ul>
</template>

<style scoped>
.menu-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--s-sm);
}
</style>