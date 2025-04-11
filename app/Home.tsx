import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import CountUp from "./components/CountUp/CountUp";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Ballpit from "./components/Ballpit/Ballpit";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import RollingGallery from "./components/RollingGallery/RollingGallery";
import Folder from "./components/Folder/Folder";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import Squares from "./components/Squares/Squares";
import BounceCards from "./components/BounceCards/BounceCards";

const images = [
  "/images/img20.jpg",
  "/images/img21.jpg",
  "/images/img22.jpg",
  "/images/img23.jpg",
  "/images/img24.jpg",
  "/images/img26.jpg",
  "/images/img25.jpg",
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
  "rotate(10deg) translate(220px)",
  "rotate(-5deg) translate(240px)",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#EF9587]">
      <div className="absolute inset-0 w-full h-full">
        <Ballpit
          count={110}
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
                      key="rotating-text"
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
                      autoStart={true}
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
                    duration={5}
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
                  Semoga sehat selaluuu, dimurahkan rezekinyaaa, berkah umurnyaaa, dannn selalu cantikk. Terima kasih karena sudah hadir di duniaaaa. Kamu adalah alasan di balik banyak senyumkuuu. Aku nggak sabar melihat kamu tumbuhh, bermimpi lebih besarr, dan semoga aku bisa selalu jadi bagian dari semuaa ituuu. Aku cinta kamuuuu, hari ini… dan seterusnyaaa.
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
              spinDuration={15}
              className="absolute top-20 right-8 text-black"
            />
            <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>

      <div className="container mx-auto min-h-screen py-16 relative z-0">
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.5}
            squareSize={50}
            direction="diagonal"
            borderColor="#526D96"
            hoverFillColor="#FF69B4"
          />
        </div>
        <div className="relative z-10">
          <ScrollVelocity
            texts={["Happy Birthday", "Cindy Afriana"]}
            className="text-[#526D96]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RollingGallery
              autoplay={true}
              pauseOnHover={true}
              initialDelay={500}
            />
            <BlurText
              text="Foto-foto bareng bidadariii"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-5xl font-bold ml-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <TrueFocus
              sentence="Ayooww Buka Akuuu👉🏻"
              manualMode={false}
              blurAmount={10}
              borderColor="#526D96"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />
            <div className="flex justify-center">
              <Folder
                size={2}
                color="#FF69B4"
                className="custom-folder"
                items={[
                  <img
                    src="images/img18.jpg"
                    className="w-full h-full object-cover rounded"
                  />,
                  <img
                    src="images/img19.jpg"
                    className="w-full h-full object-cover rounded"
                  />,
                  <img
                    src="images/img17.jpg"
                    className="w-full h-full object-cover rounded"
                  />,
                ]}
              />
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
