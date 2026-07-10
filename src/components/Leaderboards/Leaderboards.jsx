import React from 'react'

const Leaderboards = () => {
  return (
    <>
    <div className='flex flex-col  bg-zol text-white bg-[#18181B]' >
        <div className='w-full flex justify-center items-center lg:text-7xl md:text-5xl sm:text-4xl text-2xl  py-4 zol tracking-widest '> 
            <h1 className="bg-linear-to-br from-pink-500 via-rose-400 to-orange-400 bg-clip-text text-transparent">L</h1>

<h1 className="bg-linear-to-br from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">E</h1>

<h1 className="bg-linear-to-br from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">A</h1>

<h1 className="bg-linear-to-br from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">D</h1>

<h1 className="bg-linear-to-br from-emerald-400 via-green-500 to-lime-500 bg-clip-text text-transparent">E</h1>

<h1 className="bg-linear-to-br from-red-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">R</h1>

<h1 className="bg-linear-to-br from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">B</h1>

<h1 className="bg-linear-to-br from-orange-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">O</h1>

<h1 className="bg-linear-to-br from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">A</h1>

<h1 className="bg-linear-to-br from-fuchsia-500 via-pink-500 to-rose-400 bg-clip-text text-transparent">R</h1>

<h1 className="bg-linear-to-br from-lime-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">D</h1>

<h1 className="bg-linear-to-br from-purple-500 via-violet-500 to-indigo-600 bg-clip-text text-transparent">S</h1>
        </div>
       <div className="w-full flex flex-col gap-2 px-4 zol">

  <div className="flex group">
    <h1 className="px-10 py-5 border-b-4 border-black flex items-center justify-center lg:text-5xl sm:text-3xl md:text-4xl text-2xl bg-linear-to-r from-pink-500 via-rose-500 to-orange-500">
      S
    </h1>
    <div className="relative w-full bg-zinc-900 border-b-4 border-black overflow-hidden flex justify-center items-center">
      <h1 className="play md:text-xl sm:text-sm text-gray-600"> {"Aura > 20K, 0 failed, all completed"}</h1>
      <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </div>
  </div>

  <div className="flex group">
    <h1 className="px-10 py-5 border-b-4 border-black flex items-center justify-center lg:text-5xl sm:text-3xl md:text-4xl text-2xl bg-linear-to-r from-yellow-400 via-amber-400 to-orange-400">
      A
    </h1>
    <div className="relative w-full bg-zinc-900 border-b-4 border-black overflow-hidden flex justify-center items-center">
       <h1 className="play md:text-xl sm:text-sm text-gray-600"> {"Aura > 20K, 0 failed"}</h1>
      <div className="absolute inset-0 bg-linear-to-r from-orange-400 via-amber-400 to-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </div>
  </div>

  <div className="flex group">
    <h1 className="px-10 py-5 border-b-4 border-black flex items-center justify-center lg:text-5xl sm:text-3xl md:text-4xl text-2xl bg-linear-to-r from-lime-300 via-yellow-300 to-amber-300">
      B
    </h1>
    <div className="relative w-full bg-zinc-900 border-b-4 border-black overflow-hidden flex justify-center items-center">
       <h1 className="play md:text-xl sm:text-sm text-gray-600"> {"Aura > 5000, 2 failed"}</h1>
      <div className="absolute inset-0 bg-linear-to-r from-amber-300 via-yellow-300 to-lime-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </div>
  </div>

  <div className="flex group">
    <h1 className="px-10 py-5 border-b-4 border-black flex items-center justify-center lg:text-5xl sm:text-3xl md:text-4xl text-2xl bg-linear-to-r from-green-400 via-emerald-400 to-teal-400">
      C
    </h1>
    <div className="relative w-full bg-zinc-900 border-b-4 border-black overflow-hidden flex justify-center items-center">
       <h1 className="play md:text-xl sm:text-sm text-gray-600"> {"Aura > 3000, <2 failed, 5+ completed"}</h1>
      <div className="absolute inset-0 bg-linear-to-r from-teal-400 via-emerald-400 to-green-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </div>
  </div>

  <div className="flex group">
    <h1 className="px-10 py-5 border-b-4 border-black flex items-center justify-center lg:text-5xl sm:text-3xl md:text-4xl text-2xl bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500">
      D
    </h1>
    <div className="relative w-full bg-zinc-900 border-b-4 border-black overflow-hidden flex justify-center items-center">
       <h1 className="play md:text-xl sm:text-sm text-gray-600"> {"Aura > 2000, <5 failed, all accepted"}</h1>
      <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </div>
  </div>

  <div className="flex group">
    <h1 className="px-10 py-5 border-b-4 border-black flex items-center justify-center lg:text-5xl sm:text-3xl md:text-4xl text-2xl bg-linear-to-r from-indigo-400 via-violet-500 to-purple-500">
      E
    </h1>
    <div className="relative w-full bg-zinc-900 border-b-4 border-black overflow-hidden flex justify-center items-center">
      <h1 className="play md:text-xl sm:text-sm text-gray-600"> {"Aura > 1000, 5+ failed, 5+ completed"}</h1>
      <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-violet-500 to-indigo-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </div>
  </div>

  <div className="flex group">
    <h1 className="px-10 py-5 border-b-4 border-black flex items-center justify-center lg:text-5xl sm:text-3xl md:text-4xl text-2xl bg-linear-to-r from-pink-400 via-fuchsia-500 to-purple-500">
      F
    </h1>
    <div className="relative w-full bg-zinc-900 border-b-4 border-black overflow-hidden flex justify-center items-center">
       <h1 className="play md:text-xl sm:text-sm text-gray-600"> {"Aura > 500, 5+ failed, 3+ completed "}</h1>
      <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-fuchsia-500 to-pink-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </div>
  </div>

</div>
    </div>
    </>
  )
}

export default Leaderboards