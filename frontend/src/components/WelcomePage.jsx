import React, { useState } from 'react';

const TokyoCalling = ({
                          backgroundImage = "https://image.noelshack.com/fichiers/2025/07/3/1739372698-wallpaperflare-1.jpg",
                          animes = [
                              {
                                  id: 1,
                                  title: 'BNHA',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/3/1739372767-35-strongest-my-hero-academia-characters-ranked-2021-updated-1.png'
                              },
                              {
                                  id: 2,
                                  title: 'JJK',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/3/1739372913-cycle.png'
                              },
                              {
                                  id: 3,
                                  title: 'KNY',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/3/1739373004-e58c28f5b50cf13b6d8a481b65fa30b8-1.png'
                              },
                              {
                                  id: 4,
                                  title: 'AOT',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/4/1739434505-hd-wallpaper-288-1-3.png'
                              },

                          ]
                      }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % animes.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + animes.length) % animes.length);
    };

    return (
        <div
            className="min-h-screen text-white flex items-end bg-gray-600 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className="w-full p-8">
                <div className="flex flex-row gap-8 max-w-[90vw] mx-auto">
                    {/* Section Titre - Côté gauche */}
                    <div className="w-1/3">
                        <h1 className="text-7xl font-bold tracking-wider mb-4">
                            TOKYO<br />
                            CALLING
                        </h1>
                        <p className="text-lg mb-6">
                            Tokyo Calling is your destination for everything Anime.
                            From Anime news, art, blogs, streams, videos, tik-toks,
                            cosplay everything is here!
                        </p>
                        <div className="flex gap-4">
                            <button className="border border-white rounded-full w-12 h-12 flex items-center justify-center">
                                <span className="sr-only">Bookmark</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </button>
                            <button className="px-6 py-3 border border-white rounded-full">
                                explore blogs
                            </button>
                        </div>
                    </div>

                    {/* Section Carousel - Côté droit */}
                    <div className="w-2/3">
                        <div className="mb-4">
                            <h2 className="text-sm flex items-center gap-2">
                                featured anime
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            </h2>
                        </div>

                        <div className="relative overflow-hidden">
                            <div
                                className="flex gap-4 transition-transform duration-300"
                                style={{
                                    transform: `translateX(-${currentSlide * (100 / animes.length)}%)`,
                                }}
                            >
                                {animes.map((anime) => (
                                    <div
                                        key={anime.id}
                                        className="flex-shrink-0 w-56 h-80 rounded-lg relative overflow-hidden group cursor-pointer"
                                    >
                                        <img
                                            src={anime.imageUrl}
                                            alt={anime.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"/>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/50">
                                            <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:translate-y-[-4px]">{anime.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center gap-4 mt-6">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors"
                                >
                                    <span className="sr-only">Previous</span>
                                    &#8249;
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors"
                                >
                                    <span className="sr-only">Next</span>
                                    &#8250;
                                </button>

                                {/* Progress bar */}
                                <div className="flex-1 h-px bg-white/20 relative ml-4">
                                    <div
                                        className="absolute h-full bg-white transition-all duration-300"
                                        style={{ width: `${((currentSlide + 1) / animes.length) * 100}%` }}
                                    ></div>
                                </div>

                                {/* Slide counter */}
                                <div className="text-4xl font-light ml-4">
                                    {String(currentSlide + 1).padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokyoCalling;