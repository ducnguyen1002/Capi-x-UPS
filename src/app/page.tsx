import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/home/Banner";
import SlideHome from "@/components/home/SlideHome";
import Content from "@/components/home/Content";
import UserManual from "@/components/home/UserManual";
import MobileApp from "@/components/home/MobileApp";
import Community from "@/components/home/Community";
import Support from "@/components/home/Support";

export default function HomePage() {
  return (
    <div>
      <div className="relative  pt-16 mx-auto sm:max-w-xl md:max-w-full bg-[linear-gradient(180deg,#0E1A0D_82%,#060B06_100%)]">
        <Banner />
      </div>
      <SlideHome />
      <Content />
      <UserManual />
      <MobileApp />
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
        <Community />
        <Support />
      </div>
    </div>
  );
}
