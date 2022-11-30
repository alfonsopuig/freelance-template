import Image from 'next/image';

import logo1 from '../../public/images/logo-1.png';

const data = {
  title: 'Tools and platforms',
  logos: [
    {
      image: logo1,
      alt: 'Logo 1',
    },
    {
      image: logo1,
      alt: 'Logo 2',
    },
    {
      image: logo1,
      alt: 'Logo 3',
    },
    {
      image: logo1,
      alt: 'Logo 4',
    },
  ],
  experience: [
    {
      number: '+15',
      description: 'years of experience',
    },
    {
      number: '+25',
      description: 'completed projects',
    },
  ],
};

const Logos = () => {
  return (
    <section className="bg-gradient-to-br from-sky-600 to-violet-600 py-20">
      <div className="m-auto w-4/5">
        <h2 className="text-center font-medium text-white">{data.title}</h2>
        <div className="m-auto w-4/5 place-content-around py-10 text-center md:flex">
          {data.logos.map((item, index) => (
            <div key={index}>
              <Image src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
      {/* 
                <div className="w-4/5 gap-4 md:w-2/5 m-auto flex place-content-around pb-10 text-center">
                        {
                            data.experience.map((item, index) => (
                                <div key={index}>
                                    <p className="text-xl text-white"><span className="text-6xl font-medium block my-4">{item.number}</span>{item.description}</p>
                                </div>
                            ))
                        }
                </div>
                    */}
    </section>
  );
};

export default Logos;
