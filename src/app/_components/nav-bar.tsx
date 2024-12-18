/* Author: Taylor Walenczyk
 * Description: Allows users to view blog posts within a specific category.
 * 
 * On-Hover functionality inspired by: 
 * https://medium.com/@mustafaazad03/elevate-your-website-navigation-a-step-by-step-guide-to-hover-activated-navbars-in-next-js-414f310c1468
 */
'use client'

import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { motion } from "motion/react";
import Link from 'next/link';

/* Menu Items */
const footMenu = [
    {
        name: "Backpacking",
        description: "Backpacking posts",
        href: "foot/backpacking",
    },
    {
        name: "Fastpacking",
        description: "Fastpacking posts",
        href: "foot/fastpacking",
    },
    {
        name: "Trail Running",
        description: "Trail running posts",
        href: "foot/trail_running",
    },
];

export function NavBar() {
    const [footOpen, setFootOpen]               = useState(false);

    const handleHover = (menuType: string, isOpen: boolean) => {
        switch (menuType) {
            case "FOOT":
                setFootOpen(isOpen);
                break;

            case "all":
            default:
                setFootOpen(false);
                break;
        }
    };

    return (
        <div 
            className="bg-transparent z-50 mx-auto flex md:max-w-7xl w-[90%] xl:w-full items-center justify-between py-6"
            onMouseLeave={() => handleHover("all", true)} 
            >
            {/* Navbar Content */}
            {/* Desktop Navigation Links */}
            <Link href="/bike"
                className="text-white hover:text-gradient"
                onMouseEnter={() => handleHover("BIKE", true)}
                >
                By Bike
            </Link>
            <Link 
                href="/board" 
                className="text-white hover:text-gradient"
                onMouseEnter={() => handleHover("BOARD", true)}
                >
                By Board
            </Link>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <Popover.Button
                        onMouseEnter={() => handleHover("FOOT", true)}
                        className="flex items-center gap-x-1 leading-6 text-white hover:text-gradient outline-none"
                        >
                        <Link href="/foot">By Foot</Link>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        appear={footOpen}
                        show={footOpen}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute top-full z-10 mt-3 overflow-hidden rounded-3xl shadow-lg bg-[#09160E] flex flex-col">
                            {footMenu.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm leading-6 hover:bg-gray-800">{item.name}</Link>
                            ))}
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </Popover.Group>
            <Link href="/hand"
                className="text-white hover:text-gradient"
                onMouseEnter={() => handleHover("HAND", true)}
                >
                By Hand
            </Link>
            <Link href="/racing" 
                className="text-white hover:text-gradient"
                onMouseEnter={() => handleHover("RACING", true)}
                >
                Racing
            </Link>
            <Link href="/training"
                className="text-white hover:text-gradient"
                onMouseEnter={() => handleHover("TRAINING", true)}
                >
                Training
            </Link>
        </div>
    );
}
