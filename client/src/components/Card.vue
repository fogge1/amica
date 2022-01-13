<template>
<div class="card">
    
      <v-card
        class="card
        d-flex
        align-content-end
        flex-wrap ml-5"
        width="
        90%"
        height="50%"
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
                      value="drama"
                    ></v-radio>
                    <v-radio
                      label="Komedi"
                      value="comedy"
                    ></v-radio>
                    <v-radio
                      label="Romantik"
                      value="romance"
                    ></v-radio>
                    <v-radio
                      label="Skräck"
                      value="horror"
                    ></v-radio>
                    <v-radio
                      label="Action"
                      value="action"
                    ></v-radio>
                    <v-radio
                      label="Science Fiction"
                      value="scifi"
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
      <v-snackbar
        v-model="snackbar"
        color="red accent-2"
        timeout="2000"
      
        elevation="24"
      >
      <h1 class="center">Du har redan röstat!</h1>
    </v-snackbar>
    </div>
    
</template>
<script>

import FingerprintJS from '@fingerprintjs/fingerprintjs'



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
      visitorId: '',
      snackbar: false,
    };
  },
  methods: {
    vote : async function () {
      this.dialog = false
      let selectedStreamingSite = this.img.split('.')[0];
      let checkVoted = await this.$axios.get('api/fingerprint/' + this.visitorId)
      console.log(checkVoted.data)

      if(checkVoted.data) {
        this.snackbar = true
      }
      else {
        await this.$axios.put(url + selectedStreamingSite, {fingerprint: this.visitorId, favoriteGenre: this.dialogm1})
      }
    }
  },
  created() {
    const fpPromise = FingerprintJS.load()

    // Get the visitor identifier when you need it.
    fpPromise
      .then(fp => fp.get())
      .then(result => {
        // This is the visitor identifier:
        this.visitorId = result.visitorId
        
      })
  }
}
</script>

<style >

.center {
  text-align: center;
  /* align-items: center; */
}

</style>