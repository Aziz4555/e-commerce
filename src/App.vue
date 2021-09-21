<template>
    <Navbar/>
    <Products/>


</template>

<script>


import Products from "./components/Products";
import Navbar from "./components/Navbar";
export default {
  name: 'App',
  components: {Navbar, Products}
}
</script>

<style>

</style>
