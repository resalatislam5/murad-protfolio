import Image from "next/image";
import img from "@/app/ass/banner.jpg";
export default function Home() {
  return (
    <main>
      <div className={`h-[100vh] w-full bg-cover bg-banner `}>
        <Image src={img} alt="" />
      </div>
    </main>
  );
}
