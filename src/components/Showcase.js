import Image from 'next/image';

const Showcase = () => {
    return (
        <div className="relative pt-4 h-[500px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-500px]">
            <Image
                src="https://images.unsplash.com/photo-1575867094974-9e16b6f55360?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                layout="fill"
                objectFit="cover"
                className="absolute pt-5 pb-4 inset-0 w-full h-full object-cover object-center scale-110"
                alt="Fire background"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 w-full text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md">
                    Russell Volunteer Fire Department
                </h1>
            </div>
        </div>
    );
};

export default Showcase;
