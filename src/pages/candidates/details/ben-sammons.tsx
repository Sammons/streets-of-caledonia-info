import * as React from "react"
import '../../../styles/global.css'
import { type HeadFC, type PageProps } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { CandidatePage } from "../../../components/candidates/details/candidate-page"

const candidateInfo = {
  name: "Ben Sammons",
  edu: "B.S. in Computer Science from Mizzou",
  background: "I was born and raised locally in New Melle. I am married with two young children and a rescue dog. I work from home as a senior software engineer with 10+ years of experience. As a professional I have aligned clashing perspectives to get positive outcomes for millions of people via my work at organizations such as Amazon and Social Security. Every day I use my empathy and technical background to drive decisions that improve the lives of many people.",
  comments: "If I gain the privilege of serving as a board member I will collect perspectives to persuade and garner beneficial decisions from the board. I will leverage the diverse and effective experience of residents to make careful and well thought changes where necessary, and only when necessary. On specific issues, I will focus on 1) community area upkeep and improvements 2) streamlining the rules and commitments so that rules are intuitive and costs may be reduced so long as it does not compromise community quality 3) adapting HOA commitments if necessary to changes in the greater community so that our own community stays family friendly and secure 4) clarifying responsibilities of the city, HOA, and builder so that concerned residents can easily find timelines and contact responsible parties.",
  image: '../../../images/photos-of-candidates/sammons.png'
}

const LandingPage: React.FC<PageProps> = () => {
  
  return <CandidatePage
    {...candidateInfo}
    // Static Image is statically analyzed cannot dynamically reference image path
    image={<StaticImage src='../../../images/photos-of-candidates/sammons.png' alt={`Photo of candidate`} width={128} aspectRatio={1} />}
  />
}

export default LandingPage;
export const Head: HeadFC = () => <>
  <title>{candidateInfo.name} Board Candidate Page</title>
  <meta name="description" content={`HOA Board Candidate Page for ${candidateInfo.name}`} />
  <meta name="image" content={candidateInfo.image} />
</>
