import { Menu } from 'lucide-react'

function Navbar({ onOpenTest }) {
  return (
    <header className="relative z-20">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-pink-200 flex items-center justify-center text-pink-700 font-bold">SP</div>
          <span className="font-semibold text-slate-800">Spirit Pots</span>
        </div>
        <button onClick={onOpenTest} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
          <Menu className="h-4 w-4" />
          System
        </button>
      </div>
    </header>
  )
}

export default Navbar
