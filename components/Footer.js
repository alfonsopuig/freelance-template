import Link from 'next/link';
import Button from './Button';

const footerInfo = {
  title: 'Get Started',
  description:
    'Vestibulum porttitor sem et magna scelerisque, at mattis lorem varius. Maecenas euismod dui quis faucibus laoreet. Pellentesque habitant.',
  buttonLink: '#',
  buttonText: "Let's talk",
  leftMenu: 'Products',
  middleMenu: 'Resources',
  rightMenu: 'Company',
  credits: 'Freelancer',
};

const footerLeftMenu = [
  {
    title: 'About Us',
    link: 'about',
  },
  {
    title: 'Services',
    link: 'services',
  },
  {
    title: 'Portfolio',
    link: 'portfolio',
  },
  {
    title: 'Contact Us',
    link: '#',
  },
];

const footerMiddleMenu = [
  {
    title: 'Templates',
    link: '#',
  },
  {
    title: 'Documentation',
    link: '#',
  },
  {
    title: 'FAQs',
    link: '#',
  },
  {
    title: 'Help',
    link: '#',
  },
];

const footerRightMenu = [
  {
    title: 'Cookies',
    link: '#',
  },
  {
    title: 'Privacy Policy',
    link: '#',
  },
  {
    title: 'Terms of Service',
    link: '#',
  },
  {
    title: 'Contact Us',
    link: 'contact',
  },
];

const socialLinks = [
  {
    title: 'Twitter',
    link: 'https://twitter.com/alfonso_puig',
  },
  {
    title: 'Instagram',
    link: '#',
  },
  {
    title: 'Github',
    link: 'https://github.com/alfonsopuig',
  },
];

const Footer = () => {
  return (
    <section className="bg-black py-10">
      <div className="m-auto w-4/5">
        <div className="m-auto place-content-between gap-10 py-10 text-center text-white md:flex">
          <div className="basis-2/4 md:text-left">
            <h4 className="mb-5">{footerInfo.title}</h4>
            <p>{footerInfo.description}</p>
            <Button title={footerInfo.buttonText} link={footerInfo.buttonLink} />
          </div>
          <div className="my-7 md:my-0">
            <h5 className="mb-5 md:text-left">{footerInfo.leftMenu}</h5>
            <ul className="md:text-left">
              {footerLeftMenu.map((item, index) => (
                <li key={index} className="my-3">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-7">
            <h5 className="mb-5 md:text-left">{footerInfo.middleMenu}</h5>
            <ul className="md:text-left">
              {footerMiddleMenu.map((item, index) => (
                <li key={index} className="my-3">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-7">
            <h5 className="mb-5 md:text-left">{footerInfo.rightMenu}</h5>
            <ul className="md:text-left">
              {footerRightMenu.map((item, index) => (
                <li key={index} className="my-3">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex place-content-between items-center border-t border-t-gray-600 pt-8 text-white">
          <div className="basis-4/5 md:text-left">
            <p>
              © {new Date().getFullYear()} {footerInfo.credits}
            </p>
          </div>
          <ul className="inline-flex">
            {socialLinks.map((item, index) => (
              <li key={index} className="mx-3">
                <Link href={item.link} target="_blank">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
