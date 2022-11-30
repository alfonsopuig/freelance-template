import Image from 'next/image';
import Head from 'next/head';

import PageTitle from '../components/PageTitle';

import aboutImage from '../public/images/alfonsopuig.png';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Freelancer</title>
        <meta name="description" content="Freelancer is a landing page template built with NextJS & Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto w-4/5 md:w-3/5 py-36">
        <PageTitle title="About Us" />
        <div>
          <div className="flex justify-center">
            <Image className="mb-20 rounded-[200px]" src={aboutImage} alt="" width={320} height={320} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices lacinia nulla. Nunc vitae eros sit
            amet ipsum gravida lobortis eget at metus. Proin vitae lorem purus. In iaculis rutrum volutpat. Nunc finibus
            tortor a sapien ultrices dapibus. Morbi mattis ex in magna hendrerit, quis scelerisque tellus volutpat.
            Pellentesque tincidunt ipsum quis egestas blandit. Nulla aliquam eros ut aliquam tristique. Nulla iaculis
            vehicula tellus. Donec egestas, sem in pulvinar egestas, massa tortor tempor metus, sit amet volutpat felis
            orci id ante.
          </p>
          <p>
            Vestibulum metus velit, varius vitae feugiat at, bibendum id nulla. Fusce aliquet porttitor mollis. Aenean
            vitae euismod nibh, sed dapibus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
            aliquam diam, non egestas dui. Aenean quis nibh aliquet, porttitor nibh in, sagittis ante. Nunc et dictum
            mauris. Integer velit erat, porta et efficitur et, sagittis non justo. Curabitur luctus sodales tortor, quis
            convallis nulla.
          </p>
          <p>
            Pellentesque egestas enim at massa sodales, sit amet efficitur ante pellentesque. Nunc ac dolor posuere,
            auctor ante non, sollicitudin tellus. Aenean sed eros sit amet orci sodales ultricies. Proin convallis ante
            ante. In sed ante at dolor porttitor lacinia sed non lorem. Nam pretium ut libero quis auctor. Nam accumsan
            massa eget nulla cursus, sed ultrices lorem maximus. Vivamus velit neque, tincidunt a diam at, accumsan
            accumsan leo. Maecenas at aliquet urna, vel cursus felis. Integer iaculis in sem eu rhoncus. Suspendisse
            pharetra suscipit velit, quis viverra odio ullamcorper ut. Integer varius lacinia tempor. Duis ac porttitor
            risus. Proin hendrerit massa sed est auctor lobortis.
          </p>
          <p>
            Quisque non turpis porttitor massa accumsan porta. Phasellus lobortis sem mi, et iaculis erat dapibus ac.
            Fusce condimentum porta augue, porta sollicitudin turpis. Quisque tincidunt ex vel risus lacinia tincidunt.
            Proin ut sapien fermentum, iaculis libero quis, porttitor lectus. Pellentesque ex odio, gravida et tortor
            eget, laoreet molestie nunc. Nam tincidunt, justo non rutrum auctor, odio massa porttitor erat, eget
            sollicitudin ex mi interdum felis. Mauris varius pellentesque quam, non bibendum libero maximus eu. Mauris
            sit amet neque gravida, sollicitudin ipsum quis, consectetur quam.
          </p>
        </div>
      </div>
    </>
  );
}
