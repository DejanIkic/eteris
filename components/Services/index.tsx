import React from "react";
import Image, { StaticImageData } from "next/image";

import service1 from "@/public/images/services/img1.jpg";
import service2 from "@/public/images/services/img2.jpg";
import service3 from "@/public/images/services/img3.jpg";
import service4 from "@/public/images/services/img4.jpg";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
}

const Services = () => {
    const services: ServiceItem[] = [
        {
            id: "service-1",
            title: "Kreativna dekoracija događaja",
            description:
                "Organizujemo profesionalne korporativne događaje koji ostavljaju trajan utisak na vaše klijente i partnere.",
            image: service1,
        },
        {
            id: "service-2",
            title: "Organizacija i koordinacija događaja",
            description:
                "Stvaramo nezaboravne trenutke za vaš najvažniji dan sa pažnjom posvećenom svakom detaljу.",
            image: service2,
        },
        {
            id: "service-3",
            title: " Unikatna vizuelna rješenja",
            description:
                "Organizujemo ekskluzivne privatne događaje prilagođene vašim željama i potrebama.",
            image: service3,
        },
        {
            id: "service-4",
            title: "Profesionalna fotografija i vizuelna memorija",
            description:
                "Profesionalno upravljanje konferencijama sa kompletnom logističkom podrškom.",
            image: service4,
        },
    ];

    return (
        <section className="py-32 h-screen text-foreground" id="services">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-light font-forum mb-4">
                        Usluge
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group">
                            <div className="aspect-square overflow-hidden rounded-full mb-4 hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-medium mb-2 text-center">
                                {service.title}
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
