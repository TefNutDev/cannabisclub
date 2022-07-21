import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Map from "../components/Map";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";




export default function Home() {
  return (
    <>
      <Head>
        <title>Cannabis Club</title>
        <meta name="description" content="Irish Owned Cannabis Club in Lanzarote, Canary Islands, Spain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="THC LANZAROTE"
        message="THE HIGHGRADE COLLECTIVE!
                CANNABIS SOCIAL CLUB."
      />
      <Slider slides={SliderData} />
      <Instagram />
      <Map />
      
    </>
  );
}
