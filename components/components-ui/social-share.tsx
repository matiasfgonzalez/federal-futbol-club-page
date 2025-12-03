"use client";
import Facebook from "@/public/svg/facebook";
import Twitter from "@/public/svg/twitter";
import Whatsapp from "@/public/svg/whatsapp";
import { Share2 } from "lucide-react";

const SocialShare = () => {
  const currentUrl = "https://federal-futbol-club-page.pages.dev/";

  return (
    <div className="bg-gradient-to-r from-[#1b2f62] via-[#1e3570] to-[#1b2f62] py-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Label */}
          <div className="flex items-center gap-2 text-white/80">
            <Share2 className="w-4 h-4 text-amber-400" />
            <span className="font-medium text-sm">Compartir página</span>
          </div>

          {/* Social Buttons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
              aria-label="Compartir en Facebook"
            >
              <Facebook />
            </a>

            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                currentUrl
              )}&text=Mirá%20la%20página%20del%20Federal%20Futbol%20Club!`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 bg-white/10 hover:bg-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
              aria-label="Compartir en Twitter"
            >
              <Twitter />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=Mirá%20la%20página%20del%20Federal%20Futbol%20Club!%20${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 bg-white/10 hover:bg-green-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
              aria-label="Compartir en WhatsApp"
            >
              <Whatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
