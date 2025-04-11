"use client";

import { useState, useRef } from "react";
import { Howl } from "howler";
import Stepper, { Step } from "./components/Stepper/Stepper";

import HomePage from "./Home";

const songs = [
  {
    label: "Selamat Ulang Tahun (Acoustic Version) - Virgoun",
    url: "/music/selamat-ulang-tahun-virgoun.mp3",
  },
  {
    label: "Selamat Ulang Tahun - Jamrud",
    url: "/music/selamat-ulang-tahun-jamrud.mp3",
  },
  {
    label: "Best Part - Daniel Caesar ft. H.E.R.",
    url: "/music/best-part-daniel-caesar.mp3",
  },
];

export default function IntroStepperPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [finalStepDone, setFinalStepDone] = useState(false);
  const [selectedSong, setSelectedSong] = useState(songs[0].url);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  const handleFinalStep = () => {
    setIsTransitioning(true);
    
    const sound = new Howl({
      src: [selectedSong],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    sound.play();
    soundRef.current = sound;
    
    setTimeout(() => {
      setFinalStepDone(true);
    }, 100);
  };

  return finalStepDone ? (
    <HomePage />
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-[#EF9587]">
      <div className="max-w-2xl w-full px-4">
        <Stepper
          initialStep={1}
          onStepChange={(step) => setCurrentStep(step)}
          onFinalStepCompleted={handleFinalStep}
          backButtonText="Kembali"
          nextButtonText="Lanjut"
          stepContainerClassName="flex justify-center gap-4 mb-6"
          backButtonProps={{
            className:
              "px-4 py-2 bg-white text-[#526D96] font-semibold rounded-3xl shadow hover:bg-[#f7d5d5] transition",
          }}
          nextButtonProps={{
            className:
              "px-4 py-2 bg-[#EEC3B4] text-[#526D96] font-semibold rounded-3xl shadow hover:bg-[#f7d5d5] transition",
          }}
          stepCircleContainerClassName="p-2 rounded-3xl bg-[#526D96]"
        >
          <Step>
            <h2 className="text-3xl font-bold text-center mb-4 text-[#EEC3B4]">
              Apakah kamu sudah siapp? 😚
            </h2>
            <p className="text-center text-lg text-[#EEC3B4]">
              Kalau udah siap, kita lanjut yaaa...
            </p>
          </Step>

          <Step>
            <h2 className="text-2xl font-semibold text-center mb-4 text-[#EEC3B4]">
              Sedikit pengantar duluu...
            </h2>
            <p className="text-center text-[#EEC3B4]">
              Yang akan kamu lihat nanti bukan sekadar halaman web biasaaa, tapi sebuah
              hadiah kecil dari hatiku ke kamuuu 💖
              <br />
              Are you ready for some memories and lovee?🥺
            </p>
          </Step>

          <Step>
            <h2 className="text-2xl font-semibold text-center mb-4 text-[#EEC3B4]">
              Pilih lagu untuk nemanin kamu di web ini yukkk 🎧
            </h2>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#EEC3B4]"
              value={selectedSong}
              onChange={(e) => setSelectedSong(e.target.value)}
            >
              {songs.map((song, index) => (
                <option key={index} value={song.url}>
                  {song.label}
                </option>
              ))}
            </select>
            <p className="mt-4 text-center text-sm text-[#EEC3B4]">
              Lagu ini akan diputar sepanjang kamu menelusuri halaman yaa~
            </p>
          </Step>

          <Step>
            <h2 className="text-3xl font-bold text-center text-[#EEC3B4]">Let's Goooo! 🚀</h2>
            <p className="text-center text-[#EEC3B4]">
              Klik "Complete" dan liat websitenyaaa💝
            </p>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}
