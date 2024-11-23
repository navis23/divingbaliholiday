<template>
    <div class="">
        <!-- hero section -->
        <div class="mt-32 rounded-3xl mx-4 lg:mx-32 overflow-hidden">
            <div class="relative w-full h-[40rem] lg:h-screen">
                <div class="relative z-40 grid grid-cols-6 px-4 lg:px-28 h-full">
                    <div class="col-span-6 lg:col-span-4 flex flex-col justify-center h-full text-white gap-8">
                        <div class="">
                            <h1 class="font-anek text-4xl lg:text-6xl tracking-tight text-white font-bold text-center lg:text-left"><span class="text-amber-500">Bali</span> Diving & Snorkeling, Exploring Around <span class="text-amber-500">Bali</span>.</h1>
                        </div>
                        <div class="text-center lg:text-left text-sm lg:text-base">
                            Mari menjelajahi indahnya Bali bersama <span class="font-bold text-amber-500 uppercase">Sastra Adventure</span>. Nikmati paket tour adventure, diving & snorkeling bersama tim profesional kami. Discover Bali Paradise Together Now.
                        </div>
                        <div class="flex justify-center lg:justify-start">
                            <ButtonBase class="main"> 
                                Lets Adventure Now
                            </ButtonBase>
                        </div>
                    </div>
                    <div class="hidden col-span-2 lg:col-span-1 lg:block ">
                    </div>
                </div>
                <div class="absolute w-auto h-auto min-h-full min-w-full max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/60">
                </div>
                <video class="absolute w-auto h-auto min-h-full min-w-full max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 " autoplay loop muted playsinline>
                    <source src="/dive_hero.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <!-- about section -->
        <div class="px-4 lg:px-32 mt-16 lg:mt-24">
            <div class="">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-2xl text-amber-600" /></p>
                    <h2 class="font-anek text-xl lg:text-2xl font-semibold">
                        Tentang Sastra Adventure
                    </h2>
                </div>
                <div class="mt-6 mb-8">
                    <h3 class="font-anek font-semibold text-3xl lg:text-7xl uppercase text-sky-700">
                        Experience Bali Paradise like never before with <span class="font-bold text-amber-600">Sastra Adventure</span>.
                    </h3>
                </div>
            </div>
            <div class="lg:mt-12 grid grid-cols-12 gap-2 lg:gap-8">
                <div class="col-span-12 order-2 lg:order-1 lg:col-span-4 text-justify">
                    <p class="text-sm lg:text-base ">
                        Selamat datang di <span class="font-bold text-amber-600 uppercase">Sastra Adventure</span>, tempat di mana petualangan Anda di Bali menjadi pengalaman tak terlupakan. Dikelola oleh putra asli Bali, kami bangga memperkenalkan kekayaan alam dan budaya pulau ini kepada dunia dengan cara yang autentik dan penuh kehangatan lokal.
                    </p>
                    <p class="mt-4 text-sm lg:text-base">
                        Dari terumbu karang yang memukau hingga lanskap tropis yang menawan, tim pemandu lokal kami yang berpengalaman akan memastikan setiap perjalanan Anda terasa autentik, aman, dan penuh kenangan indah. <span class="font-bold text-amber-600 uppercase">Sastra Adventure</span> bukan hanya tentang petualangan, tapi juga tentang menciptakan momen yang tak terlupakan.
                    </p>
                    <div class="mt-8">
                        <NuxtLink to="/tentang-sastra-adventure">
                            <ButtonBase class="second"> 
                                More About Sastra Adventure
                            </ButtonBase>
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-span-12 order-1 lg:order-2 lg:col-span-8 lg:ml-8 mb-8 lg:mb-0 flex flex-col gap-4">
                    <div class="rounded-2xl relative overflow-hidden shadow-lg">
                        <ClientOnly >
                            <swiper-container ref="containerRef" :init="false" class=" relative">
                                <swiper-slide
                                    v-for="(slide, idx) in slides"
                                    :key="idx"
                                    class="relative flex justify-center items-center h-56 lg:h-80"
                                >
                                    <img :src="slide.name" alt="" class="object-cover object-center h-56 lg:h-80 w-full" loading="lazy">
                                    
                                </swiper-slide>
                                <swiper-pagination class="bg-amber-500 text-amber-500 h-10"></swiper-pagination>
                                
                            </swiper-container>
                        </ClientOnly>
                        
                    </div>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 lg:col-span-4 flex flex-col items-center justify-center h-36 p-4 bg-gradient-to-t from-stone-50 to-sky-200/50 rounded-t-2xl border-none outline-none text-center">
                            <p class=""><Icon name="lucide:speech" class="text-5xl text-amber-600" /></p>
                            <p class="font-anek text-xl font-medium">
                                Staff Profesional & Multibahasa
                            </p>
                        </div>
                        <div class="col-span-12 lg:col-span-4 flex flex-col items-center justify-center h-36 p-4 bg-gradient-to-t from-stone-50 to-amber-200/50 rounded-t-2xl border-none outline-none text-center">
                            <p class=""><Icon name="lucide:file-user" class="text-5xl text-sky-600" /></p>
                            <p class="font-anek text-xl font-medium">
                                Guide Bersertifikat Keahlian 
                            </p>
                        </div>
                        <div class="col-span-12 lg:col-span-4 flex flex-col items-center justify-center h-36 p-4 bg-gradient-to-t from-stone-50 to-sky-200/50 rounded-t-2xl border-none outline-none text-center">
                            <p class=""><Icon name="lucide:heart-handshake" class="text-5xl text-amber-600" /></p>
                            <p class="font-anek text-xl font-medium">
                                Harga Bersahabat & Affordable
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- best package section -->
        <div class="px-4 lg:px-32 mt-24">
            <div class="mb-8">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        Paket Terbaik Kami
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
                    <div v-if="trip.status" class="grid grid-cols-12 lg:gap-8 lg:h-96">
                        <div :class="trip.type ? 'lg:bg-gradient-to-l lg:rounded-l-2xl' : 'lg:order-1 lg:items-end lg:bg-gradient-to-r lg:rounded-r-2xl lg:text-right'" class="col-span-12 lg:col-span-7 order-2 flex flex-col items-start justify-start px-4 lg:px-16 py-4 lg:py-8 bg-gradient-to-b from-stone-50 to-sky-50 rounded-b-2xl border-none outline-none transition-all duration-300 text-left">
                            <p class="font-anek text-2xl lg:text-4xl font-semibold">
                                {{ trip.name }}
                            </p>
                            <p class="mt-2 text-sm" v-html="trip.description"></p>
                            <p class="mt-4 text-sm lg:text-base ">Harga Start from</p>
                            <p class="font-anek text-3xl font-semibold">Rp{{ new Intl.NumberFormat('ID').format( trip.price) }}/orang</p>
                            <div class="mt-4 lg:mt-8">
                                <ButtonBase class="main"> 
                                    Booking Now
                                </ButtonBase>
                            </div>
                        </div>
                        <div :class="trip.type ? '' : 'lg:order-2'" class="col-span-12 lg:col-span-5 order-1 rounded-2xl overflow-hidden">
                            <img :src="trip.img" alt="" class="object-cover object-center h-56 lg:h-96 w-full" loading="lazy">
                        </div>
                    </div>
                </template>
                <!-- <div class="grid grid-cols-12 lg:gap-8 lg:h-96">
                    <div class="col-span-12 lg:col-span-7 order-2 lg:order-1 flex flex-col items-start lg:items-end justify-start px-4 lg:px-16 py-4 lg:py-8 bg-gradient-to-b lg:bg-gradient-to-r  from-stone-50 to-sky-50 rounded-b-2xl lg:rounded-r-2xl border-none outline-none transition-all duration-300 text-left lg:text-right">
                        <p class="font-anek text-2xl lg:text-4xl font-semibold">
                            Diving at Menjangan Island
                        </p>
                        <p class="mt-2 text-sm">Nikmati Diving bersama <span class="font-bold text-amber-600 uppercase">Sastra Adventure</span> untuk menjelajahi harta karun bawah laut Pulau Menjangan. Menyelami beberapa titik kawasan yang menakjubkan dan kami akan mengajak Anda melihat kehidupan bawah laut yang unik dan tidak terlupakan.</p>
                        <p class="mt-4 text-sm lg:text-base ">Harga Start from</p>
                        <p class="font-anek text-3xl font-semibold">Rp1.100.000/orang</p>
                        <div class="mt-8">
                            <ButtonBase class="main"> 
                                Booking Now
                            </ButtonBase>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-5 order-1 lg:order-2 rounded-2xl overflow-hidden">
                        <img src="/img/dive08.webp" alt="" class="object-cover object-center h-56 lg:h-96 w-full" loading="lazy">
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:gap-8 lg:h-96">
                    <div class="col-span-12 lg:col-span-7 order-2 flex flex-col items-start justify-start px-4 lg:px-16 py-4 lg:py-8 bg-gradient-to-b lg:bg-gradient-to-l from-stone-50 to-sky-50 rounded-b-2xl lg:rounded-l-2xl border-none outline-none transition-all duration-300 text-left">
                        <p class="font-anek text-2xl lg:text-4xl font-semibold">
                            Snorkeling at Menjangan Island
                        </p>
                        <p class="mt-2 text-sm">Nikmati keindahan bawah laut pulau Menjangan dengan ber Snorkeling bersama kami. Menyelami beberapa titik Kawasan yang menakjubkan dan kami akan menunjukan kepada anda taman terumbu karang dengan berbagai jenis Ikan dan Varietas Laut.</p>
                        <p class="mt-4 text-sm lg:text-base ">Harga Start from</p>
                        <p class="font-anek text-3xl font-semibold">Rp950.000/orang</p>
                        <div class="mt-8">
                            <ButtonBase class="main"> 
                                Booking Now
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
                        <p class="mt-2 text-sm">Bayangkan malam yang penuh bintang, deburan ombak yang menenangkan, dan aroma BBQ yang menggoda di tepi pantai Teluk Brumbun. Dipadu dengan nuansa adventure saat trackking melihat varietas Bali Starling dan Long Black Tail Monkey, dilanjutkan dengan snorkeling di Pulau Menjangan yang eksotis.</p>
                        <p class="mt-4 text-sm lg:text-base ">Harga Start from</p>
                        <p class="font-anek text-3xl font-semibold">Rpx.000.000/orang</p>
                        <div class="mt-8">
                            <ButtonBase class="main"> 
                                Booking Now
                            </ButtonBase>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-5 order-1 lg:order-2 rounded-2xl overflow-hidden">
                        <img src="/img/dive02.webp" alt="" class="object-cover object-center h-56 lg:h-96 w-full" loading="lazy">
                    </div>
                </div> -->
                <div class="grid grid-cols-12 items-center gap-2 h-36 px-4 py-4 lg:px-24 bg-gradient-to-t from-stone-50 to-sky-100/50 rounded-t-2xl border-none outline-none">
                    <p class="col-span-12 lg:col-span-8 font-anek text-xl lg:text-3xl font-medium text-center lg:text-left">
                        Temukan semua paket trip kami disini.
                    </p>
                    <div class="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
                        <ButtonBase class="second"> 
                            Discover All Trip Packages
                        </ButtonBase>
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

        <!-- testimoni section -->
        <div class="px-4 lg:px-32 my-24">
            <div class="mb-8">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        Testimoni 
                    </h2>
                </div>
                <div class="mt-6 mb-">
                    <h3 class="font-anek font-semibold text-3xl lg:text-5xl text-sky-700">
                        Our happy customers tell the story!
                    </h3>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-2 lg:gap-6">
                <div class="col-span-12 rounded-2xl relative">
                    <ClientOnly >
                        <swiper-container ref="containerTwoRef" :init="false" class=" relative py-4 w-full">
                            <swiper-slide
                                v-for="(testi, idx) in testimonies"
                                :key="idx"
                                class="relative px-8 py-6 h-72 flex flex-col gap-2 shadow rounded-2xl w-80 lg:w-96 mb-10 overflow-hidden bg-white"
                            >
                                <div class="flex gap-x-4 items-center">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img :src="testi.img" alt="" class="object-cover object-center h-16 w-16 rounded-full" loading="lazy">
                                    </div>
                                    <div class="">
                                        <p class="font-anek font-medium text-base lg:text-lg">
                                            {{ testi.name }}
                                        </p>
                                        <p class="text-sm lg:text-base text-gray-600">
                                            {{ testi.country }}
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="line-clamp-6 text-sm lg:text-base text-gray-500">
                                        "{{ testi.testi }}"
                                    </p>
                                </div>
                                <p class="mt-2 absolute top-4 right-4"><Icon name="lucide:quote" class="text-7xl lg:text-9xl text-amber-600 opacity-5" /></p>
                            </swiper-slide>
                            
                        </swiper-container>
                    </ClientOnly>
                    
                </div>
            </div>
        </div>

        <!-- best package section -->
        <!-- <div class="px-4 lg:px-32 mt-24">
            <div class="mb-8">
                <div class="flex gap-x-2 items-center">
                    <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                    <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                        Testimoni 
                    </h2>
                </div>
                <div class="mt-6 mb-12">
                    <h3 class="font-anek font-semibold text-3xl lg:text-5xl text-sky-700">
                        Our happy customers tell the story!
                    </h3>
                </div>
            </div>
            <div class="pt-8 grid grid-cols-12 gap-2 lg:gap-6">
                <div class="bg-red-50 col-span-3 p-4 h-72 border rounded-3xl">
                    image
                </div>
                <div class="bg-red-50 col-span-3 p-4 h-72 border rounded-3xl">
                    image
                </div>
                <div class="bg-red-50 col-span-3 p-4 h-72 border rounded-3xl">
                    image
                </div>
                <div class="bg-red-50 col-span-3 p-4 h-72 border rounded-3xl">
                    image
                </div>
            </div>
        </div> -->
        
    </div>
