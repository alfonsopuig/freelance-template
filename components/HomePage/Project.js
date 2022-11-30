import Image from "next/image";

import Button from "../Button";

import imageOne from "../../public/images/undraw_Real_time_sync_re_nky7.png";
import imageTwo from "../../public/images/undraw_Devices_re_dxae.png";

const projectOne = {
  pretitle: "Latest project",
  title: "Project #1",
  description: "Online store development with React",
  image: imageOne,
  buttonLink: "#",
  buttonText: "Read More",
};

const projectTwo = {
  pretitle: "Latest project",
  title: "Project #2",
  description: "Website development with NextJS & TailwindCSS",
  image: imageTwo,
  buttonLink: "#",
  buttonText: "Read More",
};

export default function Projects(props) {
  const { data } = props;

  return (
    <section
      className={`m-auto w-4/5 justify-center gap-12 py-28 text-neutral-800 md:flex md:w-3/5 md:items-center  ${
        props.imagePosition === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="basis-2/4">
        <Image className="" src={data.image} alt="" width={512} height={512} />
      </div>
      <div className="mt-10 basis-2/4 text-center md:text-left">
        <p className="font-semibold">{data.pretitle}</p>
        <h3 className="mb-10 font-semibold">{data.title}</h3>
        <p className="md:w-4/5">{data.description}</p>
        <Button title={data.buttonText} link={data.buttonLink} />
      </div>
    </section>
  );
}

export { projectOne, projectTwo };
