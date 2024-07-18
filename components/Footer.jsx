import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex sticky bottom-0 justify-center items-center py-4 bg-zinc-950 text-white">
      <p>
        Made with{" "}
        <Heart
          className="inline-block  text-red-500 h-5 w-5 mx-1"
          fill="red"
          color="red"
        />{" "}
        by{" "}
        <Link
          href="https://gdscmpstme.com"
          className="underline italic bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 text-transparent bg-clip-text"
        >
          GDSC MPSTME
        </Link>
      </p>
    </footer>
  );
}
