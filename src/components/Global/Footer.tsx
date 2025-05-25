'use client'

import { useWebsiteInfo } from "@/hooks/useWebsiteInfo";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    const { data } = useWebsiteInfo();
    const websiteInfo: WebsiteInfo | undefined = data?.data;

    return (
        <footer className="bg-customBlack text-white pt-20 rounded-t-3xl">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Contact Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Contactez-nous</h3>
                    <div className="space-y-5">
                        <div className="flex items-start gap-3">
                            <FaWhatsapp size={28} />
                            <div>
                                <p className="font-semibold">Whatsapp</p>
                                <p className="text-sm text-gray-300">{websiteInfo?.whatsapp_phone_number || "default-number"}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <PhoneCall size={26} />
                            <div>
                                <p className="font-semibold">Appelez-nous</p>
                                <p className="text-sm text-gray-300">{websiteInfo?.contact_phone_number || "default-number"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Liens</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-gray-400 transition">Principale</Link></li>
                        <li><Link href="/categories" className="hover:text-gray-400 transition">Boutique</Link></li>
                    </ul>
                </div>

                {/* Visit Us */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Visitez-nous</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-gray-400 transition">Emplacement</Link></li>
                        <li><Link href="/" className="hover:text-gray-400 transition">Carte</Link></li>
                    </ul>
                </div>

                {/* Logo + Socials */}
                <div className="text-center md:text-left">
                    <div className="w-20 h-20 mx-auto md:mx-0 relative rounded-full overflow-hidden mb-4">
                        <Image src="/logo.jpg" alt="ITECH PRO Logo" fill className="object-cover scale-[1.4]" />
                    </div>
                    <p className="text-sm text-gray-300 mb-4">
                        {websiteInfo?.description ||
                            "ITECH PRO est votre destination de confiance pour les accessoires PC professionnels."}
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Link href={websiteInfo?.facebook_link || "#"} aria-label="Facebook" className="hover:opacity-80">
                            <FaFacebook size={22} />
                        </Link>
                        <Link href={websiteInfo?.instagram_link || "#"} aria-label="Instagram" className="hover:opacity-80">
                            <FaInstagram size={22} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8 mx-6"></div>

            {/* Footer bottom */}
            <div className="text-center text-sm text-gray-400 pb-6">
                &copy; 2025 ITECH PRO. Tous droits réservés.
            </div>
        </footer>
    );
}
