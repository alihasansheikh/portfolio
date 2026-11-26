import { copy } from "@/data/copy";
import Preloader from "@/components/Preloader";
import SiteMenu from "@/components/SiteMenu";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Work from "@/components/Work";
import HowItWorks from "@/components/HowItWorks";
import WorkingWithMe from "@/components/WorkingWithMe";
import About from "@/components/About";
import Engineers from "@/components/Engineers";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import MotionRoot from "@/components/MotionRoot";

export default function Home() {
  return (
    <MotionRoot>
      <Preloader greetings={copy.intro.greetings} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <SiteMenu header={copy.header} nav={copy.nav} />
      <div id="top" />
      <Hero hero={copy.hero} header={copy.header} nav={copy.nav} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Statement copy={copy.statement} />
        <Services copy={copy.services} />
        <Work copy={copy.work} />
        <HowItWorks copy={copy.how_it_works} />
        <WorkingWithMe copy={copy.working_with_me} agencies={copy.agencies} />
        <About copy={copy.about} />
        <Engineers copy={copy.engineers} />
        <Faq copy={copy.faq} />
        {/* white edge curving down into the dark contact section */}
        <div aria-hidden className="relative z-[1] h-16 rounded-b-[50%_100%] bg-paper sm:h-[120px]" />
        <ContactSection copy={copy.contact} />
      </main>
      <SiteFooter copy={copy.footer} />
    </MotionRoot>
  );
}
