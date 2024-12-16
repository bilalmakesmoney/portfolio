import Image from "next/image";
import image1 from "@/public/project-1.png";
import image2 from "@/public/project-2.png";
import image3 from "@/public/project-3.png";
import image4 from "@/public/project-4.png";
import image5 from "@/public/project-5.png";

interface HeroProps {
  textEnter: () => void;
  textLeave: () => void;
  linkEnter: () => void;
  linkLeave: () => void;
}

const images = [image1, image2, image3, image4, image5];

const positions = [
  { top: "10%", left: "10%" },
  { top: "20%", left: "30%" },
  { top: "30%", left: "6%" },
  { top: "40%", left: "59%" },
  { top: "48%", left: "40%" },
];

const Work: React.FC<HeroProps> = ({ textEnter, textLeave }) => {
  return (
    <div className="work relative xl:px-16 py-10 w-full flex flex-col items-center cursor-pointer">
      <h1
        className="font-extrabold text-[32px] sm:text-[40px] md:text-[48px] text-center mb-10"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        My <span className="highlight">Work</span> 😇
      </h1>

      <div className="relative w-full h-auto xl:h-[700px] flex flex-col 2xl:block items-center gap-6">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`work-${index}`}
            width={250}
            height={250}
            className="w-[300px] sm:w-[350px] lg:w-[450px] blur-[5px] transition-all duration-300 hover:blur-none hover:scale-110 hover:z-50 xl:absolute"
            style={
              index < positions.length
                ? { top: positions[index].top, left: positions[index].left }
                : {}
            }
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
