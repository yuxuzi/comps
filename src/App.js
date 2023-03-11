import "./App.css";
import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";
import Button from "./Buttons";

function App() {
  return (
    <div className="App">
      <div>
        <Button secondary outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!
          <GoDatabase />
        </Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
