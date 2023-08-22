import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-3/4 flex justify-center m-5">
          <Grid />
        </div>
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;
