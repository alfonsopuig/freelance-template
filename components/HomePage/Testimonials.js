const TestimonialsData = {
  title: "Here's what our customers are saying",
  data: [
    {
      testimonial:
        "Lorem ipsum sit amet, consectetur adipiscing. Nulla vitae lorem neque imperdiet sagittis vivamus enim.",
      author: "—Ipsum Lorem, adipiscing",
    },
    {
      testimonial:
        "Lorem ipsum sit amet, consectetur adipiscing. Nulla vitae lorem neque imperdiet sagittis vivamus enim.",
      author: "—Ipsum Lorem, adipiscing",
    },
    {
      testimonial:
        "Lorem ipsum sit amet, consectetur adipiscing. Nulla vitae lorem neque imperdiet sagittis vivamus enim.",
      author: "—Ipsum Lorem, adipiscing",
    },
  ],
};

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="m-auto w-4/5">
        <h3 className="pb-10 text-center font-bold text-neutral-800">
          {TestimonialsData.title}
        </h3>
        <div className="m-auto grid gap-10 py-10 text-center md:grid-cols-3">
          {TestimonialsData.data.map((item, index) => (
            <div
              key={index}
              className="mb-5 bg-slate-100 p-20 md:mb-0 md:p-4 lg:p-20"
            >
              <p className="leading-7">{item.testimonial}</p>
              <p className="font-bold">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
