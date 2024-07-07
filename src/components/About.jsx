import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-[#1d1f1e] rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
        <h1 className="sm:text-3xl text-xl sm:leading-normal font-medium mb-10 border-b-[1px] border-zinc-700 pb-10">
          <b className="text-green-600">Grind & Grow</b> is your ultimate fitness partner, empowering you to crush your goals, build resilience, and transform your body and mind. Whether you're looking to lift heavier, run faster, or simply live healthier, we provide the tools, expertise, and community support to help you succeed. Join us to grind hard and grow stronger every day.
        </h1>
        <div className="md:flex justify-center gap-10">
          <div className="about-text h-fit">
            <h1 className="text-4xl mb-4">Our approach:</h1>
            <p className="text-base sm:text-xl text-zinc-200 tracking-wide">
              At Grind & Grow, our approach is centered around holistic fitness and personal development. We believe in pushing limits and cultivating strength both physically and mentally.
            </p>
            {showMore && (
              <div className="text-base sm:text-xl text-zinc-200 tracking-wide mt-4">
                <p><b className="text-green-500">&bull; Personalized Training Plans:</b> We tailor fitness programs to meet your unique goals, whether you're aiming to lose weight, build muscle, improve endurance, or enhance overall wellness.</p>
                <p><b className="text-green-500">&bull; Expert Guidance:</b> Our certified trainers and nutritionists offer expert advice and support, ensuring you adopt the right techniques and maintain a balanced diet to maximize your progress.</p>
                <p><b className="text-green-500">&bull; State-of-the-Art Facilities:</b> Equipped with cutting-edge machines and a variety of workout zones, our gym provides a dynamic environment that caters to all fitness levels and preferences.</p>
                <p><b className="text-green-500">&bull; Innovative Classes:</b> From high-intensity interval training (HIIT) to yoga and strength training, our diverse class offerings keep your workouts exciting and effective.</p>
              </div>
            )}
            <div
              onClick={handleReadMore}
              className="cursor-pointer rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#004D43] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase"
            >
              {showMore ? "Show less" : "Read more"}
              <FaArrowUpLong className={`rotate-45 origin-center translate-y-[2px] ${showMore && 'rotate-90'}`} />
            </div>
          </div>
          <img
            className="w-full rounded-3xl mt-10 md:w-[40vw] md:mt-0"
            src="https://wallpaper.forfun.com/fetch/03/03fd17058dc4412aee9fdadf68ab353a.jpeg"
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
