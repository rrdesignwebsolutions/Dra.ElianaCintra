export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/images/logo Eli variação.png" alt="Dra. Eliana Cintra" className="h-20 brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-4">
              Cuidando da saúde das crianças com amor, dedicação e experiência há mais de 30 anos.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              CRM: 72069
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dra.elianacintra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="mb-4">Links Rápidos</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-pink-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-pink-400 transition-colors">Sobre</a></li>
              <li><a href="#especialidades" className="hover:text-pink-400 transition-colors">Especialidades</a></li>
              <li><a href="#depoimentos" className="hover:text-pink-400 transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-pink-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4">Contato</h5>
            <ul className="space-y-2 text-gray-400">
              <li>(35) 99935-3010</li>
              <li>Rua Antenor Viana Braga n. 249 Varginha, Itajubá/MG. CEP: 37501-174</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Dra. Eliana Cintra - Pediatria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
