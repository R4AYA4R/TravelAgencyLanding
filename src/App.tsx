import Header from "./components/Header";
import SectionService from "./components/SectionService";
import SectionTop from "./components/SectionTop";


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <SectionTop/>
        <SectionService/>
      </main>
    </>
  );
}

export default App;
