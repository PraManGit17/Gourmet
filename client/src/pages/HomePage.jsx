import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import Navbar from '../components/Navbar';
const HomePage = () => {


  const { user, logout } = useAuthStore();
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { title: 'Recipe One', rating: '4.9 / 5', method: 'Baking', author: 'Chef Ella' },
    { title: 'Recipe Two', rating: '4.7 / 5', method: 'Grilling', author: 'Chef Max' },
    { title: 'Recipe Three', rating: '4.8 / 5', method: 'Steaming', author: 'Chef Nia' },
    { title: 'Recipe Four', rating: '4.6 / 5', method: 'Frying', author: 'Chef Leo' },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };


  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      {/* Section 1 */}
      <div className='h-full w-full flex item-center justify-center px-15'>

        <div className='h-[80.8vh] w-1/2 flex flex-col items-start py-12'>
          <p className="text-lg font-medium text-gray-500 mb-1">
            <span className='text-black font-semibold'>Gourmet</span>: A WorldWide Cusine Collection!
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
            Discover <br />
            Finest Delicacies
          </h1>
          <p className="text-lg text-gray-500 mt-6 max-w-xl">
            Looking for authentic and delicious recipes? <span className='text-black font-semibold'>Gourmet</span> brings you a curated selection
            of global recipes to inspire your culinary journey.
          </p>

          <div className='flex gap-5'>
            <button className="mt-8 px-4 py-3 bg-gray-800 text-white border-2 border-white rounded-full text-sm font-medium hover:scale-105 hover:bg-white hover:text-gray-800 hover:border-2 hover:border-gray-800 transition-all w-fit">
              Explore Recipes
            </button>
            <button className="mt-8 px-5 py-3 bg-white text-gray-800 border-2 border-gray-800 rounded-full text-sm font-medium hover:scale-110 hover:bg-gray-800 hover:text-white hover:border-2 hover:border-white transition-all w-fit">
              Post Recipes
            </button>
          </div>
        </div>

        <div className='h-[80.8vh] w-1/2 border-2'>
          <div className="relative w-[700px] h-[400px] mx-auto flex items-center justify-center">
            {/* Cards Stack */}
            {cards.map((card, index) => {
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % cards.length;
              const isPrev = index === (activeIndex - 1 + cards.length) % cards.length;

              let transform = 'translate-x-0 scale-100 z-30';
              if (isNext) transform = 'translate-x-12 scale-95 z-20';
              if (isPrev) transform = '-translate-x-12 scale-95 z-20';
              if (!isActive && !isNext && !isPrev) transform = 'scale-90 z-10 opacity-0';

              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform ${transform}`}
                >
                  <div className="rounded-2xl shadow-xl bg-white p-6 h-full flex flex-col justify-between">
                    <h2 className="text-2xl font-bold">{card.title}</h2>
                    <div className="text-sm text-gray-500 flex flex-col gap-1">
                      <p><strong>Rating:</strong> {card.rating}</p>
                      <p><strong>Method:</strong> {card.method}</p>
                      <p><strong>Author:</strong> {card.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              <button
                onClick={prevSlide}
                className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-600"
              >
                ◀
              </button>
              <button
                onClick={nextSlide}
                className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-600"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className='min-h-screen flex item-center justify-center border-2 border-black p-4'>

      </div>
    </div>
  )
}

export default HomePage
