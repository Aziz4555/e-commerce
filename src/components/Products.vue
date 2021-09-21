<template>


  <div class="grid grid-cols-3 w-3/5 gap-x-12 gap-y-10 mx-auto mt-10">

    <div v-for="product in products" :key="product.id">

      <h1 class="font-bold text-2xl">{{product.title}}</h1>
      <img :src="require('@/assets/'+product.imageUrl)" :alt="product.title" >

      <div class="flex justify-between">
        <p class="font-semibold text-3xl">{{product.price}} €</p>

        <button  @click="addToCart(product)">
          <img src="../assets/icon_ajout_panier.png" role="img" alt="Ajout Panier">
        </button>
      </div>

    </div>

  </div>
</template>

<script>

import {mapActions} from 'vuex';
export default {
  name: "Products",
  data() {

    return{
      products:[
        {
          id:1,
          title:'Addidas',
          imageUrl:"basket_addidas.jpg",
          price:65
        },
        {
          id:2,
          title:'Addidas Blanc & Noir',
          imageUrl:'basket_adidas_blanc_noir.jpg',
          price:40
        },
        {
          id:3,
          title:'New Balance Rouge',
          imageUrl:'new_balance.jpg',
          price:55
        },
        {
          id:4,
          title:'Puma',
          imageUrl:'puma.jpg',
          price:65
        },
        {
          id:5,
          title:'Nike',
          imageUrl:'nike.jpg',
          price:75
        },
        {
          id:6,
          title:'Vans',
          imageUrl:'vans.jpg',
          price:55
        },
        {
          id:7,
          title:'Coq Sportif',
          imageUrl:'coqsportif.jpg',
          price:42
        },
      ]
    }

  },

  methods: {
    ...mapActions(["addToCart"]),

  }
}
</script>

<style scoped>

button:hover {
  @apply animate-zoom
}
</style>