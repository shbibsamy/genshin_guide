<template>
    <div class="account-box">
        <h2>My Account</h2>
        <div class="logged-out" v-if="this.$store.state.loggedIn.length == 0">
            <div class="account-box-options">
                <input type="button" value="Login" @click="showForm('login')">
                <input type="button" value="Create" @click="showForm('create')">
            </div>
            <div class="login-form" v-if="login==true">
                <AccountLogin />
            </div>
            <div class="create-form" v-if="create==true">
                <AccountCreate @close="create=false"/>
            </div>
        </div>
        <div class="logged-in" v-if="this.$store.state.loggedIn.length != 0">
            <h3>Welcome!</h3>
            <div class="account-options">
            <input type="button" value="Logout" @click="logout">
            </div>
        </div>
    </div>
</template>
<script>
import AccountCreate from '@/components/AccountCreate.vue';
import AccountLogin from '@/components/AccountLogin.vue';

export default {
    name: 'Connection',
    components: {
        AccountCreate,
        AccountLogin,
    },
    data: function() {
        return {
            login: false,
            create: false,
            logged: false,
        }
    },
    methods: {
        showForm(option) {
            if (option =="login") {
                this.login = !this.login;
                this.create = false;
            } else if (option =="create"){
                this.create = !this.create;
                this.login = false;
            }
        },
        logout() {
            this.$store.commit("LOGOUT");
        }
    }
}
</script>
<style scoped>
.logged-out {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.logged-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    margin: auto;
    padding: 1rem;
}

.account-info {
    margin: 1rem;
}

.login-form, .create-form {
    display: flex;
    justify-content: center;
    width: 320px;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
    border: 2px solid #FAF6EC;
    box-shadow: 0px 0px 8px 12px #adaaa3;
}

.account-box-options {
    display: flex;
    justify-content: space-around;
    min-width: 320px;
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #FAF6EC;
    box-shadow: 0px 0px 0px 3px #adaaa3;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

input[type=button] {
    width: 150px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #FAF6EC;
}

.account-options {
    margin: 1rem;
}

@media screen and (min-width: 1061px) {
    .logged-out {
        padding: 1rem;
    }

    .logged-in {
        width: 1024px;
    }

    .account-info {
        margin: 1rem;
    }

    .login-form, .create-form {
        display: flex;
        justify-content: center;
        width: 800px;
        margin: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        border-top-left-radius: 0;
        border: 2px solid #FAF6EC;
        box-shadow: 0px 0px 8px 12px #adaaa3;
    }

    .account-box-options {
        display: flex;
        justify-content: space-around;
        width: 800px;
    }

    input[type=button] {
    width: 200px;
    }

    ul {
        width: 600px;
        border: 2px solid #FAF6EC;
    }
}
</style>