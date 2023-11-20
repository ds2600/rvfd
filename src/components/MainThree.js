import Calendar from "./Calendar";

const MainThree = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap -mx-2">
                {/* Left Sidebar */}
                <div className="w-full sm:w-1/4 px-2">
                    <div className="bg-gray-200 p-4">
                        {/* Content for left sidebar */}
                        <p>Sidebar content goes here.</p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full sm:w-1/2 px-2">
                    <div className="bg-white p-4">
                        {/* Main area content */}
                        <p className="text-xl text-center">The website is currently being rebuilt.<br/>Stay tuned for updates!</p>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-full sm:w-1/4 px-2">
                    <div className="bg-gray-200 p-4">
                        {/* Content for right sidebar */}
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainThree;
