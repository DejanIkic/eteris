"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import image1 from "@/public/images/gallery/img1.webp";
import image2 from "@/public/images/gallery/img2.jpg";
import image3 from "@/public/images/gallery/img3.jpg";
import { StaticImageData } from "next/image";

interface GalleryItem {
    id: string;
    image: StaticImageData;
}

interface GalleryProps {
    heading?: string;
    items?: GalleryItem[];
}

const Gallery = ({
    heading = "Galerija",
    items = [
        {
            id: "item-1",
            image: image1,
        },
        {
            id: "item-2",
            image: image2,
        },
        {
            id: "item-3",
            image: image3,
        },
    ],
}: GalleryProps) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="py-32 h-screen text-foreground" id="galeria">
            <div className="max-w-7xl mx-auto">
                <div className="container mx-auto">
                    <div
                        className="flex  justify-center align-center p-6 text-foreground
                "
                    >
                        <h2 className="text-2xl font-light font-forum  ">
                            {heading}
                        </h2>
                        <div className="mt-8 flex shrink-0 items-center justify-start gap-2"></div>
                    </div>
                </div>
                <div className="w-full max-w-full flex items-center justify-center px-5">
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            carouselApi?.scrollPrev();
                        }}
                        disabled={!canScrollPrev}
                        className="disabled:pointer-events-auto"
                    >
                        <ArrowLeft className="size-5" />
                    </Button>
                    <Carousel
                        setApi={setCarouselApi}
                        opts={{
                            breakpoints: {
                                "(max-width: 768px)": {
                                    dragFree: true,
                                },
                            },
                        }}
                        className="relative w-full max-w-full"
                    >
                        <CarouselContent className="w-full max-w-full">
                            {items.map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="p-4">
                                        <div className="aspect-square flex overflow-clip rounded-xl">
                                            <div className="flex-1">
                                                <div className="relative h-full w-full transition duration-300 hover:scale-105">
                                                    <Image
                                                        src={item.image}
                                                        alt={`Gallery image ${item.id}`}
                                                        className="h-full w-full object-cover object-center"
                                                        fill
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            carouselApi?.scrollNext();
                        }}
                        disabled={!canScrollNext}
                        className="disabled:pointer-events-auto"
                    >
                        <ArrowRight className="size-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
