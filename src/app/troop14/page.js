import Image from 'next/image';

const Troop14 = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Image at the top */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/path/to/your/image.jpg" // Replace with your image path
                    alt="Troop 14"
                    width={600} // Adjust as per your image's aspect ratio
                    height={400} // Adjust as per your image's aspect ratio
                />
            </div>

            {/* Two-column layout for content */}
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                    {/* Content for the first column */}
                    <div className="bg-gray-200 p-4">
                        <p>Information about Troop 14.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-2">
                    {/* Content for the second column */}
                    <div className="bg-gray-200 p-4">
                        <p>Additional details, events, or news.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Troop14;
