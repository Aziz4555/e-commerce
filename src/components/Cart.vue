<template>
 <div id="cart" class="fixed bg-gradient-to-l from-white to-gray_cart top-0 bottom-0 lg:-right-1/4 lg:w-1/4 -right-11/12 w-11/12 invisible">
   <div class="flex justify-between px-2">
     <h1 class="text-center py-3">Panier</h1>
     <button>
       <span class="text-center font-light py-3 underline" @click="cart_list">Retour</span>
     </button>
   </div>

   <hr/>
   <h1 v-if="cart.length===0" class="font-semibold text-gray-500 text-center text-xl py-2">Vous n'avez pas encore ajouté d'article à votre panier :(</h1>

   <div v-else class="py-2 pl-2" v-for="product in cart" :key="product.id">
     <p class="font-semibold text-xl">{{product.title}}</p>
     <img class="w-12 rounded-full" :src="require('@/assets/'+product.imageUrl)" :alt="product.title" >
     <p>Prix : {{product.price}} €</p>
     <p>Quantité : <input class="w-10" type="number" min="0" v-model="product.nbProduct"/></p>
   </div>

   <h1 class="font-semibold text-2xl pl-2">Total : {{totalPrice}} €</h1>
 </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice'])
  },

  methods: {

    cart_list() {
      const cart=document.querySelector('#cart');
      if(screen.width<= 1024){
        if(cart.classList.contains('visible')){

          cart.classList.remove('visible');
          cart.classList.remove('right-0');
          cart.classList.add('-right-11/12');
          cart.classList.add('invisible');


        }else{

          cart.classList.remove('invisible');
          cart.classList.remove('--right-11/12')
          cart.classList.add('right-0');
          cart.classList.add('visible');

        }
      }else{
        if(cart.classList.contains('visible')){

          cart.classList.remove('visible');
          cart.classList.remove('lg:right-0');
          cart.classList.add('lg:-right-1/4');
          cart.classList.add('invisible');


        }else{

          cart.classList.remove('invisible');
          cart.classList.remove('lg:-right-1/4')
          cart.classList.add('lg:right-0');
          cart.classList.add('visible');

        }
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

@media screen and (max-width:1024px) {
  #cart.visible {
    @apply animate-slideRightResponsive
  }

  #cart.invisible {
    @apply  animate-slideLeftResponsive
  }


}

</style>