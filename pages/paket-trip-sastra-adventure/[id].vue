<template>
    <div>
        <!-- detail trip section -->
        <div class="px-4 lg:px-32 mt-40">
            <div class="mb-8">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        Detail Paket Trip
                    </h2>
                    <NuxtLink to="/paket-trip-sastra-adventure">
                        <ButtonBase class="inverted-two ml-16"> 
                            Kembali ke semua trip
                        </ButtonBase>
                    </NuxtLink>
                </div>
                <div class="mt-6 mb-12">
                    <h3 class="font-anek font-semibold text-4xl lg:text-6xl text-sky-700">
                        {{ tripSelected[0].name }}
                    </h3>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mt-8">
                <div class="col-span-12 lg:col-span-4 bg-gradient-to-tr from-white to-sky-50/50 shadow p-4 lg:p-8 space-y-4 rounded-2xl">
                    <div class="space-y-1">
                        <div class="flex items-center gap-x-2">
                            <p class="mt-2"><Icon name="lucide:tags" class="text-xl text-amber-600" /></p>
                            <p class="font-anek text-base lg:text-lg">
                                Harga start from
                            </p>
                        </div>
                        <p class="font-anek text-2xl lg:text-3xl font-semibold">Rp{{ new Intl.NumberFormat('ID').format( tripSelected[0].price) }}/orang</p>
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center gap-x-2">
                            <p class="mt-2"><Icon name="lucide:users" class="text-xl text-amber-600" /></p>
                            <p class="font-anek text-base lg:text-lg">
                                Minimal peserta
                            </p>
                        </div>
                        <p class="font-anek text-2xl lg:text-3xl font-semibold">{{ tripSelected[0].min_pax }} orang peserta</p>
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center gap-x-2">
                            <p class="mt-2"><Icon name="lucide:alarm-clock" class="text-xl text-amber-600" /></p>
                            <p class="font-anek text-base lg:text-lg">
                                Durasi trip
                            </p>
                        </div>
                        <p class="font-anek text-2xl lg:text-3xl font-semibold">&plusmn {{ tripSelected[0].duration }} kegiatan</p>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 bg-gradient-to-tr from-white to-sky-50/50 shadow p-4 lg:p-8 space-y-4 rounded-2xl">
                    
                    <div class="flex items-center gap-x-2">
                        <p class="mt-2"><Icon name="lucide:waves" class="text-3xl text-amber-600" /></p>
                        <p class="font-anek text-3xl font-semibold">
                            Include paket
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <div v-for="(include, index) in tripSelected[0].price_includes " :key="include.include_id" class=" p-2 shadow rounded-lg bg-sky-50">
                            <p class="font-anek">
                                {{ include.include_name }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 bg-gradient-to-tr from-white to-sky-50/50 shadow p-4 lg:p-8 space-y-4 rounded-2xl">
                    <div class="flex items-center gap-x-2">
                        <p class="mt-2"><Icon name="lucide:waves" class="text-3xl text-amber-600" /></p>
                        <p class="font-anek text-3xl font-semibold">
                            Free fasilitas
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <div v-for="(facility, index) in tripSelected[0].facilities " :key="facility.facility_id" class=" p-2 shadow rounded-lg bg-sky-50">
                            <p class="font-anek">
                                {{ facility.facility_name }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-6 bg-gradient-to-tr from-white to-sky-50/50 shadow p-4 lg:p-8 space-y-4 rounded-2xl">
                    <div class="flex items-center gap-x-2">
                        <p class="mt-2"><Icon name="lucide:waves" class="text-3xl text-amber-600" /></p>
                        <p class="font-anek text-3xl font-semibold">
                            The story of trip
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <p class="text-pretty" v-html="tripSelected[0].description"></p>
                    </div>
                </div>
                
                <div class="col-span-12 lg:col-span-6 bg-gradient-to-tr from-white to-sky-50/50 shadow p-4 lg:p-8 space-y-4 rounded-2xl">
                    <div class="flex items-center gap-x-2">
                        <p class="mt-2"><Icon name="lucide:waves" class="text-3xl text-amber-600" /></p>
                        <p class="font-anek text-3xl font-semibold">
                            Itinerary trip
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <p v-if="tripSelected[0].trip_plan != ''" class="text-pretty">
                            {{ tripSelected[0].trip_plan }}
                        </p>
                        <div v-if="tripSelected[0].trip_plan == ''" >
                            <div v-for="(iti, index) in tripSelected[0].itineraries" :key="iti.itinerary_id" class="mb-4">
                                <p class="text-lg font-semibold mb-2">{{ iti.itinerary_day }}</p>
                                <div v-for="(time, index) in iti.itinerary_times" :key="iti.itinerary_id" class="grid grid-cols-12 gap-4 pb-3">
                                    <div class="col-span-3">
                                        <p>{{ time.time_hour }}</p>
                                    </div>
                                    <div class="col-span-9">
                                        <p>{{ time.time_description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- gallery section -->
        <div class="px-4 lg:px-32 mt-16">
            <div class="mb-4">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        A glimpse of our trips
                    </h2>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-2 lg:gap-6">
                <div class="col-span-12 rounded-2xl relative">
                    <ClientOnly >
                        <swiper-container ref="containerTripRef" :init="false" class=" relative py-4 w-full">
                            <swiper-slide
                                v-for="(gal, idx) in tripSelected[0].galleries "
                                :key="gal.gallery_id"
                                class="relative h-64 lg:h-96 flex flex-col gap-2 shadow rounded-2xl w-80 lg:w-[32rem] mb-10 overflow-hidden"
                            >
                                <img :src="gal.gallery_name" alt="" class="object-cover object-center h-64 lg:h-96 w-full" loading="lazy">
                            </swiper-slide>
                            
                        </swiper-container>
                    </ClientOnly>
                    
                </div>
            </div>
        </div>

        <!-- quick call section -->
        <div class="px-4 lg:px-32 mt-16">
            <div class="mb-4">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        Hubungi kami sekarang juga!
                    </h2>
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
                </div>
            </div>
        </div>

        <!-- cta section -->
        <div class="mt-16 mb-24 rounded-3xl mx-4 lg:mx-32 overflow-hidden">
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
    const { id } = useRoute().params
    const tripStore = useTripStore()
    const stringId = (id as any).split('-').join(' ')
    const {
        trips
    } = storeToRefs(tripStore)
    const containerTripRef = ref(null)
    
    // filtered featured member
    const tripSelected = computed(() =>
        trips.value.filter(
            (p : any) => p.name == stringId
        ) || []
    )

    const swiperTrip = useSwiper(containerTripRef, {
        // effect: 'fade',
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            // dynamicBullets: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 30,
        // creativeEffect: {
        //     prev: {
        //     shadow: true,
        //     translate: [0, 0, -400],
        //     },
        //     next: {
        //     shadow: true,
        //     translate: [0, 0, -400],
        //     },
        // },
    })

console.log(id)
</script>

<style>

</style>