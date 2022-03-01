import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [], // agregar default
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});
