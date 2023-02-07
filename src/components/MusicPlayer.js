import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [songs, setSongs] = useState([
    "all-of-me",
    "dodo",
    "Good-Part-Song",
    "if-the-world-was-ending",
  ]);
  const [songIndex, setSongIndex] = useState(2);
  const [songTitle, setSongTitle] = useState("");
  const [audio, setAudio] = useState("");
  const [cover, setCover] = useState("");
  const [isPaused, setIsPaused] = useState(true);

  const audioRef = useRef();

  useEffect(() => {
    loadSong(songs[songIndex]);
  }, []);

  function getPreferredSongTitle(title) {
    const dict = {
      "all-of-me": "All Of Me",
      dodo: "Dodo",
      "Good-Part-Song": "The Good Part",
      "if-the-world-was-ending": "If The World Was Ending",
    };

    return dict[title];
  }

  // Update song details
  function loadSong(song) {
    setSongTitle(song);
    setAudio(`${song}.mp3`);
    setCover("/profile-real.jpg");
  }

  // Play song
  function playSong() {
    // musicContainer.classList.add('play');
    setIsPaused(false);
    audioRef.current.play();
    console.log("anna", audioRef.current);
  }

  // Pause song
  function pauseSong() {
    setIsPaused(true);
    audioRef.current.pause();
  }

  // Previous song
  function prevSong() {
    if (songIndex >= 1) {
      setSongIndex(songIndex - 1);
      loadSong(songs[songIndex - 1]);
      setTimeout(() => {
        playSong();
      }, 1000);
    }
  }

  // Next song
  function nextSong() {
    if (songIndex <= 2) {
      setSongIndex(songIndex + 1);
      loadSong(songs[songIndex + 1]);
      setTimeout(() => {
        playSong();
      }, 1000);
    }
  }

  return (
    <motion.div
      className={`music-container ${!isPaused ? "play" : ""}`}
      id="music-container"
    >
      <div className="music-info">
        <h4>{getPreferredSongTitle(songTitle)}</h4>
        {/* <div className="progress-container" id="progress-container">
          <div className="progress" id="progress"></div>
        </div> */}
      </div>

      <audio src={`${songTitle}.mp3`} id="audio" ref={audioRef}></audio>

      <div className="img-container">
        <Image
          src="/profile-real.jpg"
          alt="music-cover"
          id="cover"
          width={20}
          height={20}
        />
      </div>
      <div className="navigation">
        <button id="prev" className="action-btn" onClick={prevSong}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          id="play"
          className="action-btn action-btn-big"
          onClick={isPaused ? playSong : pauseSong}
        >
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </button>
        <button id="next" className="action-btn" onClick={nextSong}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </motion.div>
  );
}
