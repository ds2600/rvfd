const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Emergency Notice */}
            <div className="bg-red-600 text-white text-center p-4 mb-6">
                <h1 className="text-3xl font-bold">For Emergencies, Dial 911</h1>
            </div>

            {/* Contact Information */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-lg mb-2">Russell Volunteer Fire Department</p>
                <p className="text-lg mb-2">111 Perrigo Lane, Russell, Pennsylvania</p>
                <p className="text-lg font-semibold">Non-Emergency Number: (814) 757-8211</p>
            </div>
        </div>
    );
};

export default Contact;
