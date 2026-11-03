export default function SolutionCard({ titulo, descricao, itens }) {
  return (
    <div className="min-h-50 w-full rounded-xl bg-blue p-5 text-light">
      <h3 className="mb-2.5 text-lg font-semibold">{titulo}</h3>
      <p className="mb-2.5 w-full text-sm sm:w-5/6">{descricao}</p>
      <ul className="text-sm text-balance">
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
