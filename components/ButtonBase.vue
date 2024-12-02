<template>
    <button class="text-center font-anek flex items-center gap-x-1 font-semibold rounded-xl shadow cursor-pointer transition-all duration-300 py-3 lg:py-4 px-4 lg:px-6 ease-in-out border-none outline-none leading-none text-base">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.main {
    @apply bg-sky-600 text-white hover:bg-sky-700 hover:text-white
}
.second {
    @apply bg-amber-600 text-white hover:bg-amber-700 hover:text-white
}
.danger {
    @apply bg-red-500 text-white hover:bg-red-600
}
.dark {
    @apply text-white bg-gray-700 hover:bg-gray-800
}

.inverted {
    @apply font-semibold text-sky-600 ring ring-sky-600 hover:ring-gray-800 hover:text-white hover:bg-gray-800
}
.inverted-two {
    @apply font-semibold text-amber-600 ring ring-amber-600 hover:ring-amber-600 hover:text-white hover:bg-amber-600
}
.outline {
    @apply hover:ring hover:ring-sky-600 
}
.outline-dark {
    @apply hover:ring hover:ring-white
}
.none {
    @apply shadow-none hover:bg-white
}
.none2 {
    @apply shadow-none hover:bg-white hover:shadow
}
</style>