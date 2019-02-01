<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-container fluid>
          <v-layout row>
            <v-flex>
              <v-text-field v-model="search" label="Поиск" id="id"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex v-for="list in filterlist" :key="list.id" xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-layout row>
              <v-flex xs4 md3>
                <v-card-media :src="list.imageId" width="150px">

                </v-card-media>
              </v-flex>
              <v-flex xs8 md9>
                <v-card-title>
                  <div>
                    <div class="headline">
                      {{list.firstname}}
                      {{list.lastname}}
                    </div>
                  </div>
                </v-card-title>


              </v-flex>
              <v-flex align-self-end>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" flat :to="{name:'personal',params:{id:list.id}}">Подробнее</v-btn>
              </v-flex>

            </v-layout>

          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        search: null
      }

    },
    computed: {
      list() {
        return this.$store.getters.getList
      },
      filterlist() {
        let list = this.list
        if (this.search)
          list = list.filter(b =>
            b.firstname.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
            b.lastname.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
        return list
      }

    }
  }
</script>

<style scoped>

</style>