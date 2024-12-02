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
                        itinerary_day : '',
                        itinerary_times : [
                            {
                                time_id : 1,
                                time_hour : '',
                                time_description : '',
                            },
                        ],
                    },
                ],
                activities : [
                    {
                        activities_id : 1,
                        activities_name : '',
                        activities_list : [
                            {
                                act_id : 1,
                                act_name : ''
                            },
                        ]
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
                        itinerary_day : '',
                        itinerary_times : [
                            {
                                time_id : 1,
                                time_hour : '',
                                time_description : '',
                            },
                        ],
                    },
                ],
                activities : [
                    {
                        activities_id : 1,
                        activities_name : '',
                        activities_list : [
                            {
                                act_id : 1,
                                act_name : ''
                            },
                        ]
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
                type : false
            },
            {
                id: 3,
                name: 'Exotic Camp at Gili Island',
                description : 'Bayangkan malam yang penuh bintang, deburan ombak yang menenangkan, dan aroma BBQ yang menggoda di tepi pantai Pulau Gili. Dipadu dengan nuansa adventure saat snorkeling di Pulau Menjangan yang eksotis.',
                trip_plan : '',
                img: '/img/camp01.webp',
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
                                time_hour : '16:20 – 16:25',
                                time_description : 'Penyeberangan ke Pulau Gili (membutuhkan waktu 5 menit)',
                            },
                            {
                                time_id : 2,
                                time_hour : '16:25 – 18:30',
                                time_description : 'Bersantai di tepi pantai, mandi dan bersiap-siap untuk makan malam',
                            },
                            {
                                time_id : 3,
                                time_hour : '18:30 – 21:30',
                                time_description : 'Makan malam BBQ sederhana',
                            },
                            {
                                time_id : 4,
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
                activities : [
                    {
                        activities_id : 1,
                        activities_name : '',
                        activities_list : [
                            {
                                act_id : 1,
                                act_name : ''
                            },
                        ]
                    },
                ],
                galleries : [
                    {
                        gallery_id : 1,
                        gallery_name : '/img/camp01.webp'
                    },
                    {
                        gallery_id : 2,
                        gallery_name : '/img/camp02.webp'
                    },
                    {
                        gallery_id : 3,
                        gallery_name : '/img/camp04.webp'
                    },
                    {
                        gallery_id : 4,
                        gallery_name : '/img/camp03.webp'
                    },
                    {
                        gallery_id : 5,
                        gallery_name : '/img/camp05.webp'
                    },
                ],
                min_pax : 2,
                duration : '2 hari 1 malam',
                status : true,
                type : false
            },
            {
                id: 4,
                name: 'Balinese Cooking Experience',
                description : 'Aktivitas kelas memasak Bali yang mendetail dapat menjadi pengalaman budaya yang kaya, menawarkan peserta kesempatan untuk mengeksplorasi masakan tradisional Bali dan teknik kulinernya. Kegiatan ini tidak hanya mengajari peserta cara memasak masakan tradisional Bali, namun juga memberikan pemahaman lebih dalam mengenai budaya dan tradisi Bali.',
                trip_plan : '',
                img: '/img/cook01.webp',
                price : 650000,
                facilities : [
                    {
                        facility_id : 1,
                        facility_name : 'homade hot tea (herbs tea)',
                    },
                    {
                        facility_id : 2,
                        facility_name : 'Soup ingredients',
    
                    },
                    {
                        facility_id : 3,
                        facility_name : 'Main Course ingredients',
    
                    },
                    {
                        facility_id : 4,
                        facility_name : 'Side Dishes ingredients',
    
                    },
                    {
                        facility_id : 5,
                        facility_name : 'Dessert ingredients',
    
                    },
                ],
                price_includes : [
                    {
                        include_id : 1,
                        include_name : 'Cooking recipes'
                    },
                    {
                        include_id : 2,
                        include_name : 'Cooking Chef Instructor'
                    },
                    {
                        include_id : 3,
                        include_name : 'Cooking Venue'
                    },
                    {
                        include_id : 4,
                        include_name : 'Dine in Venue'
                    },
                ],
                itineraries : [
                    {
                        itinerary_id : 1,
                        itinerary_day : '',
                        itinerary_times : [
                            {
                                time_id : 1,
                                time_hour : '',
                                time_description : '',
                            },
                        ],
                    },
                ],
                activities : [
                    {
                        activities_id : 1,
                        activities_name : 'Welcome & Introduction',
                        activities_list : [
                            {
                                act_id : 1,
                                act_name : 'Para tamu disambut dengan teh panas buatan sendiri yang menyegarkan (teh herbal).'
                            },
                            {
                                act_id : 2,
                                act_name : 'Instruktur memperkenalkan diri, memberikan gambaran kegiatan hari itu, dan memberikan pengenalan singkat tentang masakan Bali, sejarahnya, dan pengaruhnya dalam budaya Bali.'
                            },
                        ]
                    },
                    {
                        activities_id : 2,
                        activities_name : 'Cooking Preparation',
                        activities_list : [
                            {
                                act_id : 1,
                                act_name : 'Menuju ke tempat memasak bersama instruktur.'
                            },
                            {
                                act_id : 2,
                                act_name : 'Instruktur memperkenalkan masakan yang akan disiapkan, menjelaskan bahan-bahannya, dan mendemonstrasikan teknik dasar persiapan seperti mencincang, menggiling bumbu dengan lesung dan alu.'
                            },
                            {
                                act_id : 3,
                                act_name : 'Bersama didampingi instruktur membuat racikan bumbu tradisional yang dikenal dengan *Bumbu Bali*.'
                            },
                        ]
                    },
                    {
                        activities_id : 3,
                        activities_name : 'Cooking the Dishes',
                        activities_list : [
                            {
                                act_id : 1,
                                act_name : 'Peserta memasak sop tradisional seperti jukut be Pasih dengan saus bawang jahe.'
                            },
                            {
                                act_id : 2,
                                act_name : 'Peserta memasak hidangan utama, seperti Sate Lilit** (sate ikan atau ayam cincang yang dililitkan pada batang kelapa).'
                            },
                            {
                                act_id : 3,
                                act_name : 'Peserta memasak hidangan pendamping seperti *Urab* (salad sayuran kukus dengan kelapa parut dan rempah-rempah) atau *Sambal Matah* (hidangan bawang merah dan serai mentah pedas).'
                            },
                            {
                                act_id : 4,
                                act_name : 'Peserta memasak hidangan penutup tradisional Bali seperti *Dadar Gulung* (crepes pandan hijau yang diisi kelapa dan gula palem) atau *Klepon* (kue ketan diisi gula palem dan dilapisi kelapa parut).'
                            },
                        ]
                    },
                    {
                        activities_id : 4,
                        activities_name : 'Enjoying the Meal',
                        activities_list : [
                            {
                                act_id : 1,
                                act_name : 'Setelah proses memasak selesai, peserta duduk bersama menikmati makanan yang telah mereka siapkan.'
                            },
                            {
                                act_id : 2,
                                act_name : 'Instruktur berbagi lebih banyak tentang etika makan di Bali dan peserta didorong untuk berbagi pengalaman mereka.'
                            },
                        ]
                    },
                ],
                galleries : [
                    {
                        gallery_id : 1,
                        gallery_name : '/img/cook02.webp'
                    },
                    {
                        gallery_id : 2,
                        gallery_name : '/img/cook03.webp'
                    },
                    {
                        gallery_id : 3,
                        gallery_name : '/img/cook04.webp'
                    },
                    {
                        gallery_id : 4,
                        gallery_name : '/img/cook01.webp'
                    },
                    {
                        gallery_id : 5,
                        gallery_name : '/img/cook05.webp'
                    },
                ],
                min_pax : 2,
                duration : '3 jam',
                status : false,
                type : true
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
                name: '/img/camp02.webp'
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
                name: '/img/cook04.webp'
            },
        ]

    }),
})
