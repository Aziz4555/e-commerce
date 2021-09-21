<template>
  <div class="flex justify-around py-2">
    <button class="self-center lg:hidden" @click="menu_burger">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34px" height="27px" viewBox="0 0 34 27" enable-background="new 0 0 34 27" xml:space="preserve">
        <rect fill="#000000" width="34" height="4"/>
          <rect y="11" fill="#000000" width="34" height="4"/>
          <rect y="23" fill="#000000" width="34" height="4"/>
      </svg>
    </button>

    <h1 class="font-bold text-2xl text-blue-500 self-center">SHOPTA-SHOES</h1>

    <div class="lg:visible hidden">
      <input class="italic outline-none py-2.5 px-5 w-96 bg-whitesmoke" type="text" placeholder="adidas, nike, puma...">
      <button class="bg-black py-2.5 px-2 text-white">rechercher</button>
    </div>

    <div class="self-center" @click="cart_list">
      <img class="inline-block w-8 h-8" src="../assets/sac_de_course.png" role="img" alt="Panier">
      <p class="inline-block">{{numberArticle}}</p>
    </div>

  </div>

  <div class="lg:hidden w-full">
    <input class="inline-block w-3/4 italic outline-none py-2.5 px-5 bg-whitesmoke" type="text" placeholder="adidas, nike, puma...">
    <button class="inline-block w-1/4 bg-black py-2.5 px-2 text-white">rechercher</button>
  </div>

  <div id="list" class="lg:block py-2 bg-black text-white hidden">
    <ul class="flex lg:flex-row flex-col justify-center w-1/3 lg:mx-auto">
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


    },

    menu_burger(){
      const burger= document.querySelector('#list');
      burger.classList.toggle('hidden')
    }
  }
}
</script>

<style scoped>

</style>