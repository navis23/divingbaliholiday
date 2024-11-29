export const useTripStore = defineStore('tripStore', {
    state: () => ({
        trips : [
            {
                id: 1,
                name: 'Diving at Menjangan Island',
                description : 'Nikmati Diving bersama <span class="font-bold text-amber-600 uppercase">Sastra Adventure</span> untuk menjelajahi harta karun bawah laut Pulau Menjangan. Menyelami beberapa titik kawasan yang menakjubkan dan kami akan mengajak Anda melihat kehidupan bawah laut yang unik dan tidak terlupakan.',
                trip_plan : 'Mulai dari pelabuhan 8:30 - 9.00 pagi ( waktu keberangkatan bisa ditentukan). Perjalanan 25 menit dengan perahu cepat. Durasi diving sekitar 4 jam (max 6jam) dengan 2 titik kawasan yang berbeda. Tiba di pulau pemandu akan Menjelaskan titik kawasan diving. Setelah diving pertama, anda memiliki waktu beristirahat sambil menikmati kawasan pulau Menjangan.',
                img: '/img/dive08.webp',
                price : 1700000,
                facilities : [
                    {
                        facility_id : 1,
                        facility_name : 'Handuk',
                    },
                    {
                        facility_id : 2,
                        facility_name : 'Coffee break (Snack)',
    
                    },
                    {
                        facility_id : 3,
                        facility_name : 'Camera by GoPro',
    
                    },
                    {
                        facility_id : 4,
                        facility_name : 'Soft drink',
    
                    },
                    {
                        facility_id : 5,
                        facility_name : 'Penjemputan di area Pemutaran, Sumberkima atau Penjarakan ke tempat penyeberangan',
    
                    },
                ],
                price_includes : [
                    {
                        include_id : 1,
                        include_name : 'Dive Gear (masker, regulator, BCD, wet suit, weigh belt, fin, booties, 2 botol)'
                    },
                    {
                        include_id : 2,
                        include_name : 'Dive Master'
                    },
                    {
                        include_id : 3,
                        include_name : 'Tiket masuk'
                    },
                    {
                        include_id : 4,
                        include_name : 'Speed Boat'
                    },
                    {
                        include_id : 5,
                        include_name : 'Makan siang'
                    },
                    {
                        include_id : 6,
                        include_name : 'Asuransi'
                    },
                ],
                itineraries : [
                    {
                        itinerary_id : 1,
                        itinerary_day : 'Hari ke-1',
                        itinerary_times : [
                            {
                                time_id : 1,
                                time_hour : '',
                                time_description : '',
                            },
                        ],
                    },
                ],
                galleries : [
                    {
                        gallery_id : 1,
                        gallery_name : '/img/dive08.webp'
                    },
                    {
                        gallery_id : 2,
                        gallery_name : '/img/dive04.webp'
                    },
                    {
                        gallery_id : 3,
                        gallery_name : '/img/dive13.webp'
                    },
                    {
                        gallery_id : 4,
                        gallery_name : '/img/dive11.webp'
                    },
                    {
                        gallery_id : 5,
                        gallery_name : '/img/dive12.webp'
                    },
                ],
                min_pax : 2,
                duration : '7 jam',
                status : true,
                type : false
            },
            {
                id: 2,
                name: 'Snorkeling at Menjangan Island',
                description : 'Nikmati keindahan bawah laut pulau Menjangan dengan ber Snorkeling bersama kami. Menyelami beberapa titik Kawasan yang menakjubkan dan kami akan menunjukan kepada anda taman terumbu karang dengan berbagai jenis ikan dan varietas Laut.',
                trip_plan : 'Mulai dari pelabuhan 8:30 - 9:00 pagi (waktu bisa ditentukan). Perjalanan 25 menit dengan perahu cepat .Durasi waktu snorkeling sekitar 4 jam dengan 2 titik kawasan yang berbeda. Tiba di pulau pemandu akan menjelaskan titik kawasan snorkeling .Setelah snorkeling pertama, anda memiliki waktu untuk beristirahat sambil menikmati kawasan pulau Menjangan.',
                img: '/img/dive06.webp',
                price : 950000,
                facilities : [
                    {
                        facility_id : 1,
                        facility_name : 'Handuk',
                    },
                    {
                        facility_id : 2,
                        facility_name : 'Coffee break (Snack)',
    
                    },
                    {
                        facility_id : 3,
                        facility_name : 'Camera by GoPro',
    
                    },
                    {
                        facility_id : 4,
                        facility_name : 'Soft drink',
    
                    },
                    {
                        facility_id : 5,
                        facility_name : 'Penjemputan di area Pemutaran, Sumberkima atau Penjarakan ke tempat penyeberangan',
    
                    },
                ],
                price_includes : [
                    {
                        include_id : 1,
                        include_name : 'Snorkeling Gear (masker, fin, pelampung)'
                    },
                    {
                        include_id : 2,
                        include_name : 'Snorkeling Guide'
                    },
                    {
                        include_id : 3,
                        include_name : 'Tiket masuk'
                    },
                    {
                        include_id : 4,
                        include_name : 'Speed Boat'
                    },
                    {
                        include_id : 5,
                        include_name : 'Makan siang'
                    },
                    {
                        include_id : 6,
                        include_name : 'Asuransi'
                    },
                ],
                itineraries : [
                    {
                        itinerary_id : 1,
                        itinerary_day : 'Hari ke-1',
                        itinerary_times : [
                            {
                                time_id : 1,
                                time_hour : '',
                                time_description : '',
                            },
                        ],
                    },
                ],
                galleries : [
                    {
                        gallery_id : 1,
                        gallery_name : '/img/dive07.webp'
                    },
                    {
                        gallery_id : 2,
                        gallery_name : '/img/dive06.webp'
                    },
                    {
                        gallery_id : 3,
                        gallery_name : '/img/dive05.webp'
                    },
                    {
                        gallery_id : 4,
                        gallery_name : '/img/dive03.webp'
                    },
                    {
                        gallery_id : 5,
                        gallery_name : '/img/dive15.webp'
                    },
                ],
                min_pax : 2,
                duration : '5 jam',
                status : true,
                type : true
            },
            {
                id: 3,
                name: 'Exotic Camp Days',
                description : 'Bayangkan malam yang penuh bintang, deburan ombak yang menenangkan, dan aroma BBQ yang menggoda di tepi pantai Teluk Brumbun. Dipadu dengan nuansa adventure saat trackking untuk melihat varietas Bali Starling dan Long Black Tail Monkey, dilanjutkan dengan snorkeling di Pulau Menjangan yang eksotis.',
                trip_plan : '',
                img: '/img/beach03.webp',
                price : 2500000,
                facilities : [
                    {
                        facility_id : 1,
                        facility_name : 'Handuk',
                    },
                    {
                        facility_id : 2,
                        facility_name : 'Coffee break (Snack)',
    
                    },
                    {
                        facility_id : 3,
                        facility_name : 'Camera by GoPro',
    
                    },
                    {
                        facility_id : 4,
                        facility_name : 'Soft drink',
    
                    },
                    {
                        facility_id : 5,
                        facility_name : 'Mineral water',
    
                    },
                    {
                        facility_id : 6,
                        facility_name : 'Sunset point',
    
                    },
                    {
                        facility_id : 7,
                        facility_name : 'Penjemputan di area Pemutaran, Sumberkima atau Penjarakan ke tempat penyeberangan',
    
                    },
                ],
                price_includes : [
                    {
                        include_id : 1,
                        include_name : 'Tour Guide'
                    },
                    {
                        include_id : 2,
                        include_name : 'Snorkeling Guide'
                    },
                    {
                        include_id : 3,
                        include_name : 'Tiket masuk'
                    },
                    {
                        include_id : 4,
                        include_name : 'Speed Boat'
                    },
                    {
                        include_id : 5,
                        include_name : 'Makan siang'
                    },
                    {
                        include_id : 6,
                        include_name : 'Asuransi'
                    },
                    {
                        include_id : 7,
                        include_name : 'Akomodasi di tenda'
                    },
                    {
                        include_id : 8,
                        include_name : 'Snorkeling Gear (masker, fin, pelampung)'
                    },
                ],
                itineraries : [
                    {
                        itinerary_id : 1,
                        itinerary_day : 'Hari ke-1',
                        itinerary_times : [
                            {
                                time_id : 1,
                                time_hour : '15:00 – 15:25',
                                time_description : 'Penyeberangan ke Teluk Brumbun (membutuhkan waktu 25 menit)',
                            },
                            {
                                time_id : 2,
                                time_hour : '15:25 – 16:25',
                                time_description : 'Tiba di Teluk Brumbun, trekking singkat untuk melihat Bali Starling dan Long Black Tail Monkey',
                            },
                            {
                                time_id : 3,
                                time_hour : '16:25 – 18:30',
                                time_description : 'Bersantai di tepi pantai, mandi dan bersiap-siap untuk makan malam',
                            },
                            {
                                time_id : 4,
                                time_hour : '18:30 – 21:30',
                                time_description : 'Makan malam BBQ sederhana',
                            },
                            {
                                time_id : 5,
                                time_hour : '21:30',
                                time_description : 'Jam bebas, bermalam di tenda',
                            },
                        ],
                    },
                    {
                        itinerary_id : 2,
                        itinerary_day : 'Hari ke-2',
                        itinerary_times : [
                            {
                                time_id : 1,
                                time_hour : '07:00 – 08:00',
                                time_description : 'Sarapan sederhana di tepi pantai',
                            },
                            {
                                time_id : 2,
                                time_hour : '08:00 – 08:15',
                                time_description : 'Menyebrang ke Pulau Menjangan',
                            },
                            {
                                time_id : 3,
                                time_hour : '08:15 – 11:00',
                                time_description : 'Snorkeling di 2 titik kawasan Pulau Menjangan (termasuk istirahat)',
                            },
                            {
                                time_id : 4,
                                time_hour : '11:00 – 11:25',
                                time_description : 'Kembali ke Pantai Banyuwedang, perjalanan memakan waktu sekitar 25 menit',
                            },
                            {
                                time_id : 5,
                                time_hour : '11:25',
                                time_description : 'Mandi diikuti dengan makan siang set menu Indonesia & mineral water, di Warung Pokmasta di Pantai Banyuwedang. Akhir dari trip',
                            },
                        ],
                    },
                ],
                galleries : [
                    {
                        gallery_id : 1,
                        gallery_name : '/img/beach03.webp'
                    },
                    {
                        gallery_id : 2,
                        gallery_name : '/img/beach04.webp'
                    },
                    {
                        gallery_id : 3,
                        gallery_name : '/img/beach05.webp'
                    },
                    {
                        gallery_id : 4,
                        gallery_name : '/img/beach06.webp'
                    },
                    {
                        gallery_id : 5,
                        gallery_name : '/img/beach10.webp'
                    },
                ],
                min_pax : 2,
                duration : '2 hari 1 malam',
                status : true,
                type : false
            },
            
        ],
        testimonies : [
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
        ],
        slides : [
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
        ]

    }),
})
