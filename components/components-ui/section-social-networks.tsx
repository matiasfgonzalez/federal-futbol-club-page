import { Button } from "@/components/ui/button";
import Instagram from "@/public/svg/instagram";
import Youtube from "@/public/svg/youtube";
import Facebook from "@/public/svg/facebook";
import Twitter from "@/public/svg/twitter";

const SectionSocialNetworks = () => {
  return (
    <section id="social-media" className="bg-[#2348a7] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Síguenos en Redes Sociales
        </h2>
        <div className="flex justify-center space-x-6">
          {/*<Button
            variant="ghost"
            size="lg"
            className="hover:bg-[#1b2f62] transition-colors duration-300"
          >
            <a
              href="https://www.facebook.com/fcbarcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Facebook />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>*/}
          {/*<Button
            variant="ghost"
            size="lg"
            className="hover:bg-[#1b2f62] transition-colors duration-300"
          >
            <a
              href="https://twitter.com/FCBarcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Twitter />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>*/}
          <Button
            variant="ghost"
            size="lg"
            className="hover:bg-[#1b2f62] transition-colors duration-300"
          >
            <a
              href="https://www.instagram.com/federal_futbol/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
          {/*<Button
            variant="ghost"
            size="lg"
            className="hover:bg-[#1b2f62] transition-colors duration-300"
          >
            <a
              href="https://www.youtube.com/user/fcbarcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Youtube />
              <span className="sr-only">YouTube</span>
            </a>
          </Button>*/}
        </div>
      </div>
    </section>
  );
};

export default SectionSocialNetworks;
