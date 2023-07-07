import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <div className=" p-5 bg-zinc-300">
        <ul className=" flex gap-x-3 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/menu"}>Menu</Link>
        </ul>
      </div>
      {children}
      <h1 className=" text-center py-7 bg-zinc-300">Footer</h1>
    </div>
  );
}
