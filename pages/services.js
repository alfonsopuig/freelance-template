import Head from 'next/head';
import Image from 'next/image';

import PageTitle from '../components/PageTitle';

import imageOne from '../public/images/undraw_Operating_system_re_iqsc.png';
import imageTwo from '../public/images/undraw_online_stats_0g94.png';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Freelancer</title>
        <meta name="description" content="Freelancer is a landing page template built with NextJS & Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto w-3/5 py-36">
        <PageTitle title="Services" />
        <div className="my-14 place-content-around md:flex">
          <div>
            <Image src={imageOne} alt="" />
          </div>
          <div className="md:w-full">
            <p>
              Nunc pulvinar orci a diam aliquam, nec varius quam tristique. Pellentesque nec porttitor risus. Nullam ac
              arcu sed purus fermentum dignissim. Maecenas ut nibh dui. Nulla suscipit vitae sem at laoreet. Aliquam
              dignissim varius sem, at finibus tellus feugiat ut. Quisque massa tortor, dignissim quis pharetra at,
              egestas id ipsum. Nunc varius gravida risus at lobortis. Sed a ex nisl.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse place-content-around md:flex-row">
          <div className="md:w-full">
            <p>
              Nunc pulvinar orci a diam aliquam, nec varius quam tristique. Pellentesque nec porttitor risus. Nullam ac
              arcu sed purus fermentum dignissim. Maecenas ut nibh dui. Nulla suscipit vitae sem at laoreet. Aliquam
              dignissim varius sem, at finibus tellus feugiat ut. Quisque massa tortor, dignissim quis pharetra at,
              egestas id ipsum. Nunc varius gravida risus at lobortis. Sed a ex nisl.
            </p>
          </div>
          <div>
            <Image src={imageTwo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
