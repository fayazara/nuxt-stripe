<template>
  <main class="min-h-screen">
    <section class="p-8 max-w-4xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <nuxt-link
          :to="product.slug"
          class="overflow-hidden text-center"
          v-for="(product, p) in products"
          :key="p"
        >
          <img :src="product.images[0]" alt="product.name" class="mb-4" />
          <p class="font-semibold text-gray-700 mb-1">
            {{ product.name }}
          </p>
          <p class="text-sm">$ {{ product.amount }}</p>
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  transition: "fade",
  async asyncData({ $content }) {
    const products = await $content("products").fetch();
    return { products };
  },
};
</script>