<template>
    <div class="app-container">
        <h1>カウンター</h1>
        <counter-view :count="store.count" />
    </div>
</template>

<style lang="scss" src="../../common/reset.scss" />
<style lang="scss" src="./AppView.scss" scoped />
<script lang="ts" src="./AppView.ts" />
