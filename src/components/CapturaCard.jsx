export default function CapturaCard({ imagem, autor }) {
  return (
    <div className="overflow-hidden rounded-xl bg-blue-dark">
      <img className="aspect-4/3 w-full object-cover" src={imagem} alt={`Foto de ${autor}`} />
      <p className="p-3 font-bold">{autor}</p>
    </div>
  )
}
