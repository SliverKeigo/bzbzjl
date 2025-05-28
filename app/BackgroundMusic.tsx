"use client";

import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(error => {
        console.warn("背景音乐自动播放失败，可能需要用户交互:", error);
      });
    }

    const playOnInteraction = () => {
      if (audio && audio.paused) {
        audio.play().catch(e => console.warn("交互后播放失败:", e));
      }
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('keydown', playOnInteraction);
    };

    document.addEventListener('click', playOnInteraction);
    document.addEventListener('keydown', playOnInteraction);

    return () => {
      // 清理事件监听器
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('keydown', playOnInteraction);
    };
  }, []);

  return (
    <audio ref={audioRef} id="bgMusic" preload="auto" loop>
      <source src="https://sf5-hl-cdn-tos.douyinstatic.com/obj/ies-music/7224476379310656313.mp3" type="audio/mpeg" />
      您的浏览器不支持音频播放。
    </audio>
  );
};

export default BackgroundMusic;
