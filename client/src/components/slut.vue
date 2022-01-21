<template>
<div class="gridConeiner1">
    <CardDiagram
        :imga="'netflix.png'"
        :Text="'NETFLIX'"
        :White="'whitecopy.jpg'"
    /> 
    <CardDiagram
        :imga="'cmore.jpg'"
        :Text="'Cmore'"
        :White="'whitecopy.jpg'"
    /> 
    <CardDiagram
        :imga="'discovery.jpg'"
        :Text="'DISVOVERY+'"
        :White="'whitecopy.jpg'"
    /> 
    <CardDiagram
        :imga="'disney.webp'"
        :Text="'DISNYE+'"
        :White="'whitecopy.jpg'"
    /> 
    <CardDiagram
        :imga="'hbo.jpg'"
        :Text="'HBO'"
        :White="'whitecopy.jpg'"
    /> 
    <CardDiagram
        :imga="'viaplay.png'"
        :Text="'VIAPLAY'"
        :White="'whitecopy.jpg'"
    /> 
</div>
 

   
</template>

<script>
import CardDiagram from "./CardDiagram"
export default {
    components: {
     CardDiagram
  },
  data () {
    return {
      dialogm1: "",
      dialog: false,
    }
  },
    
}
</script>
<style>
.gridConeiner1{
     display: grid;
  margin-top: 200px;
  justify-items: center;
  justify-content: center;
  /* gap: 1%; */
  grid-auto-rows: 400px;
}

@media (min-width: 800px) {
  .gridContainer1 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1200px) {
  .gridContainer1 { grid-template-columns: repeat(3, 1fr); }
}

</style>