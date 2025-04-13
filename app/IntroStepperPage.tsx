"use client";

import { useState, useRef, ChangeEvent } from "react";
import { Howl } from "howler";
import Stepper, { Step } from "./components/Stepper/Stepper";
import HomePage from "./Home";
import { MD5 } from "crypto-js";

function md5(input: string): string {
  return MD5(input).toString();
}

interface Song {
  label: string;
  url: string;
  isPasswordProtected?: boolean;
  passwordHash?: string;
}

const songs: Song[] = [
  {
    label: "Selamat Ulang Tahun - Virgoun",
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
  {
    label: "Ucapan Spesial Dari Aku 🎤",
    url: "/music/suara-hati.mp3",
    isPasswordProtected: true,
    passwordHash: "51755a067347c983b953b1b396f6fd32"
  },
];

export default function IntroStepperPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [finalStepDone, setFinalStepDone] = useState(false);
  const [selectedSong, setSelectedSong] = useState(songs[0].url);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const soundRef = useRef<Howl | null>(null);

  const handleSongChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const selectedSongObj = songs[index];

    if (selectedSongObj.isPasswordProtected) {
      setSelectedSongIndex(index);
      setShowPasswordModal(true);
    } else {
      setSelectedSong(selectedSongObj.url);
      setSelectedSongIndex(index);
    }
  };

  const handlePasswordSubmit = () => {
    const selectedSongObj = songs[selectedSongIndex];
    const hashedInput = md5(password);
    
    if (selectedSongObj.passwordHash === hashedInput) {
      setSelectedSong(selectedSongObj.url);
      setShowPasswordModal(false);
      setPasswordError("");
      setPassword("");
    } else {
      setPasswordError("Password salah. Coba lagi.");
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordModal(false);
    setPassword("");
    setPasswordError("");
    setSelectedSongIndex(0);
    setSelectedSong(songs[0].url);
  };

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  return finalStepDone ? (
    <HomePage />
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-[#EF9587]">
      {showPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4 text-[#526D96]">Masukkan Password</h3>
            <p className="text-sm mb-4 text-[#526D96]">
              Lagu ini dilindungi password. Masukkan password untuk melanjutkan.
            </p>
            <input
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 border border-gray-300 rounded mb-4 text-[#526D96]"
              placeholder="Masukkan password"
              autoFocus
            />
            {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
            <div className="flex justify-end space-x-2">
              <button
                onClick={handlePasswordCancel}
                className="px-4 py-2 bg-gray-200 text-[#526D96] rounded"
              >
                Batal
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="px-4 py-2 bg-[#EEC3B4] text-[#526D96] rounded"
              >
                Lanjut
              </button>
            </div>
          </div>
        </div>
      )}
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
              value={songs[selectedSongIndex].url}
              onChange={handleSongChange}
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