import Link from "next/link";

export default function Button({ title, link }) {
  return (
    <button className="border-2 border-sky-600 bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-7 font-bold uppercase tracking-widest text-white hover:border-2 hover:border-sky-600 hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-sky-600">
      <Link href={link}>{title}</Link>
    </button>
  );
}
