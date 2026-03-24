"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  BookOpen,
  Globe,
  Leaf,
} from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: "intro",
    type: "title",
    title: "Le Hérisson",
    subtitle: "À travers l'histoire, les mythes et la culture",
    image: "https://active-radio.fr/wp-content/uploads/2025/01/herisson.jpg",
  },
  {
    id: "presentation",
    type: "split",
    title: "I. Présentation de l'animal",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-serif font-bold text-stone-800 flex items-center gap-3">
            <BookOpen className="text-amber-600" /> Étymologie
          </h3>
          <p className="text-xl text-stone-600 mt-4 leading-relaxed">
            Le mot "hérisson" vient du bas latin{" "}
            <i className="text-stone-800 font-medium">ericionem</i>, qui découle
            lui-même du latin classique{" "}
            <i className="text-stone-800 font-medium">ericius</i>. Sa racine
            indo-européenne <i className="text-stone-800 font-medium">ghers-</i>{" "}
            signifie tout simplement <strong>"se hérisser"</strong> ou{" "}
            <strong>"se dresser"</strong>.
          </p>
        </div>
        <div className="pt-4 border-t border-stone-200">
          <h3 className="text-3xl font-serif font-bold text-stone-800 flex items-center gap-3">
            <Globe className="text-amber-600" /> Premières représentations
          </h3>
          <p className="text-xl text-stone-600 mt-4 leading-relaxed">
            Les premières traces remontent à l'Antiquité, notamment en{" "}
            <strong>Égypte ancienne</strong> (vers 3000 av. J.-C.), où l'on a
            retrouvé de nombreuses amulettes.
            <br />
            <br />
            Pline l'Ancien raconte que le hérisson fait exprès de tomber sur des
            pommes ou des raisins pour les accrocher à ses piquants. À cette
            époque, l'animal incarne{" "}
            <strong>l'ingéniosité et la prudence</strong>.
          </p>
        </div>
      </div>
    ),
    image:
      "https://www.francebleu.fr/pikapi/images/46f52440-82b8-4801-bb49-357ee0ab7235/1200x680?webp=false",
  },
  {
    id: "contes-1",
    type: "split-reverse",
    title: "II. Contes et légendes",
    subtitle: "Récit 1 : L'animal rusé et triomphant (Europe de l'Ouest)",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
            <strong className="text-stone-800 block mb-1 text-sm uppercase tracking-wider text-amber-600">
              Qui ?
            </strong>
            Un lièvre orgueilleux et un hérisson malin.
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
            <strong className="text-stone-800 block mb-1 text-sm uppercase tracking-wider text-amber-600">
              Quoi ?
            </strong>
            Une course à pied pariant un grand prix.
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
            <strong className="text-stone-800 block mb-1 text-sm uppercase tracking-wider text-amber-600">
              Où & Quand ?
            </strong>
            Dans un champ labouré, un dimanche matin.
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
            <strong className="text-stone-800 block mb-1 text-sm uppercase tracking-wider text-amber-600">
              Pourquoi ?
            </strong>
            Le lièvre s'est moqué de ses pattes courtes.
          </div>
        </div>
        <div className="bg-stone-800 text-stone-100 p-8 rounded-3xl shadow-lg mt-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full opacity-10 -mr-10 -mt-10"></div>
          <h4 className="font-serif text-2xl mb-4 text-amber-400">
            Résumé (Frères Grimm)
          </h4>
          <p className="text-lg leading-relaxed">
            Le hérisson place sa femme (qui lui ressemble trait pour trait) au
            bout du sillon. Le lièvre, courant d'un bout à l'autre, croit que le
            hérisson le devance toujours. Il finit par mourir d'épuisement.
            <br />
            <br />
            <span className="text-amber-200 font-medium text-xl">
              Ici, le hérisson représente l'intelligence qui triomphe de la
              force.
            </span>
          </p>
        </div>
      </div>
    ),
    image: "https://img.maganimo.com/1200x675/2025-02-03/herisson.webp",
  },
  {
    id: "contes-2",
    type: "split",
    title: "II. Contes et légendes",
    subtitle: "Récit 2 : L'animal créateur et sage (Légendes Roms)",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
            <strong className="text-stone-800 block mb-1 text-sm uppercase tracking-wider text-amber-600">
              Qui ?
            </strong>
            Dieu et un hérisson.
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
            <strong className="text-stone-800 block mb-1 text-sm uppercase tracking-wider text-amber-600">
              Quoi ?
            </strong>
            L'achèvement de la création du monde.
          </div>
        </div>
        <div className="bg-stone-800 text-stone-100 p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full opacity-10 -mr-10 -mt-10"></div>
          <h4 className="font-serif text-2xl mb-4 text-amber-400">Résumé</h4>
          <p className="text-lg leading-relaxed">
            Dieu avait créé une Terre trop grande. Ne sachant comment faire, il
            demande conseil au hérisson. L'animal suggère de "presser" ou
            "froisser" la Terre. En se contractant, elle forme montagnes et
            vallées.
            <br />
            <br />
            <span className="text-amber-200 font-medium text-xl">
              Ici, le hérisson représente la sagesse ancienne et le conseiller
              divin.
            </span>
          </p>
        </div>
        <div className="bg-amber-100 p-6 rounded-3xl border border-amber-200 text-amber-900">
          <h4 className="font-bold mb-2 text-xl flex items-center gap-2">
            <Info size={20} /> Éléments culturels
          </h4>
          <p className="text-lg leading-relaxed">
            Les <strong>sociétés agraires</strong> (Ouest) voyaient un survivant
            malin face aux prédateurs. Les <strong>peuples nomades</strong>{" "}
            (Balkans) voyaient dans sa forme de "boule" fermée un gardien de
            secrets anciens.
          </p>
        </div>
      </div>
    ),
    image:
      "https://cdn-s-www.vosgesmatin.fr/images/AC4050D3-39CA-488F-859A-0D796ACEB80A/NW_raw/a-la-ville-le-mammifere-insectivore-constitue-un-precieux-auxiliaire-pour-le-jardinier-photo-dr-1556860600.jpg",
  },
  {
    id: "moyen-age",
    type: "grid",
    title: "III. L'animal au Moyen-Âge",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-200 h-full flex flex-col justify-center relative overflow-hidden group hover:border-red-200 transition-colors">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-800"></div>
          <h3 className="text-3xl font-serif font-bold text-stone-800 mb-6">
            Le Bestiaire
          </h3>
          <p className="text-xl text-stone-600 leading-relaxed">
            Le hérisson est très souvent illustré en train de voler des raisins
            dans les vignes en les piquant sur son dos (comme dans le célèbre
            Bestiaire d'Aberdeen).
          </p>
        </div>
        <div className="bg-stone-900 text-stone-100 p-10 rounded-3xl shadow-2xl h-full flex flex-col justify-center transform md:-translate-y-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-20"></div>
          <h3 className="text-3xl font-serif font-bold text-red-400 mb-6">
            La Rupture
          </h3>
          <p className="text-xl leading-relaxed">
            Si l'Antiquité voyait cette "récolte" comme une amusante marque
            d'intelligence, le Moyen-Âge transforme cette image en un{" "}
            <strong>symbole profondément négatif et voleur</strong>.
          </p>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-200 h-full flex flex-col justify-center relative overflow-hidden group hover:border-red-200 transition-colors">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-800"></div>
          <h3 className="text-3xl font-serif font-bold text-stone-800 mb-6">
            L'explication
          </h3>
          <p className="text-xl text-stone-600 leading-relaxed">
            La vigne représente l'Église. Le hérisson, avec ses piquants
            (rappelant les ronces et le péché), devient une{" "}
            <strong>allégorie du Diable</strong> ou du pécheur cupide volant les
            âmes.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "aujourdhui",
    type: "split",
    title: "IV. L'animal aujourd'hui",
    content: (
      <div className="space-y-6">
        <div className="bg-[#E8F3E8] p-8 rounded-3xl border border-[#CDE4CD] relative overflow-hidden">
          <Leaf className="absolute -right-4 -bottom-4 text-[#CDE4CD] w-32 h-32 opacity-50" />
          <h3 className="text-2xl font-serif font-bold text-[#2E5C2E] mb-3 relative z-10">
            L'ami du jardinier
          </h3>
          <p className="text-xl text-[#3A703A] relative z-10">
            Aujourd'hui extrêmement apprécié, il est perçu comme un animal
            vulnérable, inoffensif et utile car il mange les limaces.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-stone-800 mb-3 text-xl">
              En Littérature
            </h4>
            <p className="text-lg text-stone-600">
              <em>L'Élégance du hérisson</em> (2006) : l'animal symbolise un
              personnage à l'apparence piquante mais cachant une grande douceur.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-stone-800 mb-3 text-xl">
              En Jeux Vidéo
            </h4>
            <p className="text-lg text-stone-600">
              <em>Sonic</em> : l'image en boule devient une attaque dynamique,
              créant un héros protecteur de la nature.
            </p>
          </div>
        </div>

        <div className="bg-[#FFF0F0] p-8 rounded-3xl border border-[#FFD6D6]">
          <h4 className="font-bold text-[#991B1B] mb-3 text-xl">
            L'exception : Nouvelle-Zélande
          </h4>
          <p className="text-lg text-[#7F1D1D]">
            Introduit par les colons, il y est considéré comme une{" "}
            <strong>espèce invasive</strong> car il dévore les œufs des oiseaux
            endémiques (comme le kiwi) qui nichent au sol.
          </p>
        </div>
      </div>
    ),
    image: "https://afjv.com/2018/02/180223-sonic.jpg",
  },
  {
    id: "conclusion",
    type: "quote",
    title: "Conclusion",
    content: (
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-800 leading-tight">
          "Le lien entre l'homme et le hérisson est le reflet parfait de
          l'évolution de nos mentalités."
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-xl text-stone-700 font-medium">
          <div className="flex flex-col items-center gap-2">
            <span className="bg-amber-100 px-8 py-4 rounded-full border border-amber-200 shadow-sm">
              Divinisé
            </span>
            <span className="text-sm text-stone-500 uppercase tracking-widest">
              Antiquité
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="bg-red-100 px-8 py-4 rounded-full border border-red-200 shadow-sm">
              Diabolisé
            </span>
            <span className="text-sm text-stone-500 uppercase tracking-widest">
              Moyen-Âge
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="bg-green-100 px-8 py-4 rounded-full border border-green-200 shadow-sm">
              Protégé
            </span>
            <span className="text-sm text-stone-500 uppercase tracking-widest">
              Aujourd'hui
            </span>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100 mt-12 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
            À retenir
          </div>
          <p className="text-2xl text-stone-600 leading-relaxed">
            Il est devenu le symbole de la faune sauvage de proximité que nous
            cherchons à préserver face à l'urbanisation, incarnant notre
            nouvelle volonté de protéger un équilibre écologique fragile.
          </p>
        </div>
      </div>
    ),
  },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex = currentSlide + newDirection;
      if (newIndex >= 0 && newIndex < slides.length) {
        setDirection(newDirection);
        setCurrentSlide(newIndex);
      }
    },
    [currentSlide],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        paginate(1);
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  };

  const slide = slides[currentSlide];

  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden bg-[#F5F5F0]">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-200 z-50">
        <motion.div
          className="h-full bg-stone-800"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex items-center justify-center p-8 md:p-16"
          >
            {/* Slide Layouts */}
            {slide.type === "title" && (
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center">
                <Image
                  src={slide.image!}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center text-white px-8 max-w-5xl">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-7xl md:text-9xl font-serif font-bold mb-6 drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-4xl font-light tracking-wide text-stone-200"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
              </div>
            )}

            {slide.type === "split" && (
              <div className="w-full h-full max-w-8xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 w-full h-full flex flex-col justify-center">
                  <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-4">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <h3 className="text-2xl text-stone-500 mb-10 font-serif italic">
                      {slide.subtitle}
                    </h3>
                  )}
                  {!slide.subtitle && <div className="h-10"></div>}
                  {slide.content}
                </div>
                <div className="flex-1 w-full h-[40vh] md:h-[80vh] relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src={slide.image!}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {slide.type === "split-reverse" && (
              <div className="w-full h-full max-w-8xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="flex-1 w-full h-full flex flex-col justify-center">
                  <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-4">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <h3 className="text-2xl text-stone-500 mb-10 font-serif italic">
                      {slide.subtitle}
                    </h3>
                  )}
                  {!slide.subtitle && <div className="h-10"></div>}
                  {slide.content}
                </div>
                <div className="flex-1 w-full h-[40vh] md:h-[80vh] relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src={slide.image!}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {slide.type === "grid" && (
              <div className="w-full h-full max-w-8xl mx-auto flex flex-col">
                <div className="mb-12 text-center">
                  <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-4">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <h3 className="text-2xl text-stone-500 font-serif italic">
                      {slide.subtitle}
                    </h3>
                  )}
                </div>
                <div className="flex-1">{slide.content}</div>
              </div>
            )}

            {slide.type === "quote" && (
              <div className="w-full h-full max-w-8xl mx-auto flex flex-col items-center justify-center">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-400 uppercase tracking-widest">
                    {slide.title}
                  </h2>
                </div>
                <div className="w-full">{slide.content}</div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 w-full flex justify-between items-center px-12 z-50 pointer-events-none">
        <div className="text-stone-400 font-medium tracking-widest text-sm">
          {currentSlide + 1} / {slides.length}
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0}
            className="w-14 h-14 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-600 hover:bg-stone-50 hover:text-stone-900 disabled:opacity-30 disabled:hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={currentSlide === slides.length - 1}
            className="w-14 h-14 rounded-full bg-stone-900 shadow-md flex items-center justify-center text-white hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
