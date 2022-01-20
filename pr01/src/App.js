import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import "./App.css";

function App() {
  const [script, setScript] = useState(false);

  const AFRAME_URL = "https://aframe.io/releases/1.2.0/aframe.min.js";
  const JEROMEETIENNE_URL =
    "https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js";

  const createElement = (id, url, res, rej) => {
    const script = document.getElementById(id);
    if (script) {
      res();
    } else {
      const script = document.createElement("script");
      script.setAttribute("id", id);
      script.setAttribute("src", url);
      document.head.insertAdjacentElement("beforeend", script);
      script.onload = () => res();
      script.onerror = () => rej();
    }
  };

  const setScriptsToOpenCamera = () => {
    return new Promise((res, rej) => {
      createElement("aframe-script", AFRAME_URL, res, rej);
    }).then(() => {
      return new Promise((res, rej) => {
        createElement("jeromeetienne-script", JEROMEETIENNE_URL, res, rej);
      });
    });
  };

  useEffect(() => {
    // setScriptsToOpenCamera().then(() => {
    //   setScript(true);
    // });
    return () => {
      // const aframeScript = document.getElementById("aframe-script");
      // const jeromeetienneScript = document.getElementById(
      //   "jeromeetienne-script"
      // );
      // const scriptsToRemove = [jeromeetienneScript, aframeScript].filter(
      //   (el) => el
      // );
      // for (let i = 0; i < scriptsToRemove.length; i++) {
      //   if (scriptsToRemove[i].parentNode) {
      //     scriptsToRemove[i].parentNode.removeChild(scriptsToRemove[i]);
      //   } else scriptsToRemove[i].remove();
      // }
    };
  }, []);

  // if (!script) return null;

  return (
    <div className="App">
      {/* <header>
        <div>I</div>
        <div>Logotype</div>
        <div>buttons</div>
      </header> */}
      <iframe frameborder="0" scrolling="no" title='gdfg' className="iframe" src="./myScene.html"></iframe>
    </div>
  );
}

export default App;
