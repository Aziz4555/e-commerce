import { createStore } from 'vuex'

export default createStore({
  state: {
    numberArticle:0,
    cart:[]
  },

  getters:{
    totalPrice(state){

      let totalPrice=0;

      if(state.cart.length===0){
          return totalPrice;
      }else{
            totalPrice=0;
            state.cart.forEach(product => {
              totalPrice= totalPrice+(product.price*product.nbProduct);
          });
         return totalPrice;
        }
    },
  },

  mutations: {
    ADD_TO_CART(state,payload) {


      const duplicateProduct=state.cart.findIndex(item => item.id===payload.id);
      if(duplicateProduct===-1){

        Object.assign(payload,{'nbProduct':1})
        state.cart.push(payload)
        state.numberArticle +=1;

      }else{
        state.cart.forEach(element => {
          if(element.id===payload.id){
            element.nbProduct++;
          }
        })
      }
    },
  },
  actions: {
    addToCart(context, payload) {
      context.commit('ADD_TO_CART',payload);
    },
  },
  modules: {
  }
})
