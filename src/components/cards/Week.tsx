import React from "react";
import { FaStar } from "react-icons/fa"; // Star icon
import { FiBookmark } from "react-icons/fi"; // Bookmark icon

const Week: React.FC = () => {
  const cardData = [
    {
      image: "https://via.placeholder.com/300x200", // Replace with real image URLs
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Egg Fried Rice",
      cookingTime: "15 mins",
      rating: 5,
      reviews: 18,
    },
  ];

  return (
    <section className="p-6 max-w-7xl mx-auto bg-gray-50">
     {/* Section Header */}
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-3xl font-bold text-gray-800">Most Recipe Of The Week</h2>
      <p className="text-gray-600 mt-2">
        Satisfy your cravings in a flash! Explore our Quick & Easy Meals for
        effortless recipes without compromising on mouthwatering taste.
      </p>
    </div>
    {/* View All Recipes Button */}
    <button className="text-blue-600 font-semibold hover:underline">
      View All Recipes
    </button>
  </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Bookmark Icon */}
            <div className="absolute top-3 left-3 bg-white rounded-full p-2">
              <FiBookmark className="text-gray-500 text-lg" />
            </div>

            {/* Image */}
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{data.title}</h3>
              <p className="text-gray-600 text-sm">
                Cooking time: {data.cookingTime}
              </p>

              {/* Rating */}
              <div className="flex items-center mt-2">
                {Array.from({ length: data.rating }).map((_, i) => (
                  <FaStar key={i} className="text-green-500 text-sm mr-1" />
                ))}
                <span className="text-gray-600 ml-1 text-sm">
                  ({data.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Week;
