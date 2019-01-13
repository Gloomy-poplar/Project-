<template>
  <v-app>
    <v-toolbar class='orange lighten-4'>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="white--text btn">
        Login
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
<v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout align-center justify-end row><v-btn color="success">accept</v-btn></v-layout>
  
 
 
 
 
 </v-form>

  </v-app>
</template>

<script>
  export default {

  }
</script>

<style styles>


</style>