import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p1>Hello World</p1>
      <Link href={"/home"}>
        <button>Click to home</button>
      </Link>
    </div>
  );
}
