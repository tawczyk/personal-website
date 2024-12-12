/* Author: Taylor Walenczyk
 * Description: Allows users to view blog posts within a specific category.
 */
import Link from 'next/link'

export function NavBar() {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <Link 
                href="/backpacking"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                Backpacking
            </Link>
            <Link 
                href="/bikepacking"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                Bikepacking
            </Link>
            <Link 
                href="/fastpacking"
                className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
                Fastpacking
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
