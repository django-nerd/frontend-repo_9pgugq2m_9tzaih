function PlantCard({ plant }) {
  return (
    <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        {plant.image_url ? (
          <img src={plant.image_url} alt={plant.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-slate-400">No Image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">{plant.name}</h3>
          {plant.price != null && (
            <span className="text-slate-700">${plant.price}</span>
          )}
        </div>
        <p className="text-sm text-slate-600 mt-1">{plant.species || plant.pot_style}</p>
        {plant.chakra && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-pink-700 text-xs">
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            {plant.chakra}
          </div>
        )}
        {plant.mantra && (
          <p className="mt-3 text-sm italic text-slate-500">“{plant.mantra}”</p>
        )}
      </div>
    </div>
  )
}

export default PlantCard
