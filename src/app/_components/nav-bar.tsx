/* Author: Taylor Walenczyk
 * Description: Allows users to view blog posts within a specific category.
 */

export function NavBar() {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                Backpacking
            </h4>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                Fastpacking 
            </h4>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                Bikepacking 
            </h4>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                Racing 
            </h4>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                Training 
            </h4>
        </section>
    );
}
