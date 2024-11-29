<template>
    <div>
        <div class="my-24 rounded-3xl mx-4 lg:mx-32 overflow-hidden">
            <div class="relative w-full h-[40rem] lg:h-screen">
                <div class="relative z-40 grid grid-cols-6 px-4 lg:px-28 h-full">
                    <div class="col-span-6 lg:col-span-4 flex flex-col justify-center h-full text-white gap-8">
                        <div class="">
                            <h1 class="font-anek text-4xl lg:text-6xl tracking-tight text-white font-bold text-center lg:text-left">Petualangan Anda Menjelajahi <span class="text-amber-500">Bali</span> Dimulai Sekarang Juga!</h1>
                        </div>
                        <div class="text-center lg:text-left text-base lg:text-xl">
                            Rasakan Keajaiban Bali & Ciptakan Kenangan Tak Terlupakan Bersama <span class="font-bold text-amber-500 uppercase">Sastra Adventure</span>. Booking Hari Ini Sebelum Slot Habis!
                        </div>
                        <div class="flex justify-center lg:justify-start">
                            <NuxtLink to="/kontak-sastra-adventure">
                                <ButtonBase class="main"> 
                                    Booking Your Trip Now
                                </ButtonBase>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="hidden col-span-2 lg:col-span-1 lg:block ">
                    </div>
                </div>
                <div class="absolute w-auto h-auto min-h-full min-w-full max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/60">
                </div>
                <video class="absolute w-auto h-auto min-h-full min-w-full max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 " autoplay loop muted playsinline>
                    <source src="/boat.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>