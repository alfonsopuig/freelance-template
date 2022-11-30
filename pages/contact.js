import Head from "next/head";

import PageTitle from "../components/PageTitle";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Freelancer</title>
        <meta
          name="description"
          content="Freelancer is a landing page template built with NextJS & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto w-3/5 py-36">
        <PageTitle title="Contact" />
        <form method="POST" action="https://herotofu.com/start">
          <label class="mb-6 block">
            <span class="text-gray-700">Your name</span>
            <input
              type="text"
              name="name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Joe Bloggs"
            />
          </label>
          <label class="mb-6 block">
            <span class="text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="joe.bloggs@example.com"
              required
            />
          </label>
          <label class="mb-6 block">
            <span class="text-gray-700">Message</span>
            <textarea
              name="message"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="Tell us what you're thinking about..."
            ></textarea>
          </label>
          <div class="mb-6">
            <button className="border-2 border-sky-600 bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-7 font-bold uppercase tracking-widest text-white hover:border-2 hover:border-sky-600 hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-sky-600">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
