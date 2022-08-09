<template>
    <form action="" method="POST">
        <h3>Login</h3>
        <fieldset>
            <legend>Account Information</legend>
            <label class="login-form-item">
                <span>Username</span>
                <input type="text" name="username" v-model="newLoginInfo.username">
            </label>
            <label class="login-form-item">
                <span>Password</span>
                <input type="password" name="password" v-model="newLoginInfo.password">
            </label>
        </fieldset>
        <input type="submit" value="Log-in" @click.prevent="login">
        <span id="warning"></span>
    </form>
</template>
<script>
import sanitiserMixin from '@/mixins/sanitiserMixin.js';
import router from '@/router';

export default {
    name: 'AccountLogin',
    mixins: [sanitiserMixin],
    data: function () {
        return {
            newLoginInfo: {},
        }
    },
    methods: {
        login() {
            let verify;
            let input = this.newLoginInfo;
            let warning = document.getElementById('warning');
            switch(input.username) {
                case 'admin':
                    verify = this.$store.state.admin;
                    if(input.username == verify.username && input.password == verify.password) {
                        this.$store.commit("LOGIN", 'admin');
                    } else {
                        warning.innerText = 'Incorrect user information';
                    }
                    break;
                case 'test':
                    verify = this.$store.state.client;
                    if(input.username == verify.username && input.password == verify.password) {
                        this.$store.commit("LOGIN", 'client');
                    } else {
                        warning.innerText = 'Incorrect user information';
                    }
                    break;
                case 'test2':
                    verify = this.$store.state.newClient;
                    if(input.username == verify.username && input.password == verify.password) {
                        this.$store.commit("LOGIN", 'client');
                    } else {
                        warning.innerText = 'Incorrect user information';
                    }
                    break;
                default:
                    warning.innerText = 'User does not exist';
            }
        }
    }
}
</script>
<style scoped>
form {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

fieldset {
    text-align: left;
    margin-top: 1rem;
    padding: 0.5rem;
    width: 100%;
    border: 2px solid #FAF6EC;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

legend {
    font-weight: bolder;
    padding-left: 1rem;
    padding-right: 1rem;
}

label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}

input[type=text], input[type=password] {
    width: 200px;
    padding: 0.5rem;
    background-color: #FAF6EC;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

#warning {
    margin: 1rem;
}
</style>