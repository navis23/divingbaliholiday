// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Sastra Adventure Bali',
            htmlAttrs: {
                lang: 'id',
            },
            meta: [
            // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Bali Diving, Bali Snorkeling & Exploring Around Bali.' }
            ],
        },
    },
    devtools: { enabled: false },
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', 'nuxt-swiper', '@pinia/nuxt'],
    pinia: {
        
    }
})