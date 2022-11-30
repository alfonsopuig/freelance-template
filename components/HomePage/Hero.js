import Image from "next/image";

import Button from "../Button";

const hero = {
  pretitle: "Hi! I'm Alfonso Puig",
  title: "Web Developer",
  description:
    "I create and maintain modern websites that help your business grow.",
  image: "/images/alfonsopuig.png",
  buttonLink: "#",
  buttonText: "Hablemos",
};

const Hero = () => {
  return (
    <section className="flex md:h-screen">
      <div className="m-auto my-20 w-4/5 justify-center gap-20 text-center text-neutral-800 md:flex md:items-center md:text-left">
        <div className="inline-block">
          <Image
            className="rounded-tr-[80px] rounded-bl-[80px]"
            src={hero.image}
            alt=""
            width={320}
            height={320}
          />
        </div>
        <div className="mt-7 basis-3/4">
          <p className="text-xl md:text-2xl">{hero.pretitle}</p>
          <h1 className="mb-7 font-bold">{hero.title}</h1>
          <p>{hero.description}</p>
          <Button title={hero.buttonText} link={hero.buttonLink} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
