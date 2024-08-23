import HeaderComponent from "@/components/components-ui/header";
import SectionPrincipal from "@/components/components-ui/section-principal";
import SectionNextMatch from "@/components/components-ui/section-next-match";
import SectionHistoryTeam from "@/components/components-ui/section-history-team";
import SectionLegendaryPlayers from "@/components/components-ui/section-legendary-players";
import SectionChampionships from "@/components/components-ui/section-championships";
import SectionSponsors from "@/components/components-ui/section-sponsors";
import SectionSocialNetworks from "@/components/components-ui/section-social-networks";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <SectionPrincipal />
        <SectionNextMatch />
        <SectionHistoryTeam />
        {/*<SectionLegendaryPlayers />*/}
        <SectionChampionships />
        <SectionSponsors />
        <SectionSocialNetworks />
      </main>
    </>
  );
};

export default HomePage;
