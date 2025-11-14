interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === category
            ? 'bg-green-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
