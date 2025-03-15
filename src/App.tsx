import FooterSection from './components/footer-section';
import HeroSection from './components/hero-section';
import TeamSection from './components/team-section';

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <main className="flex-1 relative z-10 pt-14 sm:pt-16 pb-96 sm:pb-96">
        <section>
          <HeroSection />
          <TeamSection />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default App;
