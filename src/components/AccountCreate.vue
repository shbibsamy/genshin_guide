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
                <input type="password" name="password">
            </label>
            <label class="create-form-item">
                <span>Re-type your password</span>
                <input type="password" name="password-verif">
            </label>
        </fieldset>
        <input type="submit" value="Create Account">
    </form>
</template>
<script>
export default {
    name: 'AccountCreate',
    data: function () {
        return {
            newAccountInfo: {},
        }
    }
}
</script>
<style scoped>

form {
    width: 80%;
}

fieldset {
    text-align: left;
    margin: 0.5rem;
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

input[type=submit], input[type=button] {
    width: 200px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
}
</style>