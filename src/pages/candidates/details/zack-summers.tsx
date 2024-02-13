import * as React from "react"
import '../../../styles/global.css'
import { type HeadFC, type PageProps } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { CandidatePage } from "../../../components/candidates/details/candidate-page"

const candidateInfo = {
  name: "Zack Summers",
  edu: "K-2 Goodshepherd 2-7 Reedspring 7-8 BlueEye 8-12 Home Schooled",
  background: "I have lived in new communities since I moved to the STL area in  1998. I grew up with my parents, they were developers mainly in the Table Rock Lake area.",
  comments: "I plan to live here with my family for a long time.",
  image: '../../../images/placeholder-photo.svg'
}

const LandingPage: React.FC<PageProps> = () => {
  
  return <CandidatePage
    {...candidateInfo}
    // Static Image is statically analyzed cannot dynamically reference image path
    image={<StaticImage src='../../../images/placeholder-photo.svg' alt={`Photo of candidate`} width={128} aspectRatio={1} />}
  />
}

export default LandingPage;
export const Head: HeadFC = () => <>
  <title>{candidateInfo.name} Board Candidate Page</title>
  <meta name="description" content={`HOA Board Candidate Page for ${candidateInfo.name}`} />
  <meta name="image" content={candidateInfo.image} />
</>
