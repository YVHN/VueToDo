<template>
    <div class="welcome">
        <h1 class="welcome__heading">Hello / Здравствуйте</h1>
        <p class="welcome__text">Для продолжения введите в адресную строку <span>"/login"</span></p>
        <p class="welcome__text">To continue, type in the address bar <span>"/login"</span></p>
        <router-link to="/todo/login" class="welcome__link">Либо нажмите на эту ccылку / Or click on this link</router-link>
    </div>
</template>

<style lang="scss">
    .welcome{
        text-align: center;
        font-family: 'Roboto';
        &__heading{
            font-size: 40px;
            font-weight: 700;
            margin: 60px 0px;
        }
        &__text{
            padding: 40px 0px;
            font-size: 24px;
            &>span{
                color: white;
            }
        }
        &__link{
            font-size: 24px;
            color: white;
            text-decoration: underline;
        }
    }
</style>