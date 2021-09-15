import { createStore } from "vuex";

export default createStore({
  state: {
    frutas: [
      {
        nombre: "Manzana",
        cantidad: 0,
      },
      {
        nombre: "Naranja",
        cantidad: 0,
      },
      {
        nombre: "Pera",
        cantidad: 0,
      },
    ],
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    restart(state){
      state.frutas.forEach(el => {
        el.cantidad = 0
      })
    }
  },
  actions: {},
  modules: {},
});
