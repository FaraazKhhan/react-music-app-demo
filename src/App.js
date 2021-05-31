import "./styles.css";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPause,
  faStop
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const fetchAPI = (songName) => {
      fetch(`https://saavn.me/search?song=${songName}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSongs(data);
        });
    };
    fetchAPI("rockstar");
  }, []);

  // const [audio] = useState(new Audio(url))

  return (
    <div className="App">
      <h1>Earsify</h1>
      <h2>Start listening to your favourite Indian songs!</h2>
      {/* <button className="btn btn-primary">Click</button> */}
      <div>
        {songs &&
          songs.map((song) => (
            <div key={song.song_id}>
              <img src={song.song_image} alt={song.song_name} width="100px" />
              <p>{song.song_name}</p>
              {/* <audio src={song.download_links.[0]} preload="metadata" controls/> */}
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faPlayCircle} />
              </button>
              <button className="btn btn-secondary">
                <FontAwesomeIcon icon={faPause} />
              </button>
              <button className="btn btn-warning">
                <FontAwesomeIcon icon={faStop} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
