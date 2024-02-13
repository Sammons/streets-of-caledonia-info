import * as React from "react"
import '../../../styles/global.css'
import { type HeadFC, type PageProps } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { CandidatePage } from "../../../components/candidates/details/candidate-page"

const candidateInfo = {
  name: "Sanjay Kumar Patel",
  edu: "Master of Science in Technology Management, M.B.A.",
  background: "I have been buying and building small businesses with real estate property. I am a real estate investor in Saint Charles, Saint Louis, Jefferson County. I have been working in IT services from just 12+ years. I have an IT company where I am leading and serving as a servant leader and mentor. I am a servant leader and volunteer in BAPS non-profit organization to service/help people where needed.",
  comments: "Board of director should have people passionate person, who is willing to serve/direct board and their people as a servant leader with full of integrity to SoC community. Who is willing to make positive/ethical decisions based on the situation. Thus, these are all the people skills, I have it. I would be grateful and happy to take this responsibility if I would get selected. Thank you/cheers, Sanjay Patel.",
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
