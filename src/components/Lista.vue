<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of arrayOrdenado" :key={index}
      @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{item.nombre}}
        <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
      </li>
    </ul>
    
  </div>
<div class="text-center pt-4">
    <button @click="restart" class="btn btn-outline-success">Restart</button>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: "Lista",
  computed: {
      ...mapState(['frutas']),
      arrayOrdenado(){
          return this.frutas.slice().sort( (a, b) => b.cantidad - a.cantidad)
      }
  },

  methods: {
      ...mapMutations(['aumentar', 'restart'])
  }
};
</script>

<style lang="scss" scoped></style>
