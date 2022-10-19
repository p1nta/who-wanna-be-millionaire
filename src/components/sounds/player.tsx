import { useState, useEffect } from "react";

const useAudio = (url: string): [boolean, (value: boolean) => void] => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState<boolean>(false);

  const toggle = (value: boolean) => setPlaying(value);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    audio.addEventListener('pause', () => {
      audio.currentTime = 0;
    });
    return () => {
      audio.removeEventListener('pause', () => {
        audio.currentTime = 0;
      });
    };
  }, []);

  return [playing, toggle];
};

const Player: React.FunctionComponent<{ url: string, play: boolean }> = ({ url, play }) => {
  const [playing, toggle] = useAudio(url);

  useEffect(() => {
    toggle(play);
  }, [play]);

  return (
    <></>
  );
};

export default Player;