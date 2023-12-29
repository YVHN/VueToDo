<template>
    <div class="lists">
        <p class="lists__heading">Списки</p>
        <div class="lists__list">
            <div class="lists__list-item"><img src="../assets/icons/important.svg" alt=""
                    class="lists__list-item-icon">Важное</div>
            <div class="lists__list-item"><img src="../assets/icons/completed.svg" alt=""
                    class="lists__list-item-icon">Сделанное</div>
            <div class="lists__list-item"><img src="../assets/icons/list.svg" alt="" class="lists__list-item-icon">Задачи
            </div>
        </div>
        <div class="lists__line"></div>
        <div class="lists__list">
            <div class="lists__list-item">Сходить в магазин</div>
        </div>
        <div class="list__add-list"><img src="" alt="" class="list__add-list-icon">Добавить список</div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.lists {
    font-family: 'Roboto';
    background: rgb(53, 53, 53);
    min-height: 91.5vh;
    width: 260px;
    padding: 30px 5px;

    &__heading {
        text-align: center;
        color: rgb(65, 184, 131);
        font-size: 20px;
        font-weight: 700;

    }

    &__list {
        padding: 0px 35px;
        &-item {
            font-size: 16px;
            display: flex;
            align-items: end;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: white;
            padding: 20px 0px;

            &-icon {
                width: 18px;
                height: 18px;
                margin-right: 15px;
            }
        }
    }

    &__line {
        height: 1px;
        background: rgb(121, 121, 121);
        
    }
}
</style>