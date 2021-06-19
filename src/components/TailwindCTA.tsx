import React from "react"
import "twin.macro"

const TailwindCTA = () => (
  <div tw="bg-neutral-50">
    <div tw="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 tw="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
        <span tw="block">Ready to dive in?</span>
        <span tw="block text-primary-600">Start your free trial today.</span>
      </h2>
      <div tw="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div tw="inline-flex rounded-md shadow">
          <a
            href="/"
            tw="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-secondary-700"
          >
            Get started
          </a>
        </div>
        <div tw="ml-3 inline-flex rounded-md shadow">
          <a
            href="/"
            tw="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:(bg-primary-50 text-secondary-600)"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default TailwindCTA
