import ThemeProvider from './context/ThemeProvider';
import { Contact, Home, Projects, Skills } from './pages';

function App() {
  return (
    <>
      <ThemeProvider>
        <main>
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
