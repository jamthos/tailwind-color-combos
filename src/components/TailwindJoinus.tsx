import React from "react"
import "twin.macro"

const TailwindJoinus = () => (
  <div tw="grid grid-cols-6 my-10">
    <div tw="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-700 to-primary-500 col-span-5 col-start-2 row-start-1 rounded-3xl grid grid-cols-4 shadow">
      <div tw="col-span-3 col-start-2 px-5 self-center text-neutral-50">
        <h2 tw="text-4xl font-bold tracking-tight">Join our team</h2>
        <p tw="text-lg py-5 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          dignissimos dolores pariatur illum. Consequuntur fuga sequi saepe at.
        </p>
        <button tw="p-4 py-3 shadow-sm bg-neutral-50 text-primary-600 rounded hover:(shadow-lg text-primary-500)">
          Explore Open Positions
        </button>
      </div>
    </div>
    <div tw="col-start-1 col-span-2 row-start-1 py-12">
      <img
        src="http://www.fillmurray.com/400/400"
        alt="Mr. Bill"
        tw="rounded-3xl shadow-2xl"
      />
    </div>
  </div>
)

export default TailwindJoinus
