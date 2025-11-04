<template>
  <li class="menu-card">
    <figure class="menu-img">
      <img :src="'/images/' + image" :alt="menuName" />
    </figure>
    <p class="booth">
      <span class="booth-icon"> <font-awesome-icon icon="location-dot" /> </span>{{ booth }}
    </p>
    <p class="menu-name">{{ menuName }}</p>
    <dl class="menu-info">
      <div class="menu-info-item">
        <dt>価格</dt>
        <dd>{{ portion + ' ' + price + '円' }}</dd>
      </div>
    </dl>
    <div v-if="isDetail" class="menu-info-detail">
      <p class="menu-desc">{{ menuDesc }}</p>
      <div class="store-info">
        <p class="store-name">{{ storeName }}</p>
        <p class="store-desc">{{ storeDesc }}</p>
      </div>
    </div>
    <p class="more-link" v-if="!isDetail">
      <router-link :to="`/menu/${menuId}`">詳細を見る</router-link>
    </p>
  </li>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  menuId: Number,
  menuName: String,
  portion: String,
  price: Number,
  menuDesc: String,
  storeName: String,
  storeDesc: String,
  booth: String,
  image: String,
  isDetail: Boolean,
});

onMounted(() => {
  console.log(props.isDetail);
});
</script>

<style scoped>
.menu-card {
  padding: var(--s-sm);
  display: flex;
  flex-direction: column;
  gap: var(--s-md);
}

.booth-icon {
  color: var(--color-red);
}

.booth,
.menu-name {
  font-size: clamp(1rem, 0.956rem + 0.188vw, 1.125rem);
  font-weight: bold;
}

.menu-img {
  img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    aspect-ratio: 3 / 2;
  }
}

.menu-info {
  display: flex;
  flex-direction: column;
  gap: var(--s-2xs);
}

.menu-info-item {
  line-height: 1.6;
  display: flex;
  gap: var(--s-xs);

  dt {
    flex-shrink: 0;

    &::after {
      content: ':';
    }
  }
}
</style>
