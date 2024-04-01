import Logo from "@/components/Logo";
import { Search } from "lucide-react";
import Link from "next/link";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">  
    <div className=" flex items-center justify-between">
        <h1 className="py-4 md:text-3xl">
          <span className=" text-gray-500">Good morning,</span> Anmol
        </h1>
        <div className=" scale-75 md:scale-100 flex space-x-2">
          <button className=" border p-3  rounded-full">
            <Search height={20} width={20} />
          </button>
          <Link
            href={"/sage"}
            className=" dark:bg-white/20 p-2 scale-90 flex items-center rounded-md "
          >
            <Logo height={30} width={30} />{" "}
          </Link>
        </div>
      </div>         
      {children}
        
    </div>
  );
}
