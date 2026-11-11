/**
 * Charlotte Flower - Global Data Store
 * Terhubung otomatis secara reaktif dengan localStorage untuk Website Publik dan Admin Dashboard.
 */

const DEFAULT_CHARLOTTE_DATA = {
    announcement: {
        enabled: true,
        text: "Spesial Bulan Ini: Dapatkan diskon 10% dengan follow Instagram & TikTok kami",
        code: "@charlotteflower.id"
    },
    general: {
        storeName: "Charlotte Flower",
        tagline: "Your Go-To Modern Artificial Florist in Yogyakarta",
        heroTag: "Florist Artificial Modern Jogja",
        heroTitle: "Rangkaian Bunga Artificial Modern untuk Setiap Momen Berharga",
        heroSubtitle: "Charlotte Flower menghadirkan kreasi floral artificial berstandar tinggi dengan sentuhan Korean & European style. Bunga abadi, elegan, dan siap dikirim hari ini di Yogyakarta.",
        whatsapp: "6282242260047",
        instagram: "@charlotteflower.id",
        instagramUrl: "https://www.instagram.com/charlotteflower.id",
        email: "charlotteflowerid@gmail.com",
        address: "Sumber, Balecatur, Gamping, Sleman, Daerah Istimewa Yogyakarta",
        addressNote: "Area Sumber, Balecatur, Gamping (Dekat Ring Road Barat Jogja)",
        openingWeekday: "08:00 - 21:00 WIB",
        openingWeekend: "08:00 - 22:00 WIB",
        mapUrl: "https://maps.app.goo.gl/FbruK7o3sbdPec736",
        mapEmbedUrl: "https://maps.google.com/maps?q=-7.7985641,110.2943901+(Charlotte+Flower)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
        logoUrl: "gambar/logocharlotte.png",
        heroImages: [
            {
                url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
                title: "Korean Pastel Bouquet",
                tag: "Best Seller"
            },
            {
                url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
                title: "Sunshine Warmth Bouquet",
                tag: "Trending"
            },
            {
                url: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
                title: "Luxury Bloom Box & Stand",
                tag: "Premium"
            }
        ]
    },
    about: {
        title: "Tentang Charlotte Flower",
        subtitle: "Keindahan Abadi dengan Sentuhan Seni Floral Kontemporer",
        desc1: "Charlotte Flower adalah butik bunga artificial modern di Yogyakarta yang mendedikasikan karya seni untuk merayakan setiap rasa dan cerita. Berbeda dari bunga segar yang layu dalam beberapa hari, rangkaian premium artificial flower kami dirancang agar tetap mekar anggun selamanya sebagai memorabilia berharga.",
        desc2: "Setiap kuntum dipilih dari material kain dan sutra bertekstur alami (real-touch), dirangkai secara teliti oleh perangkai bunga berpengalaman menggunakan teknik Korean wrapping yang minimalis dan mewah.",
        vision: "Menjadi destinasi florist artificial pilihan utama di Yogyakarta dan sekitarnya yang dipercaya menghadirkan kebahagiaan di setiap wisuda, ulang tahun, pernikahan, dan peresmian bisnis.",
        mission: "Menghadirkan rangkaian bunga artificial berkualitas tinggi, layanan ramah, pengerjaan rapi, dan pengiriman tepat waktu di seluruh area Jogja.",
        aboutImage: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80"
    },
    categories: [
        { id: "all", name: "Semua Koleksi" },
        { id: "buket", name: "Hand Bouquet" },
        { id: "box-vas", name: "Bloom Box & Vas" },
        { id: "wisuda", name: "Buket Wisuda" },
        { id: "money", name: "Money Bouquet" },
        { id: "standing", name: "Standing Flower" }
    ],
    products: [
        {
            id: "1",
            name: "Blushing Romance Bouquet",
            category: "buket",
            categoryLabel: "Hand Bouquet",
            price: 285000,
            badge: "Best Seller",
            desc: "Rangkaian mawar pink pastel real-touch dipadu dengan baby breath putih dan hydrangea lembut. Dibungkus kertas premium Korean matte warna peach rose.",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
            specs: ["Bunga: Premium Silk Rose & Hydrangea", "Wrapping: Korean Waterproof Matte Paper", "Tinggi: ± 45 cm", "Bonus: Kartu Ucapan Custom & Pita Satin"]
        },
        {
            id: "2",
            name: "Emerald Grace Table Arrangement",
            category: "box-vas",
            categoryLabel: "Bloom Box & Vas",
            price: 365000,
            badge: "Signature",
            desc: "Rangkaian meja bernuansa emerald dan ivory mewah dalam pot keramik matte bertekstur. Sangat pas untuk dekorasi ruang tamu, meja kerja, atau hadiah grand opening.",
            image: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=800&q=80",
            specs: ["Vas: Keramik Eksklusif Forest Green", "Bunga: Rose, Eucalyptus & White Peony", "Dimensi: 35 x 30 cm", "Tahan selamanya tanpa perlu disiram"]
        },
        {
            id: "3",
            name: "Sunny Graduation Special",
            category: "wisuda",
            categoryLabel: "Buket Wisuda",
            price: 245000,
            badge: "Wisuda Jogja",
            desc: "Bunga matahari artificial cerah berpadu dengan eustoma dan chamomile. Hadiah sempurna untuk merayakan momen kelulusan di kampus tercinta di Yogyakarta.",
            image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
            specs: ["Bunga: Sunflower Cerah & Chamomile", "Aksesoris: Boneka Wisuda Mini / Selempang", "Pita: Double Satin Gold & Emerald", "Cocok untuk foto outdoor wisuda"]
        },
        {
            id: "4",
            name: "Royal Crimson Velvet",
            category: "buket",
            categoryLabel: "Hand Bouquet",
            price: 450000,
            badge: "Luxury",
            desc: "24 tangkai mawar merah beludru bergradasi elegan, dihiasi daun silver dollar dan pita satin panjang. Pilihan romantis untuk anniversary dan ungkapan cinta tulus.",
            image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
            specs: ["Bunga: 24 Velvet Roses Artificial Grade A", "Wrapping: Premium Jet Black & Gold Accent", "Ukuran: Jumbo Bouquet (± 55 cm)", "Termasuk kartu ucapan amplop lilin"]
        },
        {
            id: "5",
            name: "Pastel Dream Bloom Box",
            category: "box-vas",
            categoryLabel: "Bloom Box & Vas",
            price: 320000,
            badge: "Trending",
            desc: "Kotak silinder elegan berisi perpaduan carnation peach, mawar putih, dan lavender artificial. Lengkap dengan akrilik tulisan selamat yang bisa dicustom.",
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
            specs: ["Box: Hardbox Mewah dengan Pita Foil", "Isi: Anyelir, Peony & Mawar Pastel", "Bisa tambah topper akrilik custom nama", "Awet dan bebas debu dengan perawatan mudah"]
        },
        {
            id: "6",
            name: "Golden Fortune Money Bouquet",
            category: "money",
            categoryLabel: "Money Bouquet",
            price: 195000,
            badge: "Custom Order",
            desc: "Jasa perangkaian buket uang rapi dan aman dengan 15-30 lembar slot uang (uang asli disuplai sesuai pesanan) berbingkai bunga artificial mawar putih & daun emas.",
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
            specs: ["Plastik Pelindung: Uang tidak distapler/dilem aman 100%", "Bunga Pemanis: Mawar & Daun Emas", "Wrapping: Emerald & Broken White", "Harga tertera adalah biaya jasa dan aksesoris"]
        },
        {
            id: "7",
            name: "Modern Grandeur Standing Flower",
            category: "standing",
            categoryLabel: "Standing Flower",
            price: 650000,
            badge: "Grand Opening",
            desc: "Standing flower modern dengan kaki tripod kayu natural atau besi hollow elegan. Sangat diminati untuk ucapan selamat pembukaan toko, kantor, atau pernikahan.",
            image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
            specs: ["Penyangga: Tripod Kayu Natural Tinggi 120 cm", "Bunga: Rangkaian Bunga Artificial Penuh Mewah", "Papan Banner: Banner Digital Custom Desain & Logo", "Bisa dipajang selamanya di dalam ruangan"]
        },
        {
            id: "8",
            name: "White Serenity Bridal Bouquet",
            category: "buket",
            categoryLabel: "Hand Bouquet",
            price: 380000,
            badge: "Wedding",
            desc: "Buket pengantin minimalis bernuansa putih bersih, calla lily, dan mawar inggris. Ringan digenggam dan abadi untuk disimpan sebagai kenangan hari pernikahan terindah.",
            image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
            specs: ["Bunga: Calla Lily & David Austin Rose", "Gagang: Balutan Pita Renda dan Mutiara", "Tahan lempar buket dan tidak akan layu", "Ideal untuk foto prewedding & akad nikah"]
        }
    ],
    articles: [
        {
            id: "1",
            title: "Panduan Lengkap Memilih Buket Wisuda di Jogja: Bunga Segar vs Bunga Artificial",
            slug: "panduan-buket-wisuda-jogja-segar-vs-artificial",
            category: "Tips Wisuda",
            date: "10 November 2026",
            author: "Charlotte Editorial Team",
            readTime: "4 menit baca",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
            summary: "Momen wisuda di kampus-kampus Yogyakarta seperti UGM, UNY, UPN, UII, dan UMY selalu penuh sukacita. Simak keunggulan bunga artificial yang awet dan tak khawatir layu saat sesi foto wisuda seharian.",
            content: `
                <p class="mb-4">Musim wisuda di Yogyakarta selalu menjadi momen yang dinanti-nanti. Ribuan mahasiswa dari berbagai kampus ternama merayakan pencapaian setelah bertahun-tahun menempuh studi. Salah satu tradisi yang tak pernah ketinggalan adalah memberikan hadiah buket bunga.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">Mengapa Bunga Artificial Semakin Populer untuk Wisuda?</h4>
                <p class="mb-4">Berbeda dengan bunga segar yang mudah layu terutama saat dibawa berpanas-panasan di luar ruangan selama prosesi dan foto di kampus, <strong>bunga artificial</strong> menawarkan berbagai keuntungan nyata:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Tidak Khawatir Layu:</strong> Bunga tetap segar dan mekar sempurna dari pagi hingga sore bahkan malam hari saat pesta syukuran wisuda.</li>
                    <li><strong>Bisa Jadi Kenang-kenangan Abadi:</strong> Setelah acara selesai, buket bisa dipajang di kamar kos, meja belajar, atau rumah tanpa perlu perawatan rumit.</li>
                    <li><strong>Bebas Alergi & Bersih:</strong> Tidak mengandung serbuk sari (pollen) yang memicu bersin atau noda air pada pakaian kebaya/toga.</li>
                </ul>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">Tips Memilih Warna Buket</h4>
                <p class="mb-4">Sesuaikan warna buket dengan warna fakultas atau selendang toga wisudawan. Warna pastel, emerald green, dan kuning hangat dari bunga matahari adalah pilihan yang paling fotogenik saat dipadukan dengan jubah wisuda hitam.</p>
            `
        },
        {
            id: "2",
            title: "Cara Merawat Rangkaian Bunga Artificial Agar Selalu Bersih & Berkilau Selamanya",
            slug: "cara-merawat-rangkaian-bunga-artificial",
            category: "Floral Care",
            date: "5 November 2026",
            author: "Charlotte Floral Designer",
            readTime: "3 menit baca",
            image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
            summary: "Bunga tiruan berkualitas tinggi tidak butuh air atau sinar matahari, namun butuh sedikit perawatan agar bebas debu. Berikut tips praktis merawat bunga hias artificial Anda.",
            content: `
                <p class="mb-4">Kelebihan utama dari bunga artificial premium dari Charlotte Flower adalah ketahanannya yang luar biasa. Meski begitu, seiring berjalannya waktu, debu halus di dalam ruangan bisa menempel pada kelopak bunga.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">1. Gunakan Kuas Lembut atau Hair Dryer</h4>
                <p class="mb-4">Gunakan kuas rias berbulu halus atau hair dryer dengan setelan angin dingin (cool) dan kecepatan rendah untuk meniup debu yang terselip di antara kelopak bunga.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">2. Bersihkan dengan Kain Mikrofiber Lembap</h4>
                <p class="mb-4">Untuk bunga dengan material real-touch latex atau kain sutra, Anda bisa menyeka permukaannya secara perlahan menggunakan kain mikrofiber yang sedikit dibasahi air bersih.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">3. Hindarkan dari Paparan Sinar Matahari Terik Langsung</h4>
                <p class="mb-4">Meskipun awet, menempatkan bunga artificial di tempat teduh dalam ruangan akan menjaga warna alaminya tetap cemerlang selama bertahun-tahun tanpa memudar.</p>
            `
        },
        {
            id: "3",
            title: "5 Makna Warna Mawar dalam Rangkaian Bunga untuk Ungkapan Perasaan Terbaik",
            slug: "makna-warna-mawar-rangkaian-bunga",
            category: "Inspirasi",
            date: "28 Oktober 2026",
            author: "Charlotte Editorial Team",
            readTime: "4 menit baca",
            image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
            summary: "Setiap warna mawar menyampaikan pesan rahasia yang mendalam. Kenali arti warna mawar merah, merah muda, putih, hingga kuning sebelum memesan buket spesial Anda.",
            content: `
                <p class="mb-4">Bunga mawar telah menjadi simbol universal ungkapan emosi manusia selama berabad-abad. Memilih warna mawar yang tepat akan melipatgandakan kesan dan makna yang diterima oleh orang terkasih.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">1. Mawar Merah (Red Rose)</h4>
                <p class="mb-4">Simbol klasik dari cinta sejati, gairah, dan komitmen mendalam. Paling cocok untuk kado hari jadi (anniversary), valentine, atau lamaran romantis.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">2. Mawar Soft Pink</h4>
                <p class="mb-4">Menggambarkan keanggunan, rasa terima kasih, kekaguman, dan ketulusan. Sangat pas untuk sahabat dekat, hari ibu, atau ungkapan apresiasi kerja keras.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">3. Mawar Putih (White Rose)</h4>
                <p class="mb-4">Melambangkan kemurnian, ketulusan awal yang baru, dan kehormatan. Sering dipilih untuk buket pernikahan atau momen spiritual yang sakral.</p>
            `
        },
        {
            id: "4",
            title: "Ide Hadiah Money Bouquet Kreatif untuk Ulang Tahun & Perayaan Istimewa di Jogja",
            slug: "ide-hadiah-money-bouquet-kreatif-jogja",
            category: "Tren Hadiah",
            date: "18 Oktober 2026",
            author: "Charlotte Floral Designer",
            readTime: "3 menit baca",
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
            summary: "Money bouquet kini menjadi salah satu tren kado paling diminati di Jogja. Pelajari tips memesan buket uang yang estetik, rapi, dan tetap aman tanpa merusak lembaran uang.",
            content: `
                <p class="mb-4">Memberikan uang tunai dalam amplop biasa terkadang terasa kurang berkesan. Inilah sebabnya <strong>Money Bouquet</strong> kini menjadi primadona kado ulang tahun, hadiah pernikahan teman, hingga wisuda di Yogyakarta.</p>
                <h4 class="font-bold text-lg text-stone-900 mt-6 mb-2">Keamanan Uang adalah Prioritas Utama</h4>
                <p class="mb-4">Di Charlotte Flower, kami menggunakan teknik pengemasan tanpa merusak uang sedikit pun. Setiap lembar uang dimasukkan ke dalam plastik pelindung khusus berstandar uang kertas sebelum dirangkai, tanpa distapler, tanpa lem, dan tanpa selotip yang menempel pada uang.</p>
                <p class="mb-4">Dipadukan dengan bunga artificial bertema emerald atau rose gold, buket uang Anda tampil megah, anggun, dan tentu saja sangat disukai oleh siapapun penerimanya!</p>
            `
        }
    ]
};

