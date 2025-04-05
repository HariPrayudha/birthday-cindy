import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import CountUp from "./components/CountUp/CountUp";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Ballpit from "./components/Ballpit/Ballpit";
import CircularText from "./components/CircularText/CircularText";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#EF9587]">
      <div className="absolute inset-0 w-full h-full">
        <Ballpit
          count={100}
          gravity={0.5}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={["#FFFFFF", "#FADADD", "#FF69B4", "#C2185B", "#526D96"]}
          ambientColor={0xffe4ec}
          ambientIntensity={0.8}
          lightIntensity={130}
          minSize={0.6}
          maxSize={1}
          size0={1}
          maxVelocity={0.12}
          maxX={5}
          maxY={5}
          maxZ={2}
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-4">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className="flex item-center gap-2">
                    <h1 className="text-2xl font-bold">Happyy Birthdayyyy</h1>
                    <RotatingText
                      texts={[
                        "Cantikkuu",
                        "Cintakuu",
                        "Lucuwkuu",
                        "Duniakuu",
                        "Semestakuu",
                        "Sayangkuu",
                        "Kekasihkuu",
                        "Bidadarikuu",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#526D96] text-[#EEC3B4] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>

                <div className="flex item-center gap-2">
                  <h1 className="text-5xl font-bold">Happy</h1>
                  <CountUp
                    from={0}
                    to={21}
                    separator=","
                    direction="up"
                    duration={6}
                    className="count-up-text text-5xl font-bold text-[#526D96]"
                  />
                  <BlurText
                    text="Adeeekkkkk💗"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-5xl font-bold"
                  />
                </div>

                <BlurText
                  text="Selamat ulang tahun, adeekkkk.
                  Terima kasih karena sudah hadir di duniaaaa, dan lebiiiihh dari itu—karena hadir di hidupku. Kamu adalah alasan di balik banyak senyumku, dan harapan di setiap harikuuu. Aku nggak sabar melihat kamu tumbuhh, bermimpi lebih besarr, dan semoga aku bisa selalu jadi bagian dari semuaa ituuu. Aku cinta kamuuuu, hari ini… dan seterusnyaaa.
                  "
                  delay={100}
                  animateBy="words"
                  direction="top"
                  threshold={0.1}
                  className="text-xl mb-8"
                />
              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <CircularText
              text="HAPPY*BIRTHDAY*CINDYYYY*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-20 right-8 text-black"
            />
            <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
