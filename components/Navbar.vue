<template>
    <nav :class="isFloat ? 'fixed bg-white shadow-lg' : 'absolute bg-transparent'" class="px-4 lg:px-32 w-full z-[999] text-gray-700">
        <div :class="isFloat ? 'py-2' : 'py-4'" class="grid grid-cols-12 items-center">
            <div class="col-span-3 lg:col-span-2">
                <div>
                    <NuxtLink to="/">
                        <img src="/img/logo.png" alt="" :class="isFloat ? 'h-16' : 'h-20'">
                    </NuxtLink>
                </div>
            </div>
            <div class="hidden col-span-6 lg:flex gap-x-8 items-center">
                <NuxtLink to="/" activeClass="bg-gray-100 rounded-xl shadow font-semibold text-amber-600">
                    <button class="text-center font-anek flex items-center gap-x-1 rounded-xl cursor-pointer transition-all duration-300 p-4 ease-in-out border-none outline-none leading-none hover:shadow hover:ring hover:ring-sky-600 hover:text-sky-700">
                        Home
                    </button>
                </NuxtLink>
                <NuxtLink to="/tentang-sastra-adventure" activeClass="bg-gray-100 rounded-xl shadow font-semibold text-amber-600 ">
                    <button class="text-center font-anek flex items-center gap-x-1 rounded-xl cursor-pointer transition-all duration-300 p-4 ease-in-out border-none outline-none leading-none hover:shadow hover:ring hover:ring-sky-600 hover:text-sky-700">
                        About Us
                    </button>
                </NuxtLink>
                <NuxtLink to="/paket-trip-sastra-adventure" activeClass="bg-gray-100 rounded-xl shadow font-semibold text-amber-600 ">
                    <button class="text-center font-anek flex items-center gap-x-1 rounded-xl cursor-pointer transition-all duration-300 p-4 ease-in-out border-none outline-none leading-none hover:shadow hover:ring hover:ring-sky-600 hover:text-sky-700">
                        Package Trip
                    </button>
                </NuxtLink>
                
            </div>
            <div class="col-span-9 lg:col-span-4 flex justify-end items-center gap-x-2 lg:gap-x-8">
                <NuxtLink to="/kontak-sastra-adventure" activeClass="bg-gray-100 rounded-xl shadow font-semibold text-amber-600 ">
                    <button class="text-center text-sky-700 font-anek flex items-center gap-x-2 rounded-xl cursor-pointer transition-all duration-300 px-4 py-3 ease-in-out border-none outline-none leading-none hover:shadow hover:ring hover:ring-sky-600 hover:text-sky-700">
                        <p class="mt-1"><Icon name="lucide:phone-call" class="text-3xl lg:text-xl" /></p>
                        <p class="hidden lg:block">
                            Contact Us
                        </p>
                    </button>
                </NuxtLink>
                <a href="https://wa.me/6281344779974?text=I'm%20interested%20to%20plan%20a%20trip%20with%20SASTRA%20ADVENTURE" target="_blank" rel="noopener noreferrer">
                    <ButtonBase class="second hidden lg:block">
                        Plan a Trip
                    </ButtonBase>
                </a>

                <ButtonBase @click="switchOpen()" :class="isOpen ? 'danger hidden' : 'second block' " class="lg:hidden">
                    <p class="">{{ isOpen ? 'Close' : 'Menu' }}</p>
                    <p class="mt-1"><Icon :name=" isOpen ? 'lucide:x' : 'lucide:menu'" class="text-2xl" /></p>
                </ButtonBase>

                <ButtonBase @click="switchClose()" :class="isOpen ? 'danger block' : 'second hidden' " class="lg:hidden">
                    <p class="">{{ isOpen ? 'Close' : 'Menu' }}</p>
                    <p class="mt-1"><Icon :name=" isOpen ? 'lucide:x' : 'lucide:menu'" class="text-2xl" /></p>
                </ButtonBase>
            </div>
        </div>
        <div v-if="isOpen" class="col-span-4 relative z-50">
            <div class="absolute w-full flex justify-end ">
                <div class="bg-white shadow-lg p-4 rounded-2xl mt-4 min-w-56">
                    <div class="border-l-4 pl-3 mb-3 border-sky-600">
                        <p class="text-xl font-semibold">
                            Menu
                        </p>
                    </div>
                    <div class="flex flex-col justify-evenly">
                        <NuxtLink @click="switchClose()" to="/" activeClass="bg-gray-100 rounded-xl shadow font-semibold text-amber-600">
                            <button class="text-center font-anek flex items-center gap-x-1 rounded-xl cursor-pointer transition-all duration-300 p-4 ease-in-out border-none outline-none leading-none hover:shadow">
                                Home
                            </button>
                        </NuxtLink>
                        <NuxtLink @click="switchClose()" to="/tentang-sastra-adventure" activeClass="bg-gray-100 rounded-xl shadow font-semibold text-amber-600">
                            <button class="text-center font-anek flex items-center gap-x-1 rounded-xl cursor-pointer transition-all duration-300 p-4 ease-in-out border-none outline-none leading-none hover:shadow">
                                About Us
                            </button>
                        </NuxtLink>
                        <NuxtLink @click="switchClose()" to="/paket-trip-sastra-adventure" activeClass="bg-gray-100 rounded-xl shadow font-semibold text-amber-600">
                            <button class="text-center font-anek flex items-center gap-x-1 rounded-xl cursor-pointer transition-all duration-300 p-4 ease-in-out border-none outline-none leading-none hover:shadow">
                                Package Trip
                            </button>
                        </NuxtLink>
                        <NuxtLink @click="switchClose()" to="/kontak-sastra-adventure" activeClass="bg-gray-100 rounded-xl shadow font-bold">
                            <button class="text-center font-anek flex items-center gap-x-1 rounded-xl cursor-pointer transition-all duration-300 p-4 ease-in-out border-none outline-none leading-none hover:shadow">
                                Contact
                            </button>
                        </NuxtLink>
                        <a href="https://wa.me/6281344779974?text=I'm%20interested%20to%20plan%20a%20trip%20with%20SASTRA%20ADVENTURE" target="_blank" rel="noopener noreferrer">
                            <ButtonBase @click="switchClose()" class="second mt-8">
                                Plan a Trip
                            </ButtonBase>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const isOpen = ref(false)
const isFloat = ref(false)

onMounted(() => {
    document.addEventListener('scroll', function() {
        let bodyTopPosition = document.body.getBoundingClientRect().top;
        
        if( bodyTopPosition < -550 ){
            isFloat.value = true
        } else {
            isFloat.value = false
        }
    })
    
})

const switchOpen = () => {
    isOpen.value = true
}
const switchClose = () => {
    isOpen.value = false
}


</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease-in-out;
}


.slide-enter-from,
.slide-leave-to {
    transform: translateX(100vh);
}
</style>
