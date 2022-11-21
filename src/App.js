import { useState } from "react";
import "./App.css";

function App() {
  const [qrState, setQrState] = useState("");
  const [qrImage, setQrImage] = useState(null);

  const handleClilck = () => {
    if (qrState !== "") {
      setQrImage(
        `http://api.qrserver.com/v1/create-qr-code/?data=${qrState}&size=150x150`
      );
    }
  };
  const handleChange = (e) => {
    setQrState(e.target.value);
  };

  return (
    <div className="App">
      <div className="generatorForm">
        <label>Simplest QR</label>
        <input
          type="text"
          className="qrinput"
          value={qrState}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClilck}>
          Generate
        </button>
        <div className="generatedqr">
          {qrImage ? <img src={qrImage} alt="qr" /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
