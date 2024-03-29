import React from "react"
import "twin.macro"

const TailwindLayout = () => (
  <div tw="py-12 bg-white">
    <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div tw="lg:text-center">
        <h2 tw="text-base text-primary-600 font-semibold tracking-wide uppercase">
          Transactions
        </h2>
        <p tw="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          A better way to send money
        </p>
        <p tw="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div tw="mt-10">
        <dl tw="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div tw="flex">
            <div tw="flex-shrink-0">
              <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  tw="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div tw="ml-4">
              <dt tw="text-lg leading-6 font-medium text-neutral-900">
                <a
                  href="#"
                  tw="text-secondary-600 hover:(text-secondary-500 underline)"
                >
                  Competitive exchange rates
                </a>
              </dt>
              <dd tw="mt-2 text-base text-neutral-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div tw="flex">
            <div tw="flex-shrink-0">
              <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  tw="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
            </div>
            <div tw="ml-4">
              <dt tw="text-lg leading-6 font-medium text-neutral-900">
                <a
                  href="#"
                  tw="text-secondary-600 hover:(text-secondary-500 underline)"
                >
                  No hidden fees
                </a>
              </dt>
              <dd tw="mt-2 text-base text-neutral-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div tw="flex">
            <div tw="flex-shrink-0">
              <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  tw="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div tw="ml-4">
              <dt tw="text-lg leading-6 font-medium text-neutral-900">
                <a
                  href="#"
                  tw="text-secondary-600 hover:(text-secondary-500 underline)"
                >
                  Transfers are instant
                </a>
              </dt>
              <dd tw="mt-2 text-base text-neutral-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div tw="flex">
            <div tw="flex-shrink-0">
              <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  tw="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
            </div>
            <div tw="ml-4">
              <dt tw="text-lg leading-6 font-medium text-neutral-900">
                <a
                  href="#"
                  tw="text-secondary-600 hover:(text-secondary-500 underline)"
                >
                  Mobile notifications
                </a>
              </dt>
              <dd tw="mt-2 text-base text-neutral-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
)

export default TailwindLayout
