import Facebook from "@/public/svg/facebook";
import Twitter from "@/public/svg/twitter";
import Whatsapp from "@/public/svg/whatsapp";

const SocialShare = () => {
  const currentUrl = "https://federal-futbol-club-page.pages.dev/"; // Obtiene la URL actual

  return (
    <div className="flex space-x-4 justify-center bg-[#2348a7]">
      <strong>Compartir</strong>
      {/* Botón de compartir en Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <Facebook />
      </a>

      {/* Botón de compartir en Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=Check%20this%20out!`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
      >
        <Twitter />
      </a>

      {/* Botón de compartir en WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700"
      >
        <Whatsapp />
      </a>
    </div>
  );
};

export default SocialShare;
