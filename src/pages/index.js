import React from "react"
import "twin.macro"
import Layout from "../components/Layout"
import TailwindCTA from "../components/TailwindCTA"
import TailwindBanner from "../components/TailwindBanner"
import TailwindLayout from "../components/TailwindLayout"
import colors from "tailwindcss/colors"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main tw="container mx-auto my-8 p-2">
        <h1 tw="text-2xl font-bold border-b mb-4 tracking-tight">Tailwind Extended Colors</h1>
        <ul tw="flex flex-wrap justify-start gap-1">
          {Object.keys(colors).map((c, i) => {
            if (i > 1) {
              return (
                <li
                  tw="p-2 rounded shadow text-xs font-bold"
                  style={{
                    backgroundColor: colors[c][500],
                    color: colors[c][50],
                  }}>
                  {c.toUpperCase()}
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>

        <div tw="mt-8">
          <h2 tw="text-2xl font-bold tracking-tight mb-2">Sample components</h2>
          <div tw="p-5 border rounded-lg">
            <TailwindBanner />
            <TailwindCTA />
            <TailwindLayout />
          </div>
        </div>

      </main>
    </Layout>
  )
}

export default IndexPage
