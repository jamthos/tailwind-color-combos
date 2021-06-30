import React from "react"
import "twin.macro"

const TailwindJoinus = () => (
  <div tw="grid grid-cols-6 md:grid-rows-1 my-10">
    <div tw="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-700 to-primary-500 col-start-1 row-start-2 col-span-6 md:(mt-0 col-span-5 col-start-2 row-start-1) rounded-3xl grid grid-cols-4 shadow">
      <div tw="col-span-4 px-5 py-16 md:(col-start-2 col-span-3 py-0)  self-center text-neutral-50">
        <h2 tw="text-4xl font-bold tracking-tight">Join our team</h2>
        <p tw="text-lg pt-3 pb-5 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          dignissimos dolores pariatur illum. Consequuntur fuga sequi saepe at.
        </p>
        <button tw="p-4 py-3 shadow-sm bg-neutral-50 text-primary-600 rounded hover:(shadow-lg text-primary-500)">
          Explore Open Positions
        </button>
      </div>
    </div>
    <div tw="col-start-2 col-span-4 row-start-1 -mb-10 md:(mb-0 col-start-1 col-span-2 row-start-1 py-12)">
      <img
        src="http://www.fillmurray.com/400/400"
        alt="Mr. Bill"
        tw="rounded-3xl shadow-2xl"
      />
    </div>
  </div>
)

export default TailwindJoinus
