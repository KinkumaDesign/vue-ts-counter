<template>
    <div class="counter">
        <p class="count-label">{{ count }}</p>
        <div class="input-area">
            <input type="button" :value="`-${tick}`" @click="onMinusButtonClick" />
            <input type="button" :value="`+${tick}`" @click="onPlusButtonClick" />
        </div>
    </div>
</template>
<style lang="scss" src="./Counter.scss" scoped />
<script lang="ts" src="./Counter.ts" />
