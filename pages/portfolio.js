import Head from "next/head";
import Image from "next/image";

import PageTitle from "../components/PageTitle";

import portfolioOne from "../public/images/rohit-tandon-9wg5jCEPBsw-unsplash.jpg";
import portfolioTwo from "../public/images/rohit-tandon-BGnvpe8NREY-unsplash.jpg";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Freelancer</title>
        <meta
          name="description"
          content="Freelancer is a landing page template built with NextJS & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto pt-36 md:w-3/5">
        <PageTitle title="Portfolio" />
        <div className="my-14 grid md:grid-cols-2 md:gap-6">
          <div className="w-full">
            <Image src={portfolioOne} alt="portfolio-1" width={700} height={700} />
          </div>
          <div className="w-full">
            <Image src={portfolioTwo} alt="portfolio-2" width={700} height={700} />
          </div>
          <div className="w-full">
            <Image src={portfolioTwo} alt="portfolio-3" width={700} height={700} />
          </div>
          <div className="w-full">
            <Image src={portfolioOne} alt="portfolio-4" width={700} height={700} />
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        Fotos de{" "}
        <a href="https://unsplash.com/@sepoys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Rohit Tandon
        </a>{" "}
        en{" "}
        <a href="https://unsplash.com/es/s/fotos/Montana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </>
  );
}
