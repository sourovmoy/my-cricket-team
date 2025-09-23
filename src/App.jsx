import "./App.css";
import Banner from "./assets/banner/Banner";
import Navbar from "./assets/navbar/navbar";
function App() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
