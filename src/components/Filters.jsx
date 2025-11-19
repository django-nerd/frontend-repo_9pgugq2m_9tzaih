import { useState } from 'react'

function Filters({ onSearch, onToggleFeatured }) {
  const [q, setQ] = useState('')
  const [featured, setFeatured] = useState(false)

  const run = () => {
    onSearch(q)
    onToggleFeatured(featured)
  }

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, species, chakra..."
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
        />
        <label className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="h-4 w-4"
          />
          Featured only
        </label>
        <button onClick={run} className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Apply</button>
      </div>
    </div>
  )
}

export default Filters
