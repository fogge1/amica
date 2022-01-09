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
    <div class="white">
      <div class="creators">
        <h2>CREATORS:</h2><p>lorrepro</p><p>lavinpro</p><p>isakpro</p>
      </div>
      
      <div class="centerPart">
        <div >
        <a href="https://accounts.snapchat.com/accounts/snapcodes">
            <img
                max-height="50px"
                max-width="50px" 
                src='../assets/snapchat.jpg' 
            />
        </a>
        </div>
        <div class="phoneNumber">
        <a href="tel:0723335062">swish om du king---> 072-333-50-62</a>
        </div>
      </div>
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
  padding: 15px;
  display: grid;
  margin-top: 200px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  grid-auto-rows: 400px;
}
.white{
  background-color: aliceblue;
  height: 200px;
}
.phoneNumber{
  text-align: center;
}

.creators{
  margin-left:50px;
}
.centerPart{
  text-align: center;
  margin-top: 0px;
}

</style>
