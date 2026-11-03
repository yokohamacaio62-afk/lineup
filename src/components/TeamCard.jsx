export default function TeamCard({ nome, foto, github }) {
  return (
    <div className="flex min-h-80 w-full max-w-55 flex-col overflow-hidden rounded-2xl bg-blue-dark">
      <img className="mt-2.5 mx-auto h-60 w-11/12 rounded-3xl object-contain" src={foto} alt={`Foto ${nome}`} />
      <a className="flex min-h-18 items-center justify-center p-2.5 font-bold text-light hover:text-blue-light" href={github} target="_blank" rel="noopener noreferrer">
        <p>{nome}</p>
      </a>
    </div>
  )
}
