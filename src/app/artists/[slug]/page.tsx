import Link from "next/link";
import Image from "next/image";

// Mock data based on real artists (in a real app, fetch from CMS)
const artists = {
    "btob": {
        name: "BTOB",
        role: "Artist",
        img: "/assets/lim_hyunsik_card_1767603489300.png",
        desc: "BTOB(비투비)는 뛰어난 가창력과 감성적인 음악으로 대중의 사랑을 받는 그룹입니다. '그리워하다', '너 없인 안 된다' 등 다수의 히트곡을 보유하고 있습니다.\nBTOB is a representative K-Pop group known for their outstanding vocal skills and emotional ballads.",
        works: ["Wind And Wish", "Be Together", "The Song", "Brother Act."],
        socials: ["Instagram", "Twitter", "YouTube"]
    },
    "jini": {
        name: "JINI",
        role: "Artist",
        img: "/assets/jini_card_1767603447817.png",
        name_kr: "지니",
        desc: "솔로 아티스트로서 독보적인 퍼포먼스와 매력을 선보이는 지니(JINI)입니다. 첫 EP 'An Iron Hand In A Velvet Glove'로 성공적인 데뷔를 알렸습니다.\nJINI is a solo artist with unique charm and performance skills, debuting successfully with 'An Iron Hand In A Velvet Glove'.",
        works: ["An Iron Hand In A Velvet Glove (EP)", "C'mon (Feat. Aminé)"],
        socials: ["Instagram", "TikTok", "YouTube"]
    },
    "lim-hyunsik": {
        name: "LIM HYUNSIK",
        role: "Artist",
        img: "/assets/lim_hyunsik_card_1767603489300.png",
        desc: "비투비의 멤버이자 싱어송라이터 임현식은 깊이 있는 목소리와 뛰어난 작사/작곡 능력으로 '그리워하다' 등 명곡을 탄생시켰습니다. 솔로 앨범 'RENDEZ-VOUS' 등을 통해 아티스트로서의 색깔을 확고히 하고 있습니다.\nLim Hyunsik is a singer-songwriter and member of BTOB, known for his deep, soulful voice and producing hits like 'Missing You'.",
        works: ["The Young Man and the Deep Sea", "RENDEZ-VOUS", "Dear Love"],
        socials: ["Instagram", "YouTube"]
    },
    "nancy": {
        name: "NANCY",
        role: "Artist",
        img: "/assets/nancy_card_1767603456485.png",
        desc: "글로벌한 인기를 자랑하는 낸시(NANCY)는 다채로운 매력과 퍼포먼스로 팬들의 마음을 사로잡고 있습니다.\nNancy is a global artist and performer, captivating fans with her diverse charms and performance.",
        works: ["Coming Soon"],
        socials: ["Instagram"]
    }
};

export default async function ArtistDetail({ params }: { params: { slug: string } }) {
    // Await params for Next.js 15+ compatibility if needed, but safe for 14
    const slug = params.slug;
    const artist = artists[slug as keyof typeof artists] || artists["btob"];

    return (
        <div className="min-h-screen bg-black text-white pt-20">
            <div className="relative h-[60vh] w-full">
                <Image
                    src={artist.img}
                    alt={artist.name}
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 max-w-7xl mx-auto w-full">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">{artist.name}</h1>
                    <p className="text-xl text-gray-300">{artist.role}</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">BIOGRAPHY</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {artist.desc}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">DISCOGRAPHY</h2>
                        <ul className="space-y-4">
                            {artist.works.map((work, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4" />
                                    {work}
                                </li>
                            ))}
                            {artist.works.length === 0 && <li className="text-gray-500">More works coming soon.</li>}
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-white/20 pb-4">SOCIAL</h2>
                        <div className="flex gap-4">
                            {artist.socials.map((social, i) => (
                                <button key={i} className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition">
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 border-t border-white/10 text-center">
                <Link href="/" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    BACK TO HOME
                </Link>
            </div>

        </div>
    );
}
