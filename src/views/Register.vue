<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md6>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрация</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field v-model="login" :rules="logRules" label="Логин" required>
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" type="email" required></v-text-field>
                </v-flex>
                <v-flex md6>
                  <v-text-field v-model="password" :rules="passRules" type="password" label="Пароль" required></v-text-field>
                </v-flex>
                <v-flex md6>
                  <v-text-field :error-messages='passMatchError()' type="password" v-model="confirmpassword" label="Повторите пароль">
                  </v-text-field>
                </v-flex>

                <v-flex xs12 md6 align-self-center>
                  <v-text-field v-model="firstname" :rules="namerules" label="Ваше имя" type="text" required></v-text-field>
                </v-flex>
                <v-flex xs12 md6 align-self-center>
                  <v-text-field v-model="lastname" :rules="namerules" label="Ваша фамилия" type="text" required></v-text-field>
                </v-flex>
                

              </v-layout>
              <v-card-actions>

                <v-spacer></v-spacer>
                <v-btn color="primary" xs12 @click.prevent="signup">Sign up</v-btn>

              </v-card-actions>
            </v-form>

          </v-card-text>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      login: '',
      password: '',
      confirmpassword: '',
      email: '',
      namerules: [
        v => !!v || 'Заполните поле',
      ],
      logRules: [
        v => !!v || 'Введите логин',
        v => v.length <= 10 || 'Логин слишком длинный'
      ],

      emailRules: [
        v => !!v || 'Введите e-mail',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail должен быть действительным'
      ],
      passRules: [
        v => !!v || 'Введите пароль',
        v => v.length > 10 || 'Пароль слишком короткий',
      ],
      items:()=>{ 
        
        arr = []
           for(i = 1960; i <= 2019; i++) arr.push(i)
           }
    }),
    
    methods: 
    {
      passMatchError() {
        return (this.password === this.confirmpassword) ? '' : 'Password must match'
      },
      signup(){
          this.$store.dispath('SIGNUP',{})
      }

    }

    

    
  }
</script>