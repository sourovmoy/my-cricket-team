import { Suspense } from "react";
import "./App.css";
import Banner from "./assets/banner/Banner";
import Navbar from "./assets/navbar/navbar";
import Card from "./cards/card";
import Container from "./Container";

const players = fetch("/players/players.json").then((res) => res.json());
function App() {
  return (
    <>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Container>
        <Banner></Banner>
      </Container>
      <Container>
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Card players={players}></Card>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
