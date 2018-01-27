<template>
    <div class="counter">
        <p class="count-label">{{ state.count }}</p>
        <div class="input-area">
            <input type="button" :value="`-${state.tick}`" @click="onMinusButtonClick" />
            <input type="button" :value="`+${state.tick}`" @click="onPlusButtonClick" />
        </div>
    </div>
</template>
<style lang="scss" src="./Counter.scss" scoped />
<script lang="ts" src="./Counter.ts" />
