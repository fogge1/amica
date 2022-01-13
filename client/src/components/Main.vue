<template>
  <v-content class="black">
    <div class="gridContainer">
      <Card
        :img="'netflix.png'"
      />
      <Card
        :img="'hbo.jpg'"
      />
      <Card
        :img="'disney.webp'"
      />
      <Card
        :img="'discovery.jpg'"
      />
      <Card
        :img="'cmore.jpg'"
      />
      <Card
        :img="'viaply.png'"
      />
    </div>

  </v-content>
</template>
<script>
import Card from "./Card"

export default {
  components: {
    Card,
  },
  data () {
    return {
      dialogm1: "",
      dialog: false,
    }
  },
};
</script>
<style>
.gridContainer {
  display: grid;
  margin-top: 200px;
  justify-items: center;
  justify-content: center;
  /* gap: 1%; */
  grid-auto-rows: 400px;
}

@media (min-width: 800px) {
  .gridContainer { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1200px) {
  .gridContainer { grid-template-columns: repeat(3, 1fr); }
}

/* .centerPart{
  text-align: center;
  margin-top: 0px;
} */

</style>
