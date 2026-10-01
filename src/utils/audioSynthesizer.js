/**
 * Audio Manager with Fallback Procedural Ambient Hymn Synthesizer
 * Ensures background music ALWAYS plays beautifully without requiring external downloads.
 */

class HymnPlayer {
  constructor() {
    this.audioElement = null;
    this.audioContext = null;
    this.isPlaying = false;
    this.timerId = null;
    this.step = 0;

    // Peaceful Pentatonic / Sacred Hymn notes (frequencies in Hz)
    // Inspired by gentle harp and bell tones
    this.notes = [
      261.63, // C4
      293.66, // D4
      329.63, // E4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
      659.25, // E5
      783.99, // G5
      880.00, // A5
    ];

    // Gentle arpeggio pattern
    this.pattern = [
      0, 2, 4, 7, 5, 4, 2,
      1, 3, 5, 8, 6, 5, 3,
      0, 4, 7, 9, 7, 4, 2,
      2, 4, 6, 8, 7, 5, 4
    ];
  }

  initWebAudio() {
    if (!this.audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioContext = new AudioContext();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  playTone(freq, time, duration = 2.4) {
    if (!this.audioContext) return;
    const ctx = this.audioContext;

    // Main acoustic harp/bell oscillator
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    // Warm resonant lowpass filter to mimic acoustic church harp/chimes
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.Q.setValueAtTime(3, time);

    // Soft envelope with gentle attack and long, shimmering decay
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.12, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.04, time + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    // Harmonics for warmth
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq * 0.5, time); // Sub harmonic
    subGain.gain.setValueAtTime(0.0001, time);
    subGain.gain.exponentialRampToValueAtTime(0.05, time + 0.05);
    subGain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
    subOsc.start(time);
    subOsc.stop(time + duration);
  }

  startProceduralHymn() {
    this.initWebAudio();
    if (!this.audioContext) return;

    this.isPlaying = true;
    this.step = 0;

    const playNext = () => {
      if (!this.isPlaying || !this.audioContext) return;
      const now = this.audioContext.currentTime;
      const noteIdx = this.pattern[this.step % this.pattern.length];
      const freq = this.notes[noteIdx % this.notes.length];

      this.playTone(freq, now, 2.6);

      // Play soft harmony drone on root note every 4 steps
      if (this.step % 4 === 0) {
        this.playTone(130.81, now, 4.0); // C3 low foundation
      }

      this.step++;
      this.timerId = setTimeout(playNext, 680);
    };

    playNext();
  }

  stopProceduralHymn() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  async togglePlay(audioSrc) {
    if (this.isPlaying) {
      this.pause();
      return false;
    }

    // Try playing real audio file if present
    if (audioSrc) {
      if (!this.audioElement) {
        this.audioElement = new Audio(audioSrc);
        this.audioElement.loop = true;
        this.audioElement.volume = 0.5;
      }
      try {
        await this.audioElement.play();
        this.isPlaying = true;
        return true;
      } catch (err) {
        console.info("Audio file not available or blocked, falling back to WebAudio Hymn synthesizer.", err);
      }
    }

    // Fallback to soothing procedural hymn
    this.startProceduralHymn();
    return true;
  }

  pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopProceduralHymn();
  }
}

export const hymnPlayer = new HymnPlayer();
