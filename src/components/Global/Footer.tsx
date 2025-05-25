'use client'

import { useWebsiteInfo } from "@/hooks/useWebsiteInfo";
import { PhoneCall, MapPin, Clock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    const { data } = useWebsiteInfo();
    const websiteInfo: WebsiteInfo | undefined = data?.data;
    const brandColor = "#c20b19";

    return (
        <footer className="bg-gray-900 text-white pt-20 rounded-t-3xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40" style={{ backgroundColor: brandColor }}></div>
                <div className="absolute bottom-10 right-10 w-60 h-60" style={{ backgroundColor: brandColor }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {/* Logo + About */}
                <div className="space-y-6">
                    <div className="w-24 h-24 relative rounded-full overflow-hidden border-2" style={{ borderColor: brandColor }}>
                        <Image 
                            src="/logo.jpg" 
                            alt="ITECH PRO Logo" 
                            fill 
                            className="object-cover" 
                        />
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: brandColor }}>
                        ITECH PRO
                    </h2>
                    <p className="text-gray-300">
                        {websiteInfo?.description ||
                            "Votre destination premium pour les accessoires PC et solutions technologiques de haute performance."}
                    </p>
                    <div className="flex gap-4">
                        <Link 
                            href={websiteInfo?.facebook_link || "#"} 
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#c20b19] transition-all hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={18} />
                        </Link>
                        <Link 
                            href={websiteInfo?.instagram_link || "#"} 
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#c20b19] transition-all hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={18} />
                        </Link>
                        <Link 
                            href="#" 
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#c20b19] transition-all hover:scale-110"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={18} />
                        </Link>
                        <Link 
                            href="#" 
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#c20b19] transition-all hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-6 relative inline-block">
                        Liens Rapides
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5" style={{ backgroundColor: brandColor }}></span>
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link 
                                href="/" 
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                            >
                                <span className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: brandColor }}></span>
                                Principale
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/categories" 
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                            >
                                <span className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: brandColor }}></span>
                                Boutique
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/" 
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                            >
                                <span className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: brandColor }}></span>
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/" 
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                            >
                                <span className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: brandColor }}></span>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-6 relative inline-block">
                        Contact
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5" style={{ backgroundColor: brandColor }}></span>
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="p-2 bg-gray-800 rounded-lg" style={{ color: brandColor }}>
                                <PhoneCall size={18} />
                            </div>
                            <div>
                                <p className="font-medium">{websiteInfo?.contact_phone_number || "+212 6XX XXX XXX"}</p>
                                <p className="text-sm text-gray-400">Lun-Ven, 9h-18h</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="p-2 bg-gray-800 rounded-lg" style={{ color: brandColor }}>
                                <FaWhatsapp size={18} />
                            </div>
                            <div>
                                <p className="font-medium">{websiteInfo?.whatsapp_phone_number || "+212 6XX XXX XXX"}</p>
                                <p className="text-sm text-gray-400">Support 24/7</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="p-2 bg-gray-800 rounded-lg" style={{ color: brandColor }}>
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="font-medium">contact@itechpro.ma</p>
                                <p className="text-sm text-gray-400">Réponse sous 24h</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Location */}
                <div>
                    <h3 className="text-xl font-bold mb-6 relative inline-block">
                        Localisation
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5" style={{ backgroundColor: brandColor }}></span>
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-gray-800 rounded-lg" style={{ color: brandColor }}>
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="font-medium">123 Rue Technologie</p>
                                <p className="text-sm text-gray-400">Casablanca, Maroc</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-gray-800 rounded-lg" style={{ color: brandColor }}>
                                <Clock size={18} />
                            </div>
                            <div>
                                <p className="font-medium">Heures d'ouverture</p>
                                <p className="text-sm text-gray-400">Lun-Sam: 9h-19h</p>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                        className="mt-6 px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                        style={{ backgroundColor: brandColor }}
                    >
                        <MapPin size={16} />
                        Voir sur la carte
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="border-t border-gray-700 my-12"></div>
            </div>

            {/* Footer bottom */}
            <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm relative z-10">
                <div>
                    &copy; {new Date().getFullYear()} ITECH PRO. Tous droits réservés.
                </div>
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-white transition">
                        Politique de confidentialité
                    </Link>
                    <Link href="/" className="hover:text-white transition">
                        Conditions d'utilisation
                    </Link>
                    <Link href="/" className="hover:text-white transition">
                        Préférences cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}