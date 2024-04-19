import React, { useState } from "react";
import { ChevronRightIcon, XIcon } from "@heroicons/react/solid";// Import icons from your preferred icon library
import { Button } from "flowbite-react"; // You can use Button from Flowbite or any other library you prefer

const FilterSidebar = ({ onApplyFilters }) => {
  // State to manage the selected filters
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedColor, setSelectedColor] = useState([]);
  
  // Categories, price ranges, and colors
  const categories = ["All", "Men", "Women", "Kids"];
  const priceRanges = ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"];
  const colors = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
  ];

  // Function to handle applying filters
  const applyFilters = () => {
    const filters = {
      category: selectedCategory,
      priceRange: selectedPriceRange,
      color: selectedColor,
    };
    onApplyFilters(filters);
  };

  // Function to handle color selection
  const handleColorSelection = (color) => {
    if (selectedColor.includes(color)) {
      setSelectedColor(selectedColor.filter((c) => c !== color));
    } else {
      setSelectedColor([...selectedColor, color]);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 h-full">
      {/* Filter by category */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mr-2"
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter by price range */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <ul>
          {priceRanges.map((range, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  value={range}
                  checked={selectedPriceRange === range}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="mr-2"
                />
                {range}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter by color */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value={color.value}
                  checked={selectedColor.includes(color.value)}
                  onChange={() => handleColorSelection(color.value)}
                  className="mr-2"
                />
                {color.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply filters button */}
      <button
        onClick={applyFilters}
        className="w-full bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Apply Filters
      </button>
    </div>
  );
};

const filter = () => {
  // State to manage the visibility of the filter sidebar
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Function to handle toggling the filter sidebar
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Function to handle applying filters (you can modify this function as needed)
  const handleApplyFilters = (filters) => {
    console.log("Applied filters:", filters);
    // You can implement your filtering logic here
  };

  return (
    <div className="flex">
      {/* Filter button */}
      <div className="p-4">
        <Button
          onClick={toggleFilter}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          {isFilterOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <ChevronRightIcon className="w-6 h-6" />
          )}
          <span className="ml-2">{isFilterOpen ? "Close Filter" : "Open Filter"}</span>
        </Button>
      </div>

      {/* Filter sidebar */}
      {isFilterOpen && (
        <FilterSidebar onApplyFilters={handleApplyFilters} />
      )}

      {/* Main content area */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
        <h1>Main Content Area</h1>
      </div>
    </div>
  );
};

export default filter;
