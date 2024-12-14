/* Author: Taylor Walenczyk
 * Description: Allows users to view blog posts within a specific category.
 */
import Link from 'next/link'

export function NavBar() {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <Link 
                href="/bike"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                By Bike
            </Link>
            <Link 
                href="/board"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                By Board
            </Link>
            <Link 
                href="/foot"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                By Foot
            </Link>
            <Link 
                href="/hand"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                By Hand
            </Link>
            <Link 
                href="/racing"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                Racing
            </Link>
            <Link 
                href="/training"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                Training
            </Link>
        </section>
    );
}
