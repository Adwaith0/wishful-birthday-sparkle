import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a royalty-free happy birthday melody
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center animate-pulse-glow transition-transform hover:scale-110"
        aria-label={playing ? "Mute music" : "Play music"}
      >
        {playing ? (
          <Volume2 className="w-6 h-6 text-primary" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
