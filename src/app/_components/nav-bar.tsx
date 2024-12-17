/* Author: Taylor Walenczyk
 * Description: Allows users to view blog posts within a specific category.
 * 
 * On-Hover functionality inspired by: 
 * https://medium.com/@mustafaazad03/elevate-your-website-navigation-a-step-by-step-guide-to-hover-activated-navbars-in-next-js-414f310c1468
 */
'use client'

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
 ArrowPathIcon,
 Bars3Icon,
 ChartPieIcon,
 CursorArrowRaysIcon,
 FingerPrintIcon,
 SquaresPlusIcon,
 XMarkIcon,
} from "@heroicons/react/24/outline";
import {
 ChevronDownIcon,
 PhoneIcon,
 PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { navVariants } from "@/motion";
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
    const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
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
            className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 z-50"
            onMouseLeave={() => handleHover("all", true)} 
            >
            {/* Navbar Content */}
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                    >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            {/* Desktop Navigation Links */}
            <Link href="/bike" className="text-white hover:text-gradient">
                By Bike
            </Link>
            <Link href="/board" className="text-white hover:text-gradient">
                By Board
            </Link>
            <Popover>
                <Popover.Button
                    onMouseEnter={() => handleHover("FOOT", true)}
                    >
                    By Foot
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
                    <Popover.Panel className="z-10">
                        {footMenu.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative flex items-center gap-x-6">{item.name}</Link>
                        ))}
                    </Popover.Panel>
                </Transition>
            </Popover>
            <Link href="/hand" className="text-white hover:text-gradient">
                By Hand
            </Link>
            <Link href="/racing" className="text-white hover:text-gradient">
                Racing
            </Link>
            <Link href="/training" className="text-white hover:text-gradient">
                Training
            </Link>
               
            {/* Mobile Menu */}
            <Transition.Root show={mobileMenuOpen}>
                <Dialog as="div" className="fixed inset-0 z-40 lg:hidden" onClose={setMobileMenuOpen}>
                    {/* Mobile Menu Content */}
                </Dialog>
            </Transition.Root>
        </div>
    );
}
