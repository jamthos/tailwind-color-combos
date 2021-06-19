import React from "react"
import "twin.macro"

function TailwindForm() {
  return (
    <>
      <div>
        <div tw="md:grid md:grid-cols-3 md:gap-6">
          <div tw="md:col-span-1">
            <div tw="px-4 sm:px-0">
              <h3 tw="text-lg font-medium leading-6 text-neutral-900">
                Profile
              </h3>
              <p tw="mt-1 text-sm text-neutral-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div tw="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div tw="shadow sm:rounded-md sm:overflow-hidden">
                <div tw="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div tw="grid grid-cols-3 gap-6">
                    <div tw="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company_website"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        Website
                      </label>
                      <div tw="mt-1 flex rounded-md shadow-sm">
                        <span tw="inline-flex items-center px-3 rounded-l-md border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-500 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company_website"
                          id="company_website"
                          tw="focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-neutral-300"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      tw="block text-sm font-medium text-neutral-700"
                    >
                      About
                    </label>
                    <div tw="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        tw="shadow-sm focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full sm:text-sm border border-neutral-300 rounded-md"
                        placeholder="you@example.com"
                      ></textarea>
                    </div>
                    <p tw="mt-2 text-sm text-neutral-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label tw="block text-sm font-medium text-neutral-700">
                      Photo
                    </label>
                    <div tw="mt-1 flex items-center">
                      <span tw="inline-block h-12 w-12 rounded-full overflow-hidden bg-neutral-100">
                        <svg
                          tw="h-full w-full text-neutral-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        tw="ml-5 bg-white py-2 px-3 border border-neutral-300 rounded-md shadow-sm text-sm leading-4 font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label tw="block text-sm font-medium text-neutral-700">
                      Cover photo
                    </label>
                    <div tw="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                      <div tw="space-y-1 text-center">
                        <svg
                          tw="mx-auto h-12 w-12 text-neutral-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div tw="flex text-sm text-neutral-600">
                          <label
                            htmlFor="file-upload"
                            tw="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              tw="sr-only"
                            />
                          </label>
                          <p tw="pl-1">or drag and drop</p>
                        </div>
                        <p tw="text-xs text-neutral-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div tw="px-4 py-3 bg-neutral-50 text-right sm:px-6">
                  <button
                    type="submit"
                    tw="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div tw="hidden sm:block" aria-hidden="true">
        <div tw="py-5">
          <div tw="border-t border-neutral-200"></div>
        </div>
      </div>

      <div tw="mt-10 sm:mt-0">
        <div tw="md:grid md:grid-cols-3 md:gap-6">
          <div tw="md:col-span-1">
            <div tw="px-4 sm:px-0">
              <h3 tw="text-lg font-medium leading-6 text-neutral-900">
                Personal Information
              </h3>
              <p tw="mt-1 text-sm text-neutral-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div tw="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div tw="shadow overflow-hidden sm:rounded-md">
                <div tw="px-4 py-5 bg-white sm:p-6">
                  <div tw="grid grid-cols-6 gap-6">
                    <div tw="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-md"
                      />
                    </div>

                    <div tw="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        tw="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-md"
                      />
                    </div>

                    <div tw="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email_address"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        tw="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-md"
                      />
                    </div>

                    <div tw="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        tw="mt-1 block w-full py-2 px-3 border border-neutral-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div tw="col-span-6">
                      <label
                        htmlFor="street_address"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        tw="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-md"
                      />
                    </div>

                    <div tw="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        tw="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-md"
                      />
                    </div>

                    <div tw="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        tw="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-md"
                      />
                    </div>

                    <div tw="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal_code"
                        tw="block text-sm font-medium text-neutral-700"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        tw="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div tw="px-4 py-3 bg-neutral-50 text-right sm:px-6">
                  <button
                    type="submit"
                    tw="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div tw="hidden sm:block" aria-hidden="true">
        <div tw="py-5">
          <div tw="border-t border-neutral-200"></div>
        </div>
      </div>

      <div tw="mt-10 sm:mt-0">
        <div tw="md:grid md:grid-cols-3 md:gap-6">
          <div tw="md:col-span-1">
            <div tw="px-4 sm:px-0">
              <h3 tw="text-lg font-medium leading-6 text-neutral-900">
                Notifications
              </h3>
              <p tw="mt-1 text-sm text-neutral-600">
                Decide which communications you'd like to receive and how.
              </p>
            </div>
          </div>
          <div tw="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div tw="shadow overflow-hidden sm:rounded-md">
                <div tw="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend tw="text-base font-medium text-neutral-900">
                      By Email
                    </legend>
                    <div tw="mt-4 space-y-4">
                      <div tw="flex items-start">
                        <div tw="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            tw="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                          />
                        </div>
                        <div tw="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            tw="font-medium text-neutral-700"
                          >
                            Comments
                          </label>
                          <p tw="text-neutral-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div tw="flex items-start">
                        <div tw="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            tw="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                          />
                        </div>
                        <div tw="ml-3 text-sm">
                          <label
                            htmlFor="candidates"
                            tw="font-medium text-neutral-700"
                          >
                            Candidates
                          </label>
                          <p tw="text-neutral-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div tw="flex items-start">
                        <div tw="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            tw="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                          />
                        </div>
                        <div tw="ml-3 text-sm">
                          <label
                            htmlFor="offers"
                            tw="font-medium text-neutral-700"
                          >
                            Offers
                          </label>
                          <p tw="text-neutral-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div>
                      <legend tw="text-base font-medium text-neutral-900">
                        Push Notifications
                      </legend>
                      <p tw="text-sm text-neutral-500">
                        These are delivered via SMS to your mobile phone.
                      </p>
                    </div>
                    <div tw="mt-4 space-y-4">
                      <div tw="flex items-center">
                        <input
                          id="push_everything"
                          name="push_notifications"
                          type="radio"
                          tw="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300"
                        />
                        <label
                          htmlFor="push_everything"
                          tw="ml-3 block text-sm font-medium text-neutral-700"
                        >
                          Everything
                        </label>
                      </div>
                      <div tw="flex items-center">
                        <input
                          id="push_email"
                          name="push_notifications"
                          type="radio"
                          tw="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300"
                        />
                        <label
                          htmlFor="push_email"
                          tw="ml-3 block text-sm font-medium text-neutral-700"
                        >
                          Same as email
                        </label>
                      </div>
                      <div tw="flex items-center">
                        <input
                          id="push_nothing"
                          name="push_notifications"
                          type="radio"
                          tw="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300"
                        />
                        <label
                          htmlFor="push_nothing"
                          tw="ml-3 block text-sm font-medium text-neutral-700"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div tw="px-4 py-3 bg-neutral-50 text-right sm:px-6">
                  <button
                    type="submit"
                    tw="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default TailwindForm
