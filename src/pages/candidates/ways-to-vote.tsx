import * as React from "react"
import type { HeadFC } from "gatsby"
import { Footer } from "../../components/footer"


const IndexPage = () => {
  return <>
    <h1>Under Construction</h1>
    <Footer/>
  </>
}
export default IndexPage

export const Head: HeadFC = () => <>
  <title>Ways to vote</title>
  <meta name="description" content="Explanation of how to vote for board of directors" />
</>
