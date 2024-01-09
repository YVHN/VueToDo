<template>
    <div class="login">
        <img src="../../assets/logo/logo.svg" class="login__logo" alt="logo">
        <div class="login__body">
            <p class="login__body-heading">Войдите в аккаунт</p>
            <div class="login__body-form">
                <!-- Имя -->
                <div class="login__body-form-label">Nickname</div>
                <div class="login__body-form-input-wrapper">
                    <input type="text" class="login__body-form-input" tabindex="1" v-model="enteredNickname"
                        :class="inputStatus" @input="checkNameInput">
                    <div class="login__body-form-line"></div>
                    <img src="./assets/icons/user.svg" alt="icon" class="login__body-form-icon">
                    <p class="login__body-form-input-prevention" v-show="incorrectName">Имя должно быть от 3 до 16 символов
                    </p>
                </div>
            </div>
            <!-- Сброс пароля -->
            <router-link to="/todo/reset-password" class="login__body-reset-password">Забыли пароль?</router-link>
            <div class="login__body-form">
                <!-- Пароль -->
                <div class="login__body-form-label">Password</div>
                <div class="login__body-form-input-wrapper">
                    <input type="password" tabindex="2" class="login__body-form-input" v-model="enteredPassword"
                        @keyup.enter="submit">
                    <div class="login__body-form-line"></div>
                    <img src="./assets/icons/password.svg" alt="icon" class="login__body-form-icon">
                </div>
            </div>
            <div class="login__body-actions">
                <!-- Кнопка вхлда -->
                <button class="login__body-actions-login" @click="submit">Войти<component :is="enterIcon"></component>
                </button>
                <!-- Регистрация -->
                <router-link to="/todo/sign-up" class="login__body-actions-create-account">Нет аккаунта ?</router-link>
            </div>
            <p class="login__body-data-prevention" v-if="failure">Неверное имя пользователя или пароль</p>
        </div>
    </div>
</template>

<script>
import enter from "./assets/icons/enter.vue";
export default {
    name: "Login",
    data() {
        return {
            // Введённые данные
            enteredPassword: "",
            enteredNickname: "",
            // Иконка
            enterIcon: enter,
            // Статусы полей
            inputStatus: {
                correct: false,
                wrong: false,
            },
            // Статус входа
            failure: "",
            // База пользователей
            users: [
                {
                    id: 1,
                    name: "admin",
                    password: "admin"
                },
                {
                    id: 2,
                    name: "Mxim",
                    password: "123456789"
                },
                {
                    id: 3,
                    name: "Yevhen",
                    password: "Superpuper13"
                },
            ],
            // Текущий пользователь
            currentUser: "",
        }
    },
    methods: {
        checkNameInput() {
            const name = this.enteredNickname;
            if (name.length > 2 && name.length < 16) {
                this.inputStatus.correct = true;
                this.inputStatus.wrong = false
            } else {
                this.inputStatus.correct = false;
                this.inputStatus.wrong = true;
            }
        },
        submit() {
            let status = "";
            this.users.forEach(user => {
                if (user.name == this.enteredNickname && user.password == this.enteredPassword) {
                    this.currentUser = user;
                    status = true;
                }
            });
            if (status) {
                this.failure = false;
                this.getUserId();
                this.$router.push(`/todo/app/${this.currentUser.id}/${(this.enteredNickname).toLocaleLowerCase()}/list`);
            } else {
                this.failure = true;
            }
        },
        getUserId() {
            this.$emit('getId', this.currentUser.id)
        }
    },

}
</script>

<style lang="scss">
.login {
    font-family: 'Roboto';
    text-align: center;

    &__logo {
        margin-top: 120px;
        width: 250px;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
    }

    &__body {
        text-align: start;
        width: 500px;
        height: 400px;
        border-radius: 20px;
        padding: 40px 50px 25px 50px;
        background: rgb(0, 93, 129);
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.40));

        &-heading {
            text-align: center;
            color: #FFF;
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 40px;
        }

        &-form {
            margin-bottom: 20px;

            &-label {
                color: #FFF;
                font-size: 18px;
                font-weight: 700;
                padding-left: 7px;
                margin-bottom: 10px;
            }

            &-input-wrapper {
                position: relative;

                .login__body-form-input-prevention {
                    color: red;
                    font-size: 14px;
                    position: absolute;
                    top: 52px;
                    left: 10px;
                }
            }

            &-icon {
                position: absolute;
                left: 17px;
                top: 17px;
            }

            &-line {
                height: 20px;
                width: 1px;
                background: white;
                position: absolute;
                top: 15px;
                left: 43px;
            }

            &-input {
                width: 100%;
                color: white;
                background: #00364b;
                border-radius: 10px;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
                height: 50px;
                padding: 15px 10px 14px 53px;
                color: #FFF;
                font-size: 18px;
                font-weight: 700;
            }
        }

        &-reset-password {
            color: white;
            font-size: 18px;
            font-weight: 400;
            text-decoration: underline;
            padding: 7px;
            position: absolute;
            right: 50px;
            top: 200px;
            border-radius: 10px;
            transition: background 0.2s ease-in-out;

            &:hover {
                background: rgb(0, 121, 129);
                color: rgb(0, 255, 200);
                text-decoration: none;
            }
        }

        &-actions {
            margin-top: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-login {
                display: flex;
                align-items: center;
                padding: 11px 56px;
                color: #41B883;
                font-size: 24px;
                font-weight: 500;
                border-radius: 10px;
                transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border-radius: 10px;

                &:hover {
                    background: rgb(0, 121, 129);
                    color: rgb(0, 255, 200);
                    transform: scale(1.05);


                    &>svg path {
                        fill: rgb(0, 255, 200);
                    }
                }

                &>svg {
                    margin-left: 6px;
                }
            }

            &-create-account {
                color: #ffffff;
                font-size: 24px;
                font-weight: 500;
                text-decoration: underline;
                border-radius: 10px;
                transition: background 0.2s ease-in-out;
                padding: 10px;

                &:hover {
                    background: rgb(0, 121, 129);
                    color: rgb(0, 255, 200);
                    text-decoration: none;
                }
            }
        }

        &-data-prevention {
            color: red;
            font-size: 14px;
            position: absolute;
            bottom: 14px;
            right: 50%;
            transform: translate(50%);
            width: 400px;
            text-align: center;
        }
    }

    .wrong {
        border: 3px solid red;
        transition: all 0.3s ease-out;
    }

    .correct {
        border: 3px solid #41B883;
        transition: all 0.3s ease-in-out;
    }
}
</style>