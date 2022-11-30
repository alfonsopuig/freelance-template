const featuresOne = {
  title: 'Features #1',
  options: [
    {
      title: 'Online Shop',
      description: 'Fusce scelerisque turpis vel dolor maximus facilisis. Donec efficitur eget leo id bibendum',
    },
    {
      title: 'Web Development',
      description: 'Fusce scelerisque turpis vel dolor maximus facilisis. Donec efficitur eget leo id bibendum',
    },
    {
      title: 'Jamstack Technologies',
      description: 'Fusce scelerisque turpis vel dolor maximus facilisis. Donec efficitur eget leo id bibendum',
    },
    {
      title: 'Modern Development',
      description: 'Fusce scelerisque turpis vel dolor maximus facilisis. Donec efficitur eget leo id bibendum',
    },
    {
      title: 'Expert Marketing',
      description: 'Fusce scelerisque turpis vel dolor maximus facilisis. Donec efficitur eget leo id bibendum',
    },
    {
      title: 'Data Analysis',
      description: 'Fusce scelerisque turpis vel dolor maximus facilisis. Donec efficitur eget leo id bibendum',
    },
  ],
};

const featuresTwo = {
  title: 'Features #2',
  options: [
    {
      title: 'Mobile Responsive Template',
      description: 'Morbi vitae dignissim metus, eget placerat magna. Morbi ut molestie nulla. Ut eu leo dapibus magna',
    },
    {
      title: 'Build with NextJS & Tailwind',
      description: 'Morbi vitae dignissim metus, eget placerat magna. Morbi ut molestie nulla. Ut eu leo dapibus magna',
    },
    {
      title: 'SEO Optimized',
      description: 'Morbi vitae dignissim metus, eget placerat magna. Morbi ut molestie nulla. Ut eu leo dapibus magna',
    },
    {
      title: 'Clean Code',
      description: 'Morbi vitae dignissim metus, eget placerat magna. Morbi ut molestie nulla. Ut eu leo dapibus magna',
    },
    {
      title: 'Developer Support',
      description: 'Morbi vitae dignissim metus, eget placerat magna. Morbi ut molestie nulla. Ut eu leo dapibus magna',
    },
    {
      title: 'Customizable',
      description: 'Morbi vitae dignissim metus, eget placerat magna. Morbi ut molestie nulla. Ut eu leo dapibus magna',
    },
  ],
};

export default function Features(props) {
  const { data } = props;

  return (
    <section className="bg-gradient-to-r from-sky-600 to-violet-600 py-20">
      <div className="m-auto w-4/5">
        <h3 className="pb-20 text-center font-bold text-white">{data.title}</h3>
        <div className="grid gap-10 text-center md:grid-cols-3 md:grid-rows-2 md:text-left">
          {data.options.map((item, index) => (
            <div key={index}>
              <h4 className="pb-10 font-semibold text-white">{item.title}</h4>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { featuresOne, featuresTwo };
