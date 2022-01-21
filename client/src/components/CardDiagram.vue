<template>
  <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      :src="require(`@/assets/${White}`)"
      
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
        <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img :src="require(`@/assets/${imga}`)"></v-img>
          </v-avatar>
          
        </v-col>
        <v-col class="py-0">
     
     {{White}}
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{Text}}
              </v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>
<script>
export default {
    name: 'CardDiagram',
    props: {
        imga: String,
        White: String,
        Text: String
    },
}
</script>
<style>

</style>