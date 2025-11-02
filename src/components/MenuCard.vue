<template>
  <li class="menu-card">
    <figure class="menu-img">
      <img :src="'images/' + image" :alt="menuName" />
    </figure>
    <p class="booth">
      <span class="booth-icon">
        <font-awesome-icon icon="location-dot" /> </span
      >{{ booth }}
    </p>
    <p class="menu-name">{{ menuName }}</p>
    <dl class="menu-info">
      <div class="menu-info-item">
        <dt>価格</dt>
        <dd>{{ portion + ' ' + price + '円' }}</dd>
      </div>
      <div class="menu-info-item">
        <dt>店名</dt>
        <dd>{{ storeName }}</dd>
      </div>
    </dl>
  </li>
</template>

<script setup>
defineProps({
  menuName: String,
  portion: String,
  price: Number,
  description: String,
  storeName: String,
  booth: String,
  image: String,
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
