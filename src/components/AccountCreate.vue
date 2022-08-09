<template>
    <form action="" method="POST">
        <h3>Create New Account</h3>
        <fieldset>
        <legend>Personal information</legend>
            <label class="create-form-item">
                <span>First Name</span>
                <input type="text" name="first-name" v-model="newAccountInfo.firstName">
            </label>
            <label class="create-form-item">
                <span>Surname</span>
                <input type="text" name="surame">
            </label>
            <label class="create-form-item">
                <span>Date of birth</span>
                <input type="text" name="dob">
            </label>
        </fieldset>
        <fieldset>
        <legend>Password creation</legend>
            <label class="create-form-item">
                <span>Password</span>
                <input type="password" name="password" v-model="newAccountInfo.password">
            </label>
            <label class="create-form-item">
                <span>Re-type your password</span>
                <input type="password" name="password-verif" v-model="passwordVerify">
            </label>
        </fieldset>
        <input type="submit" value="Create Account" @click.prevent="createAccount">
    </form>
</template>
<script>
import sanitiserMixin from '@/mixins/sanitiserMixin.js';

export default {
    name: 'AccountCreate',
    mixins: [sanitiserMixin],
    data: function () {
        return {
            newAccountInfo: {},
            passwordVerify: '',
        }
    },
    methods: {
        createAccount() {
            if(this.newAccountInfo.password === this.passwordVerify) {
                this.$store.commit("CREATE_NEW_ACCOUNT", this.newAccountInfo);
            }
            this.$emit("close");
        }
    }
}
</script>
<style scoped>

form {
    width: 85%;
}

fieldset {
    text-align: left;
    margin-top: 1rem;
    padding: 0.5rem;
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

</style>