import { useEffect } from 'react'
import SolutionCard from '../components/SolutionCard.jsx'
import Carousel from '../components/Carousel.jsx'
import TeamCard from '../components/TeamCard.jsx'
import { equipe, figmaUrl, galeria, publicoAlvo, solucoes } from '../data/content.js'

const botaoClass =
  'mt-5 inline-block rounded-full border-2 border-blue bg-blue px-8 py-2.5 font-bold text-light transition-colors duration-700 hover:border-blue-light hover:bg-transparent hover:text-blue-light'

export default function Home() {
  // Ao vir de outra rota (ex.: /#contato), rola até a seção indicada.
  useEffect(() => {
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView()
  }, [])

  return (
    <>
      <section id="hero" className="flex min-h-screen w-full flex-col bg-hero bg-cover bg-center bg-fixed text-center">
        <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-4 pt-24 text-center">
          <h2 className="max-w-5xl text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">Uma câmera pensada para facilitar a rotina dos estudantes</h2>
          <p className="w-full max-w-4xl text-lg font-semibold leading-snug text-balance sm:text-2xl lg:text-3xl">Capture documentos, anotações e momentos importantes com mais praticidade.</p>
        </div>
      </section>

      <section id="solucao" className="flex min-h-screen w-full flex-wrap content-center justify-center gap-8 bg-solucao bg-cover bg-center bg-fixed p-8 text-center">
        <h2 className="mb-5 w-full text-center text-3xl font-bold text-blue-light">Solução</h2>
        <div className="grid w-full grid-cols-1 justify-center gap-8 sm:grid-cols-2 sm:max-w-xl">
          {solucoes.map((s) => (
            <SolutionCard key={s.titulo} {...s} />
          ))}
        </div>
      </section>

      <section id="publico" className="flex min-h-screen w-full flex-wrap content-center justify-center gap-8 bg-publico bg-cover bg-center bg-fixed p-8 text-center">
        <h2 className="mb-5 w-full text-center text-3xl font-bold text-blue-light">Público-alvo</h2>
        <div className="w-full max-w-4xl rounded-xl bg-blue p-5 text-light sm:w-4/5">
          <p className="text-sm leading-relaxed">{publicoAlvo}</p>
        </div>
      </section>

      <section id="galeria" className="flex min-h-screen w-full flex-col items-center justify-center bg-dark p-8 text-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-blue-light">Galeria</h2>
          <h3 className="my-5 text-xl text-light">Protótipo</h3>
          <Carousel imagens={galeria} />
          <a className={botaoClass} href={figmaUrl} target="_blank" rel="noopener noreferrer">
            Acesse o protótipo no Figma <i className="fa-solid fa-mobile"></i>
          </a>
        </div>
      </section>

      <section id="equipe" className="flex min-h-screen flex-col justify-center gap-8 p-8 text-center">
        <h2 className="mb-5 w-full text-center text-3xl font-bold text-blue-light">Nossa equipe</h2>
        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2">
          {equipe.map((membro) => (
            <TeamCard key={membro.nome} {...membro} />
          ))}
        </div>
      </section>

      <section id="contato" className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-dark p-8 text-center">
        <h2 className="mb-5 w-full text-center text-3xl font-bold text-blue-light">Contato</h2>
        <div className="w-full max-w-3xl rounded-xl bg-blue p-8 text-light sm:w-4/5">
          <p className="mb-5 leading-relaxed">
            Quer saber mais sobre a LineUP ou acompanhar o desenvolvimento do projeto? Entre em contato com a nossa equipe.
          </p>
          <div>
            <a className={botaoClass} href="mailto:">
              Enviar e-mail <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
