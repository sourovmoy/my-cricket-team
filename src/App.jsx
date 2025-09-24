import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/banner/Banner";
import Navbar from "./assets/navbar/navbar";
import Card from "./cards/card";
import Container from "./Container";
import Footer from "./footer/footer";
import Selected from "./cards/Selected";

const players = fetch("/players.json").then((res) => res.json());
function App() {
  const [toggle, setToggle] = useState(true);
  const [amount, setAmount] = useState(600000000);
  const [choosePlayer, setChoosePlayer] = useState([]);

  const removeBtn = (p) => {
    const filteredPlayer = choosePlayer.filter((player) => player.id !== p.id);
    setChoosePlayer(filteredPlayer);
  };

  return (
    <>
      <Container>
        <Navbar amount={amount}></Navbar>
      </Container>
      <Container>
        <Banner></Banner>
      </Container>
      <Container>
        <div className="md:flex items-center justify-between my-10">
          <div>
            <h3 className="text-2xl font-bold text-center md:text-left">
              {toggle
                ? "Available Players"
                : `Selected Player ${choosePlayer.length}/6`}
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
              Selected(<span>{choosePlayer.length}</span>)
            </button>
          </div>
        </div>
      </Container>
      {toggle === true ? (
        <Container>
          <Suspense
            fallback={
              <span className="loading loading-bars loading-xl flex mx-auto justify-center items-center"></span>
            }
          >
            <Card
              setAmount={setAmount}
              amount={amount}
              players={players}
              choosePlayer={choosePlayer}
              setChoosePlayer={setChoosePlayer}
            ></Card>
          </Suspense>
        </Container>
      ) : (
        <Container>
          <Selected
            removeBtn={removeBtn}
            choosePlayer={choosePlayer}
          ></Selected>
        </Container>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
