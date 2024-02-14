import * as React from "react"
import '../../../styles/global.css'
import { type HeadFC, type PageProps } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { CandidatePage } from "../../../components/candidates/details/candidate-page"

const candidateInfo = {
  name: "Louis Terbrock",
  edu: "BS of Math and Science in Civil Engineering, University of Missouri",
  background: "Born and raised in the St. Louis area. Live in the neighborhood with my wife and two sons. Worked in construction at Alberici for all 12 years of my professional career.",
  comments: "I believe my background in construction management and passion for making the neighborhood the best it can be would serve me well for this board seat.",
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