</template>

<script lang="ts" setup>
    const containerRef = ref(null)
    const containerTwoRef = ref(null)
    const slides = ref([
        {
            id: 1,
            name: '/img/dive01.webp'
        },
        {
            id: 2,
            name: '/img/dive02.webp'
        },
        {
            id: 3,
            name: '/img/dive03.webp'
        },
        {
            id: 4,
            name: '/img/dive04.webp'
        },
        {
            id: 5,
            name: '/img/dive05.webp'
        },
    ])

    const tripStore = useTripStore()

    const {
        trips
    } = storeToRefs(tripStore)

    const testimonies = ref([
        {
            id: 1,
            name: 'Mrs. Smith Elene',
            country: 'New Zealand',
            img: '/img/testi01.webp',
            testi : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium sapiente cumque, soluta blanditiis quam, inventore beatae maxime necessitatibus dolore quibusdam amet rem.'
        },
        {
            id: 2,
            name: 'Mr. Nakamura Sanada',
            country: 'Japan',
            img: '/img/testi02.webp',
            testi : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique error sunt eum.'
        },
        {
            id: 3,
            name: 'Mr. John Snow',
            country: 'England',
            img: '/img/testi03.webp',
            testi : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis facilis harum eaque obcaecati dolor eos voluptas velit.'
        },
        {
            id: 4,
            name: 'Mr. Ceb Sebastian',
            country: 'France',
            img: '/img/testi04.webp',
            testi : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam molestias rem nihil rerum quidem obcaecati similique debitis pariatur autem nisi, blanditiis voluptate, cupiditate corrupti. Sunt debitis numquam repellat eius.'
        },
        {
            id: 5,
            name: 'Mr. Slavina Anastasya',
            country: 'Russia',
            img: '/img/testi05.webp',
            testi : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus velit, nihil nisi delectus vitae esse.'
        },
    ])

    const swiper = useSwiper(containerRef, {
        // effect: 'coverflow',
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
        }
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

    const swipertwo = useSwiper(containerTwoRef, {
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

    onMounted(() => {
    console.log(swiper.instance)
    })
</script>

<style>

</style>