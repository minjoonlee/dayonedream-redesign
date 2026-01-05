import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">DAY ONE DREAM</h3>
                    <p className="text-gray-400 text-sm">
                        Global K-Pop Entertainment<br />
                        Creating the future of music and culture.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-300">COMPANY</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/about" className="hover:text-white transition">Vision</Link></li>
                        <li><Link href="/business" className="hover:text-white transition">Business</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-300">ARTISTS</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>BTOB</li>
                        <li>JINI</li>
                        <li>LIM HYUNSIK</li>
                        <li>NANCY</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-300">SOCIAL</h4>
                    <div className="flex gap-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition">Instagram</a>
                        <a href="#" className="hover:text-white transition">YouTube</a>
                        <a href="#" className="hover:text-white transition">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} DAY ONE DREAM. All rights reserved.
            </div>
        </footer>
    );
}
