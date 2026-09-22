import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayerToggle({ isPlaying, onToggle }) {
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Web Audio Festive Rhythm Generator (Tanpura drone + Ghungroo/bell chime)
  const startFestiveAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Festive drone note (D / Sa - 146.83 Hz and Pa - 220 Hz)
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
    masterGain.connect(ctx.destination);

    // Warm Drone Oscillators
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(146.83, ctx.currentTime); // D3

    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(220.00, ctx.currentTime); // A3

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(masterGain);

    osc1.start();
    osc2.start();

    // Periodic Ghungroo / Bell Chime every 1.5s
    const playChime = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
      const t = ctx.currentTime;
      const chimeOsc = ctx.createOscillator();
      const chimeGain = ctx.createGain();

      chimeOsc.type = 'sine';
      // Pentatonic Indian scale notes
      const notes = [587.33, 659.25, 739.99, 880.00, 987.77];
      const note = notes[Math.floor(Math.random() * notes.length)];
      chimeOsc.frequency.setValueAtTime(note, t);

      chimeGain.gain.setValueAtTime(0.04, t);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(ctx.destination);

      chimeOsc.start(t);
      chimeOsc.stop(t + 1.2);
    };

    intervalRef.current = setInterval(playChime, 1400);

    return () => {
      clearInterval(intervalRef.current);
      try {
        osc1.stop();
        osc2.stop();
      } catch (e) {}
    };
  };

  useEffect(() => {
    let stopAudio;
    if (isPlaying) {
      stopAudio = startFestiveAudio();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
    }

    return () => {
      if (stopAudio) stopAudio();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onToggle}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#5f1040] to-[#0f4d5b] border border-[#febf4a]/50 text-[#febf4a] shadow-gold-glow hover:border-[#febf4a] transition-all duration-300 focus:outline-none"
        aria-label={isPlaying ? "Mute festive music" : "Play festive ambient sound"}
      >
        {isPlaying ? (
          <>
            {/* Animated sound bars */}
            <div className="flex items-end gap-0.5 h-4">
              <span className="w-1 bg-[#febf4a] rounded-full animate-[bounce_0.8s_infinite_100ms] h-3" />
              <span className="w-1 bg-[#febf4a] rounded-full animate-[bounce_0.8s_infinite_300ms] h-4" />
              <span className="w-1 bg-[#febf4a] rounded-full animate-[bounce_0.8s_infinite_200ms] h-2.5" />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline">
              Festive Ambience
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#febf4a]/70" />
            <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline text-[#fff0c2]/70 group-hover:text-[#febf4a]">
              Play Ambience
            </span>
          </>
        )}
      </button>
    </div>
  );
}
