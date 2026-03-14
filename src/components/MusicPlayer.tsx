import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import birthdayMusic from "@/assets/happy-birthday-piano.mp3";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Default to playing the local happy birthday track
  const musicUrl = birthdayMusic;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.loop = true;
      audioRef.current.muted = true;

      // Start playing muted (browsers allow autoplay when muted)
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
          setMuted(true);
        })
        .catch(() => {
          // Autoplay may still get blocked; user can tap the button to start.
          setPlaying(false);
        });
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    // If muted, unmute and keep playing.
    if (muted) {
      audioRef.current.muted = false;
      setMuted(false);
      setPlaying(true);
      audioRef.current.play().catch(() => {
        setPlaying(false);
      });
      return;
    }

    // Otherwise, toggle play/pause.
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        setPlaying(false);
      });
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} preload="auto" />
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