const STORAGE_KEY = "charlotte_flower_data_v2";
const PIN_KEY = "charlotte_admin_pin";
const DEFAULT_PIN = "admin123";

/**
 * Mengambil data situs aktif dari localStorage atau default
 */
function getCharlotteData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return {
                ...DEFAULT_CHARLOTTE_DATA,
                ...parsed,
                announcement: { ...DEFAULT_CHARLOTTE_DATA.announcement, ...(parsed.announcement || {}) },
                general: { ...DEFAULT_CHARLOTTE_DATA.general, ...(parsed.general || {}) },
                about: { ...DEFAULT_CHARLOTTE_DATA.about, ...(parsed.about || {}) },
                categories: parsed.categories && parsed.categories.length > 0 ? parsed.categories : DEFAULT_CHARLOTTE_DATA.categories,
                products: parsed.products && parsed.products.length > 0 ? parsed.products : DEFAULT_CHARLOTTE_DATA.products,
                articles: parsed.articles && parsed.articles.length > 0 ? parsed.articles : DEFAULT_CHARLOTTE_DATA.articles
            };
        }
    } catch (e) {
        console.error("Gagal membaca localStorage", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_CHARLOTTE_DATA));
}

/**
 * Menyimpan data situs ke localStorage
 */
function saveCharlotteData(newData) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        return true;
    } catch (e) {
        console.error("Gagal menyimpan ke localStorage", e);
        return false;
    }
}

/**
 * Mengembalikan data ke kondisi awal / default
 */
function resetCharlotteData() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Format angka ke format mata uang Rupiah
 */
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}