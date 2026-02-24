import { Navigation, Hero, About, Skills, Projects, Contact } from '@/components/portfolio';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
