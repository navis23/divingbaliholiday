<template>
    <div>
        <!-- about section -->
        <div class="px-4 lg:px-32 mt-40">
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
                </div>
                <div class="col-span-12 order-1 lg:order-2 lg:col-span-8 lg:ml-8 mb-8 lg:mb-0 flex flex-col gap-4">
                    <div class="rounded-2xl relative overflow-hidden">
                        <video class="" autoplay loop muted playsinline>
                            <source src="/dive_hero.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>

            <!-- why choose us section -->
            <div class="mt-16 mb-8 flex gap-x-2 items-center">
                <p class="mt-2"><Icon name="lucide:waves" class="text-3xl lg:text-4xl text-amber-600" /></p>
                <h2 class="font-anek text-2xl lg:text-4xl font-semibold">
                    Why Choose US?
                </h2>
            </div>
            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                <div class="col-span-12 lg:col-span-4 flex flex-col items-center justify-center h-36 lg:h-56 px-4 py-4 lg:px-8 bg-gradient-to-t from-stone-50 to-sky-200/50 rounded-t-2xl border-none outline-none text-center">
                    <p class=""><Icon name="lucide:speech" class="text-5xl lg:text-7xl text-amber-600" /></p>
                    <p class="font-anek text-xl lg:text-3xl font-medium">
                        Staff Profesional & Multibahasa
                    </p>
                </div>
                <div class="col-span-12 lg:col-span-4 flex flex-col items-center justify-center h-36 lg:h-56 px-4 py-4 lg:px-8 bg-gradient-to-t from-stone-50 to-amber-200/50 rounded-t-2xl border-none outline-none text-center">
                    <p class=""><Icon name="lucide:file-user" class="text-5xl lg:text-7xl text-sky-600" /></p>
                    <p class="font-anek text-xl lg:text-3xl font-medium">
                        Guide Bersertifikat Keahlian 
                    </p>
                </div>
                <div class="col-span-12 lg:col-span-4 flex flex-col items-center justify-center h-36 lg:h-56 px-4 py-4 lg:px-8 bg-gradient-to-t from-stone-50 to-sky-200/50 rounded-t-2xl border-none outline-none text-center">
                    <p class=""><Icon name="lucide:heart-handshake" class="text-5xl lg:text-7xl text-amber-600" /></p>
                    <p class="font-anek text-xl lg:text-3xl font-medium">
                        Harga Bersahabat & Affordable
                    </p>
                </div>
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

        <!-- cta section -->
        <CtaSection />
    </div>
</template>

<script lang="ts" setup>
    const containerTwoRef = ref(null)

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
</script>

<style>

</style>