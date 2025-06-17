'use client';

import React from 'react';

const navigation = [
  { name: 'O nás', href: '#about' },
  { name: 'Služby', href: '#services' },
  { name: 'Kontakt', href: '#contact' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="bg-gray-800 p-4 shadow-lg fixed w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-green-400 font-mono">
            Testovací Kavárna "U Kódu"
          </a>
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-300 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile menu button - simplified for brevity, could use a stateful component */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-green-300 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center text-center bg-gray-950"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 opacity-90"></div>
          <div className="relative z-10 p-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight font-mono animate-fade-in-down">
              Testovací Kavárna "U Kódu"
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
              Nejlepší káva pro vaše bugy.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
            >
              Navštivte nás
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-green-400 mb-8">O nás</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-green-400 text-center mb-12">Naše Služby</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-white mb-4">Káva & Nápoje</h3>
                <p className="text-gray-300">Od klasického espressa po exotické kávy a speciální "debuggovací doppio" drinky.</p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-white mb-4">Pracovní Prostředí</h3>
                <p className="text-gray-300">Klidné koutky s Wi-Fi a dostatkem zásuvek pro nerušenou práci a studium.</p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-white mb-4">Setkání & Akce</h3>
                <p className="text-gray-300">Ideální místo pro neformální schůzky, workshopy a malé komunitní akce.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-green-400 text-center mb-12">Kontaktujte Nás</h2>
            <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border border-green-600">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Jméno</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    placeholder="vas@email.cz"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Zpráva</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    placeholder="Vaše zpráva..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md transform hover:scale-105"
                >
                  Odeslat Zprávu
                </button>
              </form>

              <div className="mt-10 text-center text-gray-300 text-lg">
                <p className="mb-2">
                  <strong className="text-white">Email:</strong> <span className="text-green-400">test@kavarna.cz</span>
                </p>
                <p className="mb-2">
                  <strong className="text-white">Telefon:</strong> <span className="text-green-400">+420 777 123 456</span>
                </p>
                <p>
                  <strong className="text-white">Adresa:</strong> Bugfixová 1, 110 00 Praha 1
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 p-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.</p>
      </footer>

      {/* Basic Tailwind CSS animations for demonstration */}
      <style jsx global>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out fisheries;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s backwards;
        }
      `}</style>
    </div>
  );
}
