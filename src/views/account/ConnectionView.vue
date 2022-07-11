<template>
    <div class="account-box">
        <h2>Account Options</h2>
        <div class="logged-out" v-if="logged==false">
            <div class="account-box-options border">
                <input type="button" value="Login" @click="showForm('login')">
                <input type="button" value="Create" @click="showForm('create')">
            </div>
            <div class="login-form" v-if="login==true">
                <AccountLogin />
            </div>
            <div class="create-form" v-if="create==true">
                <AccountCreate />
            </div>
        </div>
        <div class="logged-in" v-if="logged==true">
            <h3>Welcome back! (mockup, just for show, no security or real data)</h3>
            <div class="account-info">
                <h4>Account information</h4>
                <ul>
                    <li>
                        <span>First Name: X</span>
                    </li>
                    <li>
                        <span>Last Name: X</span>
                    </li>
                    <li>
                        <span>Username: X</span>
                    </li>
                </ul>
                <input type="button" value="Modify">
            </div>
        </div>
    </div>
</template>
<script>
import AccountCreate from '@/components/AccountCreate.vue'
import AccountLogin from '@/components/AccountLogin.vue'
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
    width: 80%;
    margin: auto;
    padding: 1rem;
}

.account-info {
    margin: 1rem;
}

.login-form, .create-form {
    display: flex;
    justify-content: center;
    width: 40%;
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
    width: 50%;
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #FAF6EC;
    box-shadow: 0px 0px 0px 3px #adaaa3;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

input[type=button] {
    width: 200px;
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


@media screen and (min-size: 1061px) {
    ul {
    width: 600px;
    border: 2px solid #FAF6EC;
}
}
</style>