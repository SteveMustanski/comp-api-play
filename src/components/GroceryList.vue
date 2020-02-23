<template>
  <div>
    <input type="text" v-model="state.input" placeholder="Add Grocery" />
    <input type="submit" @click="addGrocery()" />
    <ul>
      <li v-for="(item, index) in state.groceries" :key="item">
        {{ item }}
        <button @click="deleteGrocery(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { reactive } from "@vue/composition-api";

  export default {

    setup() {
      const { state, addGrocery, deleteGrocery } = useGroceryList();
      return { state, addGrocery, deleteGrocery };
    }
  };

  function useGroceryList() {
    let state = reactive({
        input: "",
        groceries: []
    });
    function addGrocery() {
      state.groceries.push(state.input);
      state.input = "";
    }
    function deleteGrocery(index) {
      state.groceries.splice(index, 1);
    }
    return { state, addGrocery, deleteGrocery }
  }


</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
}
</style>