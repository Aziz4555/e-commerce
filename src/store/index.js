import { createStore } from 'vuex'

export default createStore({
  state: {
    numberArticle:0,
    cart:[]
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

    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('ADD_TO_CART',payload)

    }
  },
  modules: {
  }
})
