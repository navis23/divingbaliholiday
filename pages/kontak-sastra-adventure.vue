<template>
    <div>
        <!-- contact section -->
        <div class="px-4 lg:px-32 mt-40">
            <div class="mb-8">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        Kontak Kami
                    </h2>
                </div>
                <div class="mt-6 mb-12">
                    <h3 class="font-anek font-semibold text-3xl lg:text-5xl text-sky-700">
                        Mulai petualangan Anda di Bali sekarang juga.
                    </h3>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4 lg:gap-8 mt-8">
                <div class="col-span-12 lg:col-span-4 bg-white shadow p-4 lg:p-8 rounded-2xl">
                    <div class="pl-2 border-l-4 border-amber-600">
                        <p class="text-2xl font-semibold">
                            Nomor Telepon
                        </p>
                    </div>
                    <div class="text-base lg:text-lg mt-4 space-y-1">
                        <p>
                            Admin 1 : 081234567876
                        </p>
                        <p>
                            Admin 2 : 082345676543
                        </p>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 bg-white shadow p-4 lg:p-8 rounded-2xl">
                    <div class="pl-2 border-l-4 border-amber-600">
                        <p class="text-2xl font-semibold">
                            Email & Website
                        </p>
                    </div>
                    <div class="text-base lg:text-lg mt-4 space-y-1">
                        <p>
                            sastraadventurebali@gmail.com
                        </p>
                        <p>
                            sastraadventurebali.com
                        </p>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 bg-white shadow p-4 lg:p-8 rounded-2xl">
                    <div class="pl-2 border-l-4 border-amber-600">
                        <p class="text-2xl font-semibold">
                            Sosial Media
                        </p>
                    </div>
                    <div class="text-base lg:text-lg mt-4 space-y-1">
                        <p>
                            Instagram @sastraadventure
                        </p>
                        <p>
                            Tiktok @sastraadventure
                        </p>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 bg-white shadow p-4 lg:p-8 rounded-2xl">
                    <div class="pl-2 border-l-4 border-amber-600">
                        <p class="text-2xl font-semibold">
                            Jam Layanan
                        </p>
                    </div>
                    <div class="text-base lg:text-lg mt-4 space-y-1">
                        <p>
                            Senin - Jumat 08.00 - 16.00
                        </p>
                        <p>
                            Sabtu - Minggu 07.30 - 18.00
                        </p>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-8 grid grid-cols-12 bg-white shadow rounded-2xl overflow-hidden">
                    <div class="col-span-12 lg:col-span-5">
                        <img src="/img/beach03.webp" alt="" class="object-cover object-center h-64 w-full" loading="lazy">
                    </div>
                    <div class="col-span-12 lg:col-span-7 p-4 lg:p-8">
                        <div class="pl-2 border-l-4 border-amber-600">
                            <p class="text-2xl font-semibold">
                                Alamat Basecamp
                            </p>
                        </div>
                        <div class="text-base lg:text-lg mt-4 flex flex-col h-32 lg:h-36 justify-between">
                            <p>
                                Jl. xxx xxxx xxx, Kel. xxxx xxxx, Kab. xxxxxx xxxxx, Bali, Indonesia
                            </p>
                            <div class="">
                                <ButtonBase class="main"> 
                                    Get Directions
                                </ButtonBase>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- cta section -->
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
                            <ButtonBase class="main"> 
                                Reservasi Sekarang
                            </ButtonBase>
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