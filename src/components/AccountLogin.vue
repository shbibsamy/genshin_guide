<template>
    <form action="" method="POST">
        <h3>Login</h3>
        <fieldset>
        <legend>Account Information</legend>
            <label class="login-form-item">
                <span>Username</span>
                <input type="text" name="username" v-model="loginInfo.username">
            </label>
            <label class="login-form-item">
                <span>Password</span>
                <input type="password" name="password">
            </label>
        </fieldset>
        <input type="submit" value="Log-in">
    </form>
</template>
<script>
export default {
    name: 'AccountLogin',
    data: function () {
        return {
            loginInfo: {},
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