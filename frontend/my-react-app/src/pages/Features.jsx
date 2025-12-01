
function Features() {
  const features = [
    { title: 'AI Caption Generator', desc: 'Crafts catchy, platform-optimized captions in seconds.' },
    { title: 'Multi-Platform Posting', desc: 'Publish to YouTube, Instagram, X, Facebook, and Threads.' },
    { title: 'Scheduling', desc: 'Plan your content calendar and auto-post at the best times.' },
    { title: 'Analytics Snapshot', desc: 'Track likes, comments, and shares in one view.' },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-4">Features</h2>
      <p className="text-gray-600 text-2xl mb-12">Everything you need to grow across social platforms.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-6xl w-full py-5">
        {features.map((f, i) => (
          <div key={i} className="relative bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl py-7 shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-120">
            <h3 className="text-2xl text-white text-center font-bold mb-4 mt-2">{f.title}</h3>
            <p className="text-md text-white opacity-80 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
export default Features;
