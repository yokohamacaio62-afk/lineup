const imgClass = 'h-68 w-36 rounded-xl border-4 border-blue-dark object-cover p-1 sm:h-76 sm:w-40 lg:h-88 lg:w-44'

/** Carrossel da galeria: a lista é renderizada duas vezes (substitui o slide.js da Sprint 3). */
export default function Carousel({ imagens }) {
  return (
    <div className="group flex w-full overflow-hidden">
      {[0, 1].map((copia) => (
        <div key={copia} className="flex shrink-0 animate-slide items-center justify-center gap-8 pr-8 group-hover:[animation-play-state:paused]">
          {imagens.map((img) => (
            <img key={img.src} className={imgClass} src={img.src} alt={img.alt} />
          ))}
        </div>
      ))}
    </div>
  )
}
