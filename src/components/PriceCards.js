import React from "react"
import "twin.macro"

const PriceCards = function () {
  return (
    <div>
      <h2 tw="text-7xl font-black tracking-tight text-neutral-800 text-center mb-10">
        Here R Prices
      </h2>
      <div tw="grid md:grid-cols-3 gap-8">
        <div tw="bg-neutral-50 rounded-b-lg border-t-4 border-secondary-500 p-4 flex flex-col items-center shadow my-10">
          <h2 tw="text-center font-extrabold tracking-tight text-xl text-neutral-800 pb-2">
            Chill
          </h2>
          <p tw="text-4xl font-extrabold text-center text-primary-600 border-b border-primary-200 p-2 bg-neutral-100">
            $30.99
          </p>
          <p tw="text-neutral-900 text-base mt-4 leading-normal">
            Lorem ipsum, provident nam at ad ea, error soluta dolor voluptates
            sint repudiandae corrupti!
          </p>
        </div>
        <div tw="bg-neutral-50 rounded-b-lg border-t-4 border-secondary-500 p-4 flex flex-col items-center shadow">
          <h2 tw="text-center font-extrabold tracking-tight text-xl text-neutral-800 pb-2">
            Nice
          </h2>
          <p tw="text-5xl font-extrabold text-center text-primary-700 border-b border-primary-200 p-2 bg-neutral-100">
            $40.99
          </p>
          <p tw="text-neutral-900 text-base mt-4 leading-normal">
            Lorem ipsa quo reprehenderit explicabo laudantium porro vel
            provident nam at ad ea, error soluta dolor voluptates sint
            repudiandae corrupti!
          </p>
        </div>
        <div tw="bg-neutral-50 rounded-b-lg border-t-4 border-secondary-500 p-4 flex flex-col items-center my-10 shadow">
          <h2 tw="text-center font-extrabold tracking-tight text-xl text-neutral-800 pb-2">
            Bonkers
          </h2>
          <p tw="text-4xl font-extrabold text-center text-primary-600 border-b border-primary-200 p-2 bg-neutral-100">
            $50.99
          </p>
          <p tw="text-neutral-900 text-base mt-4 leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus officia, minus!
          </p>
        </div>
      </div>
    </div>
  )
}

export default PriceCards
