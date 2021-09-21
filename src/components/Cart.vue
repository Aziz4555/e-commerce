<template>
 <div id="cart" class="fixed bg-gradient-to-l from-white to-gray_cart h-full top-0 -right-1/4 w-1/4 invisible">
   <div class="flex justify-between px-2">
     <h1 class="text-center py-3">Panier</h1>
     <button>
       <span class="text-center font-light py-3 underline" @click="cart_list">Retour</span>
     </button>
   </div>

   <hr/>
   <h1 v-if="cart.length===0" class="font-semibold text-gray-500 text-center text-xl py-2">Vous n'avez pas encore ajouté d'article à votre panier :(</h1>

   <div v-else class="py-2 pl-2" v-for="product in cart" :key="product.id">
     <p class="font-semibold text-xl text-white">{{product.title}}</p>
     <img class="w-12 rounded-full text-white" :src="require('@/assets/'+product.imageUrl)" :alt="product.title" >
     <p class="text-white">Prix : {{product.price}} €</p>
     <p class="text-white">Quantité : {{product.nbProduct}}</p>
   </div>

 </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState(['cart'])
  },

  methods: {
    cart_list() {
      const cart=document.querySelector('#cart');
      if(cart.classList.contains('visible')){
        console.log(true)
        cart.classList.remove('visible');
        cart.classList.remove('right-0');
        cart.classList.add('-right-1/4');
        cart.classList.add('invisible');
        console.log(cart.getAttribute("class"))

      }else{
        console.log(false)
        cart.classList.remove('invisible');
        cart.classList.remove('-right-1/4')
        cart.classList.add('right-0');
        cart.classList.add('visible');
        console.log(cart.getAttribute("class"))
      }

    }
  }

}
</script>

<style scoped>


#cart.visible {
  @apply animate-slideRight
}

#cart.invisible {
  @apply animate-slideLeft
}

</style>