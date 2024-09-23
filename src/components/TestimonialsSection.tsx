"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = [
    {
        "quote": "This platform has completely transformed my music career. The exposure and opportunities I've received are unparalleled.",
        "name": "Alex Johnson",
        "title": "Independent Artist"
    },
    {
        "quote": "As a music producer, finding fresh talent has never been easier. The quality of artists here is top-notch.",
        "name": "Samantha Lee",
        "title": "Music Producer"
    },
    {
        "quote": "I love how user-friendly and intuitive the website is. It makes discovering new music a joy.",
        "name": "Michael Brown",
        "title": "Music Enthusiast"
    },
    {
        "quote": "The community here is incredibly supportive. I've made valuable connections and collaborations.",
        "name": "Emily Davis",
        "title": "Singer-Songwriter"
    },
    {
        "quote": "The resources and tools available have helped me refine my skills and grow as an artist.",
        "name": "Chris Martin",
        "title": "Guitarist"
    }
]

export default function TestimonialsSection() {
    return (
        <div className="text-white">
            {/* heading */}
            <div>Melodies of Success: Voices of Our Community

            </div>

            {/* testimonials cards*/}
            <div>
                <div>
                    <InfiniteMovingCards
                        items={Testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}
