"use client";

import Gallery from "components/Galeria";
import AboutUs from "components/AboutUs";
import Contact from "components/Contact";
import Hero from "components/Hero";
import Services from "components/Services";

export default function Home() {
    return (
        <div className="home-page">
            <Hero />
            <AboutUs />
            <Gallery />
            <Services />
            <Contact />
        </div>
    );
}
