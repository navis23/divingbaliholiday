<template>
    <div>
        <!-- best package section -->
        <div class="px-4 lg:px-32 mt-40">
            <div class="mb-8">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        Paket Trip Kami
                    </h2>
                </div>
                <div class="mt-6 mb-12">
                    <h3 class="font-anek font-semibold text-3xl lg:text-5xl text-sky-700">
                        Petualangan Tak Terlupakan Menanti Anda!
                    </h3>
                </div>
            </div>
            <div class="lg:mt-8 flex flex-col gap-8 lg:gap-16">
                <template v-for="(trip, index) in trips" :key="trip.id">
                    <div class="grid grid-cols-12 lg:gap-8 lg:h-96">
                        <div :class="index % 2 ? 'lg:bg-gradient-to-l lg:rounded-l-2xl' : 'lg:order-1 lg:items-end lg:bg-gradient-to-r lg:rounded-r-2xl lg:text-right'" class="col-span-12 lg:col-span-7 order-2 flex flex-col items-start justify-start px-4 lg:px-16 py-4 lg:py-8 bg-gradient-to-b from-stone-50 to-sky-100 rounded-b-2xl border-none outline-none transition-all duration-300 text-left">
                            <p class="font-anek text-2xl lg:text-4xl font-semibold">
                                {{ trip.name }}
                            </p>
                            <p class="mt-2 text-sm" v-html="trip.description"></p>
                            <p class="mt-4 text-sm lg:text-base ">Harga Start from</p>
                            <p class="font-anek text-3xl font-semibold">Rp{{ new Intl.NumberFormat('ID').format( trip.price) }}/orang</p>
                            <div class="mt-8">
                                <NuxtLink :to="`/paket-trip-sastra-adventure/${trip.name.split(' ').join('-').toLowerCase()}`">
                                    <ButtonBase class="main"> 
                                        More Detail Trip
                                    </ButtonBase>
                                </NuxtLink>
                            </div>
                        </div>
                        <div :class="index % 2 ? '' : 'lg:order-2'" class="col-span-12 lg:col-span-5 order-1 rounded-2xl overflow-hidden">
                            <img :src="trip.img" alt="" class="object-cover object-center h-56 lg:h-96 w-full" loading="lazy">
                        </div>
                    </div>
                </template>
                
                <!-- <div class="grid grid-cols-12 lg:gap-8 lg:h-96">
                    <div class="col-span-12 lg:col-span-7 order-2 flex flex-col items-start justify-start px-4 lg:px-16 py-4 lg:py-8 bg-gradient-to-b lg:bg-gradient-to-l from-stone-50 to-sky-50 rounded-b-2xl lg:rounded-l-2xl border-none outline-none transition-all duration-300 text-left">
                        <p class="font-anek text-2xl lg:text-4xl font-semibold">
                            Snorkeling at Menjangan Island
                        </p>
                        <p class="mt-2 text-sm">Nikmati keindahan bawah laut pulau Menjangan dengan ber Snorkeling bersama kami. Menyelami beberapa titik Kawasan yang menakjubkan dan kami akan menunjukan kepada anda taman terumbu karang dengan berbagai jenis Ikan dan Varietas Laut.</p>
                        <p class="mt-4 text-sm lg:text-base ">Harga Start from</p>
                        <p class="font-anek text-3xl font-semibold">Rp950.000/orang</p>
                        <div class="mt-8">
                            <ButtonBase class="main"> 
                                More Detail Trip
                            </ButtonBase>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-5 order-1 rounded-2xl overflow-hidden">
                        <img src="/img/dive06.webp" alt="" class="object-cover object-center h-56 lg:h-96 w-full" loading="lazy">
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:gap-8 lg:h-96">
                    <div class="col-span-12 lg:col-span-7 order-2 lg:order-1 flex flex-col items-start lg:items-end justify-start px-4 lg:px-16 py-4 lg:py-8 bg-gradient-to-b lg:bg-gradient-to-r from-stone-50 to-sky-50 rounded-b-2xl lg:rounded-r-2xl border-none outline-none transition-all duration-300 text-left lg:text-right">
                        <p class="font-anek text-2xl lg:text-4xl font-semibold">
                            Exotic Camp Days
                        </p>
                        <p class="mt-2 text-sm">Bayangkan malam yang penuh bintang, deburan ombak yang menenangkan, dan aroma BBQ yang menggoda di tepi pantai Teluk Brumbun. Dipadu dengan nuansa adventure saat trackking untuk melihat varietas Bali Starling dan Long Black Tail Monkey, dilanjutkan dengan snorkeling di Pulau Menjangan yang eksotis.</p>
                        <p class="mt-4 text-sm lg:text-base ">Harga Start from</p>
                        <p class="font-anek text-3xl font-semibold">Rpx.000.000/orang</p>
                        <div class="mt-8">
                            <ButtonBase class="main"> 
                                More Detail Trip
                            </ButtonBase>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-5 order-1 lg:order-2 rounded-2xl overflow-hidden">
                        <img src="/img/dive02.webp" alt="" class="object-cover object-center h-56 lg:h-96 w-full" loading="lazy">
                    </div>
                </div> -->
                
            </div>
        </div>

        <!-- cta section -->
        <CtaSection />

    </div>
</template>

<script lang="ts" setup>
const tripStore = useTripStore()

const {
    trips
} = storeToRefs(tripStore)

</script>

<style>

</style>