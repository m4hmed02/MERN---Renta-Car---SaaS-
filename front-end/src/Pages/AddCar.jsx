import { useState } from 'react';
import Header from '../Components/Header';
import { Plus } from 'lucide-react';
import Footer from '../Components/Footer';

const AddCar = () => {



    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        model: '',
        year: new Date().getFullYear(),
        price: 0,
        description: '',
        image: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => currentYear - i);


    const brands = [
        "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz",
        "Audi", "Volkswagen", "Hyundai", "Kia", "Subaru", "Mazda", "Dodge",
        "Jeep", "Lexus", "GMC", "Cadillac", "Acura", "Infiniti"
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name == "image") {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault()


        const data = new FormData()
        data.append("name", formData.name)
        data.append("brand", formData.brand)
        data.append("model", formData.model)
        data.append("year", formData.year)
        data.append("price", formData.price)
        data.append("description", formData.description)
        data.append("image", formData.image)

        try {
            let result = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/addVehicle`, {
                "method": "POST",
                body: data
            })
            let res = await result.json()
            console.log(res)
        } catch (e) {
            console.log("Unable to Register User!")
        }


        console.log('Form Data:', formData);
        setSubmitted(true);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-12 px-4 ">

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-8 mt-15">
                        <div className="mb-8">
                            <h1 className="text-3xl mb-2">Add New Vehicle</h1>
                            <p className="text-gray-600">
                                List your vehicle on the platform and start earning
                            </p>
                        </div>

                        {submitted ? (
                            <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center">
                                <div className="text-green-600 mb-2 text-4xl">✓</div>
                                <h3 className="text-xl text-green-800 mb-2">Vehicle Added Successfully!</h3>
                                <p className="text-green-700">Your vehicle is now live on the platform.</p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                encType='multipart/form-data'
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                                            Vehicle Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., Tesla Model 3"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
                                        <select
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        >
                                            <option value="">Suzuki</option>
                                            {brands.map(brand => (
                                                <option
                                                    key={brand}
                                                    name={brand}
                                                    value={brand}
                                                >
                                                    {brand}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="model" className="block text-sm mb-2 text-gray-700">
                                            Model *
                                        </label>
                                        <input
                                            type="text"
                                            id="model"
                                            name="model"
                                            required
                                            value={formData.model}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., Model 3"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="year" className="block text-sm mb-2 text-gray-700">
                                            Year *
                                        </label>
                                        <select
                                            id="year"
                                            name="year"
                                            required
                                            value={formData.year}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {years.map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="price" className="block text-sm mb-2 text-gray-700">
                                            Price per Day ($) *
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            required
                                            min="1"
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="e.g., 85"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="image" className="block text-sm mb-2 text-gray-700">
                                            Upload Vehicle Image *
                                        </label>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            onChange={handleChange}
                                            className='w-full rounded-md border-black/30 text-black text-sm file:mr-4 file:rounded-md file:border-0 file:bg-black file:px-4 file:py-3 file:text-white hover:file:bg-gray-800'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm mb-2 text-gray-700">
                                        Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        required
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Describe your vehicle's features, condition, and any special notes..."
                                    />
                                </div>


                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Plus className="size-5" />
                                    Add Vehicle
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

};

export default AddCar;
