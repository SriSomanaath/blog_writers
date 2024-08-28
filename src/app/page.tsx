import Blog from "@/components/Blog";
import Brands from "@/components/Brands/index";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features/page";
import Hero from "@/components/Hero/page";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import AnimatedCursor from "react-animated-cursor";

export const metadata: Metadata = {
  title: "Opencv - Blog Masters",
  description: "This is Home for Startup Nextjs Template",
};

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <ScrollUp />
      <Hero />
      <Brands />
      <Features />
      <Video />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
