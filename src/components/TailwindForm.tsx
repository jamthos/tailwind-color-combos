import React from "react"
import "twin.macro"

function TailwindForm() {
  return (
    <>
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
