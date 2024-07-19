import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-[#272727] bg-opacity-100 w-full sticky top-0 text-white p-4 z-50 flex justify-between items-center">
      <div className="flex items-center w-full justify-between space-x-4">
        <Image
          src="/nmims.png"
          alt="NMIMS Logo"
          width={200}
          height={150}
          className="cursor-pointer"
        />
      
      </div>
    </nav>
  );
}
