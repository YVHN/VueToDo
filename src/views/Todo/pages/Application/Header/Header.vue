<template>
    <div class="ToDo">
        <div class="ToDo__header">
            <img class="ToDo__header-logo" src="../../../assets/logo/logo.svg" />
            <p class="ToDo__header-welcome">С возвращением, <span>{{ `${this.$route.params.user}!` }}</span></p>
            <div class="ToDo__header-search">
                <input type="text" class="ToDo__header-search-input" placeholder="Поиск">
            </div>
            <nav class="ToDo__header-navigation">
                <ul class="ToDo__header-navigation-list">
                    <li><router-link to="list" class="ToDo__header-navigation-list-item">Список</router-link></li>
                    <li><router-link to="settings" class="ToDo__header-navigation-list-item">Настройки</router-link></li>
                    <li><router-link to="/todo/login" class="ToDo__header-navigation-list-item">Сменить
                            аккаунт</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.ToDo {
    font-family: 'Roboto';
    user-select: none;

    &__header {
        background: rgb(0, 93, 129);
        border-bottom: 5px solid rgb(0, 52, 73);
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 40px;

        &-logo {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;

            &:hover {
                transform: scale(1.1);
            }
        }

        &-welcome {
            font-size: 24px;
            font-weight: 700;
            margin-left: 40px;
            color: white;

            &>span {
                background: rgb(0, 105, 112);
                color: rgb(0, 255, 200);
                padding: 10px;
                border-radius: 20px;
            }
        }

        &-search {
            position: relative;
            width: 300px;

            &-input {
                font-size: 18px;
                border-radius: 10px;
                padding: 0px 14px 0px 14px;
                height: 40px;
                width: 27%;
                background: #00364b;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
                transition: width 0.3s ease-in-out;
                color: white;

                &::placeholder {
                    color: rgb(0, 255, 200);
                }

                &:focus {
                    width: 100%;

                    &::placeholder {
                        color: #00364b;
                    }
                }
            }
        }

        &-navigation {
            &-list {
                display: flex;

                &-item {
                    margin-left: 40px;
                    font-size: 24px;
                    color: white;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 10px;
                    transition: background 0.2s ease, color 0.2s ease, transfrom 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

                    &:hover {
                        background: rgb(0, 105, 112);
                        color: rgb(0, 255, 200);
                        transform: scale(1.05);
                    }
                }
            }
        }
    }

}
</style>