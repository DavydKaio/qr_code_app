import Card from "./components/Card";

function App() {
  return (
    <div className="App grid place-items-center">
      <div
        className="grid place-items-center h-screen w-full bg-[#d6e2f0] max-w-[1440px]
      sm:max-w[375px]">
        {/* Card */}
        <Card />

        <div className="text-sm sm:flex">
          <p>
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              rel="noreferrer"
              target="_blank"
              className="text-blue-600 mx-1">
              Frontend Mentor
            </a>
          </p>
          <p>
            Coded by
            <a
              href="https://www.frontendmentor.io/profile/DavydKaio"
              rel="noreferrer"
              target="_blank"
              className="text-blue-600 ml-1">
              DK
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
