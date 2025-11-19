import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import PlantCard from './components/PlantCard'

function App() {
  const [plants, setPlants] = useState([])
  const [q, setQ] = useState('')
  const [featured, setFeatured] = useState(undefined)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchPlants = async () => {
    const params = new URLSearchParams()
    if (q) params.append('q', q)
    if (featured !== undefined) params.append('featured', featured)

    const res = await fetch(`${baseUrl}/api/plants?${params.toString()}`)
    const data = await res.json()
    setPlants(data)
  }

  useEffect(() => {
    fetchPlants()
  }, [])

  const onSearch = (query) => setQ(query)
  const onToggleFeatured = (val) => setFeatured(val)

  useEffect(() => {
    fetchPlants()
  }, [q, featured])

  const openTest = () => {
    window.location.href = '/test'
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenTest={openTest} />
      <Hero />
      <Filters onSearch={onSearch} onToggleFeatured={onToggleFeatured} />

      <section className="container mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Catalog</h2>
          <button
            onClick={async () => {
              await fetch(`${baseUrl}/api/plants/seed`, { method: 'POST' })
              fetchPlants()
            }}
            className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50"
          >
            Seed examples
          </button>
        </div>
        {plants.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
            No plants yet. Click “Seed examples”.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((p) => (
              <PlantCard key={p.id} plant={p} />)
            )}
          </div>
        )}
      </section>

      <footer className="py-10 text-center text-slate-400">
        Spiritual Plant Pots — Designed for calm spaces
      </footer>
    </div>
  )
}

export default App
