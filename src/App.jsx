import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </main>
    </ChakraProvider>
  );
}

export default App;