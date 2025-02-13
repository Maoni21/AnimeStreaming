import React, { useState } from 'react';

const TokyoCalling = ({
                          backgroundImage = "https://image.noelshack.com/fichiers/2025/07/3/1739372698-wallpaperflare-1.jpg",
                          animes = [
                              {
                                  id: 'home',
                                  title: 'HOME',
                                  fullTitle: 'TOKYO\nCALLING',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/4/1739436496-wallpaperflare-2.png',
                                  backgroundUrl: "https://image.noelshack.com/fichiers/2025/07/3/1739372698-wallpaperflare-1.jpg",
                                  videoUrl: "",
                                  description: "Votre portail vers le monde des animes"
                              },
                              {
                                  id: 1,
                                  title: 'MHA',
                                  fullTitle: 'MY HERO\nACADEMIA',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/3/1739372767-35-strongest-my-hero-academia-characters-ranked-2021-updated-1.png',
                                  backgroundUrl: 'https://image.noelshack.com/fichiers/2025/07/4/1739435821-wallpaperflare-4.jpg',
                                  videoUrl: "https://streamingcrossguild.s3.eu-north-1.amazonaws.com/My+Hero+Academia+-+Official+Opening.mp4",
                                  description: "Dans un monde où 80% de la population a développé des super-pouvoirs, un garçon né sans pouvoir aspire à devenir le plus grand des héros."
                              },
                              {
                                  id: 2,
                                  title: 'JJK',
                                  fullTitle: 'JUJUTSU\nKAISEN',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/3/1739372913-cycle.png',
                                  backgroundUrl: 'https://image.noelshack.com/fichiers/2025/07/4/1739435897-save-follow-jujutsu-kaisen-1.jpg',
                                  videoUrl: "https://streamingcrossguild.s3.eu-north-1.amazonaws.com/JUJUTSU+KAISEN+Opening++Kaikai+Kitan+by+Eve.mp4",
                                  description: "Un lycéen rejoint une organisation secrète d'Exorcistes pour combattre de puissantes Malédictions."
                              },
                              {
                                  id: 3,
                                  title: 'KNY',
                                  fullTitle: 'KIMETSU NO\nYAIBA',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/3/1739373004-e58c28f5b50cf13b6d8a481b65fa30b8-1.png',
                                  backgroundUrl: 'https://image.noelshack.com/fichiers/2025/07/4/1739435945-e58c28f5b50cf13b6d8a481b65fa30b8-2.jpg',
                                  videoUrl: "https://streamingcrossguild.s3.eu-north-1.amazonaws.com/Demon+Slayer+-+Opening+1++4K++60FPS++Creditless+.mp4",
                                  description: "Un jeune garçon devient pourfendeur de démons après que sa famille a été massacrée et sa sœur transformée en démon."
                              },
                              {
                                  id: 4,
                                  title: 'AOT',
                                  fullTitle: 'ATTACK ON\nTITAN',
                                  imageUrl: 'https://image.noelshack.com/fichiers/2025/07/4/1739434505-hd-wallpaper-288-1-3.png',
                                  backgroundUrl: 'https://image.noelshack.com/fichiers/2025/07/4/1739436059-wallpaperflare-3.jpg',
                                  videoUrl: "https://streamingcrossguild.s3.eu-north-1.amazonaws.com/Attack+on+Titan+Opening+1++Feuerroter+Pfeil+und+Bogen.mp4",
                                  description: "L'humanité lutte pour sa survie contre des créatures humanoïdes géantes, à l'abri derrière d'immenses murs protégeant leur dernier bastion."
                              },
                          ]
                      }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeBackground, setActiveBackground] = useState(backgroundImage);
    const [activeTitle, setActiveTitle] = useState('TOKYO\nCALLING');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAnime, setSelectedAnime] = useState(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % animes.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + animes.length) % animes.length);
    };

    const handleCardClick = (anime) => {
        setActiveBackground(anime.backgroundUrl);
        setActiveTitle(anime.fullTitle);
        setSelectedAnime(anime);
    };

    const openModal = () => {
        if (selectedAnime && selectedAnime.id !== 'home') {
            setIsModalOpen(true);
        }
    };

    const closeModal = (e) => {
        if (e) {
            e.stopPropagation();
        }
        setIsModalOpen(false);
    };

    return (
        <div
            className="min-h-screen text-white flex items-end bg-gray-600 bg-cover bg-center bg-no-repeat transition-all duration-500"
            style={{
                backgroundImage: `url(${activeBackground})`
            }}
        >
            <div className="w-full p-8">
                <div className="flex flex-row gap-8 max-w-[90vw] mx-auto">
                    {/* Section Titre - Côté gauche */}
                    <div className="w-1/3">
                        <h1 className="text-7xl font-bold tracking-wider mb-4 transition-all duration-500 whitespace-pre-line">
                            {activeTitle}
                        </h1>
                        <p className="text-lg mb-6">
                            {selectedAnime?.description || "Tokyo Calling is your destination for everything Anime. From Anime news, art, blogs, streams, videos, tik-toks, cosplay everything is here!"}
                        </p>
                        <div className="flex gap-4">
                            <button className="border border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                                <span className="sr-only">Bookmark</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </button>
                            {selectedAnime?.id !== 'home' && (
                                <button
                                    onClick={openModal}
                                    className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-gray-800 transition-colors flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                    Regarde Maintenant
                                </button>
                            )}
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
                                        onClick={() => handleCardClick(anime)}
                                    >
                                        <img
                                            src={anime.imageUrl}
                                            alt={anime.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"/>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/50">
                                            <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                                                {anime.id === 'home' ? (
                                                    <div className="flex items-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                        </svg>
                                                        {anime.title}
                                                    </div>
                                                ) : anime.title}
                                            </h3>
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

            {/* Modal Video */}
            {isModalOpen && selectedAnime && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
                    onClick={closeModal}
                >
                    <div
                        className="bg-gray-900 rounded-lg overflow-hidden w-full max-w-4xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative">
                            <video
                                className="w-full aspect-video"
                                controls
                                autoPlay
                            >
                                <source src={selectedAnime.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{selectedAnime.fullTitle.replace('\n', ' ')}</h2>
                            <p className="text-gray-300">{selectedAnime.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TokyoCalling;