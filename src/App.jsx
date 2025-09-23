import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/banner/Banner";
import Navbar from "./assets/navbar/navbar";
import Card from "./cards/card";
import Container from "./Container";
import Footer from "./footer/footer";
import Selected from "./cards/Selected";

const players = fetch("/public/players.json").then((res) => res.json());
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Container>
        <Banner></Banner>
      </Container>
      <Container>
        <div className="md:flex items-center justify-between my-10">
          <div>
            <h3 className="text-2xl font-bold text-center md:text-left">
              {toggle ? "Available Players" : "Selected Player"}
            </h3>
          </div>
          <div className="items-center text-center mt-10 md:my-0">
            <button
              onClick={() => setToggle(true)}
              className={`btn mb-10  font-semibold rounded-l-2xl hover:scale-[1.03] ${
                toggle === true ? "bg-[#E7FE29] text-black" : "text-white"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`btn mb-10  font-semibold rounded-r-2xl hover:scale-[1.03] ${
                toggle === false ? "bg-[#E7FE29] text-black" : "text-white"
              }`}
            >
              Selected(<span>0</span>)
            </button>
          </div>
        </div>
      </Container>
      {toggle === true ? (
        <Container>
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <Card players={players}></Card>
          </Suspense>
        </Container>
      ) : (
        <Container>
          <Selected></Selected>
        </Container>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
