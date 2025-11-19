import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 flex min-h-[80vh] items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Spiritual Plant Pots
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              A curated collection of large-pot botanicals, each crafted with a mindful, spiritual twist.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-100/40 via-transparent to-white" />
    </section>
  )
}

export default Hero
