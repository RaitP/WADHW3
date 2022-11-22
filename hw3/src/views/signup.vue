<template>
  <div>

    <form @submit.prevent ="validateForm">
      <h2>Create an account</h2>
      <label for="email">Email</label>
      <input type="email" placeholder="Email" required v-model="email">

      <label for="password">Password</label>
      <input type="password" placeholder="Password" v-model="password">
      <span :class="has_minimum_length ? 'has_required' : ''">The password should be at least 8 chars and less than 15 chars</span>,
      <span :class="has_number ? 'has_required' : ''">Includes at least one uppercase alphabet character</span>,
      <span :class="has_2lowercase ? 'has_required' : ''">Includes at least two lowercase alphabet characters</span>,
      <span :class="has_firstuppercase ? 'has_required' : ''">Includes at least one numeric value</span>,
      <span :class="has_uppercase ? 'has_required' : ''">It should start with an uppercase alphabet</span>
      <span :class="has_underscore ? 'has_required' : ''">It should include the character “_”</span>


      <div class="submit">
        <button v-on:click="alertFun">Sign up</button>
      </div>
    </form>


  </div>


</template>

<script>
export default {
  name: "FormView",

  data() {
    return {
      password: '',
      email: '',
      has_minimum_length: false,
      has_number: false,
      has_2lowercase: false,
      has_firstuppercase: false,
      has_uppercase: false,
      has_underscore: false
    }
  },
  watch: {
    password() {
      this.has_minimum_length = (this.password.length > 8 || this.password < 15);
      this.has_number = /\d/.test(this.password);
      this.has_2lowercase = /[a-z]{2}/.test(this.password);
      this.has_firstuppercase = /[A-Z]/.test(this.password[0]);
      this.has_uppercase = /[A-Z]/.test(this.password);
      this.has_underscore = /[_]/.test(this.password);
    }
  },
  methods: {
    /* Validate password */
    validateForm(){
      console.log(this.email)
      console.log(this.password)
    },
    alertFun() {
      const list = [this.has_minimum_length, this.has_number, this.has_2lowercase, this.has_firstuppercase, this.has_uppercase, this.has_underscore];
      const list2 = ["password minimum length is 8 and max 15", "password must at least contain one number", "password must contain 2 lowercase characters", "password must start with an uppercase alphabet", "password must contain at least one uppercase alphabet character", "password must have one underscore"];

      if(this.has_minimum_length && this.has_number && this.has_2lowercase && this.has_firstuppercase && this.has_uppercase && this.has_underscore) {
        alert("correct password entry");
      }
      else {
        for (let i = 0; i < list.length; i++) {
          if (!list[i]) {
            alert(list2[i])
            break
          }
        }
      }
    }
  }
}

</script>

<style scoped>
* {
  font-family: sans-serif;
}

button {
  background: grey;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor:pointer;
}

button:hover{
  transform: scale(1.1) perspective(1px)
}

form {
  max-width: 420px;
  margin: 30px auto;
  background: #5A6267;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: white;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}

h2, .submit {
  text-align: center;
}

</style>