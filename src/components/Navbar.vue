<template>
  <div class="flex justify-around py-2">

    <h1 class="font-bold text-2xl text-blue-500 self-center">SHOPTA-SHOES</h1>

    <div>
      <input class="italic outline-none py-2.5 px-5 w-96 bg-whitesmoke" type="text" placeholder="adidas, nike, puma...">
      <button class="bg-black py-2.5 px-2 text-white">rechercher</button>
    </div>

    <div class="self-center" @click="cart_list">
      <img class="inline-block w-8 h-8" src="../assets/sac_de_course.png" role="img" alt="Panier">
      <p class="inline-block">{{numberArticle}}</p>
    </div>

  </div>

  <div class="block py-2 bg-black text-white">
    <ul class="flex justify-center w-1/3 mx-auto">
      <li class="p-3.5 font-bold">chaussure</li>
      <li class="p-3.5 font-bold">manteau</li>
      <li class="p-3.5 font-bold">jean</li>
      <li class="p-3.5 font-bold">polo</li>
    </ul>
  </div>

  <Cart/>

</template>

<script>
import {mapState} from "vuex";
import Cart from "./Cart";

export default {
  name: "Navbar",
  components: {Cart},
  computed:{
    ...mapState(["numberArticle"])
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

</style>