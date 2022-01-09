<template>
<div class="card">
      <v-card
        class="card
        d-flex
        align-content-end
        flex-wrap ml-5"
        width="
        350px"
        height="200px"
        color="red darken-4"
      >
      <v-img :src="require(`@/assets/${img}`)" width="350px" height="350px" ></v-img>

       <v-row justify="center">
            <v-dialog
              v-model="dialog"
              scrollable
              max-width="300px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  klicka
                </v-btn>
              </template>
              <v-card>
                <v-card-title>välj genre</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                  <v-radio-group
                    v-model="dialogm1"
                    column
                  >
                    <v-radio
                      label="Drama"
                      value="Drama"
                    ></v-radio>
                    <v-radio
                      label="Komedi"
                      value="Komedi"
                    ></v-radio>
                    <v-radio
                      label="Romantik"
                      value="Romantik"
                    ></v-radio>
                    <v-radio
                      label="Skräck"
                      value="Skräck"
                    ></v-radio>
                    <v-radio
                      label="Action"
                      value="Action"
                    ></v-radio>
                    <v-radio
                      label="Science Fiction"
                      value="Science Fiction"
                    ></v-radio>
                    
                    
                  </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    color="red"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="red"
                    text
                    @click="vote"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>

      </v-card>

    </div>
    
</template>
<script>

const url = 'api/vote/';

export default {
    name: 'Card',
    props: {
        img: String
    },
    data() {
    return {
      dialogm1: "",
      dialog: false,
    };
  },
  methods: {
    vote : function () {
      this.dialog = false
      let selectedStreamingSite = this.img.split('.')[0];

      const res = this.$axios.put(url + selectedStreamingSite)

      console.log(res)
    }
  }
}
</script>