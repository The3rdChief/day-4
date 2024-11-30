import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="bg-background font-neueMontreal pt-10 min-h-dvh space-y-20">
        <Header />
        <Hero />
        <Products />
      </div>
    </>
  );
}

export default App;
