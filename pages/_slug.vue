<template>
  <main>
    <div class="flex">
      <div class="w-1/2 h-screen flex items-center justify-center">
        <img :src="product.images[0]" :alt="product.name" />
      </div>
      <div
        class="w-1/2 h-screen text-white flex items-center justify-center p-8 relative"
        :style="{ backgroundColor: `#${product.color.hex}` }"
      >
        <nuxt-link
          to="/"
          class="flex items-center space-x-2 absolute top-8 left-8"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <p>Home</p>
        </nuxt-link>
        <div class="space-y-4">
          <p class="text-2xl font-bold">{{ product.name }}</p>
          <p>$ {{ product.amount }}</p>
          <p class="text-gray-100 text-sm">{{ product.description }}</p>
          <button
            @click="buy()"
            class="w-full py-3 bg-white text-gray-800 font-semibold"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  transition: "fade",
  async asyncData({ $content, params }) {
    const product = await $content("products", params.slug).fetch();
    return { product };
  },
  data() {
    return {
      stripe: null,
    };
  },
  methods: {
    async buy() {
      try {
        const { data } = await this.$axios.post("/api/checkout", {
          order: {
            name: this.product.name,
            description: this.product.description,
            images: this.product.images,
            amount: this.product.amount * 100,
            currency: this.product.currency,
            quantity: 1,
          },
          slug: this.$route.params.slug,
        });
        this.stripe.redirectToCheckout({ sessionId: data.id });
      } catch (err) {
        alert(err);
      }
    },
  },
  mounted() {
    this.stripe = Stripe("pk_test_ZaFKDdkCzVR4hCmDsUKWodm200fZIzrcmf");
  },
};
</script>