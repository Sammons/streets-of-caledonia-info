import * as React from "react"
import '../../../styles/global.css'
import { type HeadFC, type PageProps } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { CandidatePage } from "../../../components/candidates/details/candidate-page"

const candidateInfo = {
  name: "Phanindra Phanakanti",
  edu: "Bachelors in Computer Sciences and PMP Certified",
  background: "I have a strong background in community engagement. Have been awarded multiple \"Force for Good\" awards for fostering positive relationships within our neighborhood. With extensive experience in project management and a commitment to open communication, I aim to contribute to the HOA by ensuring effective governance and addressing the needs of our community.",
  comments: "Passionate about community wellfare, I believe my dedication and collaborative approach make me an ideal candidate for the board. I am committed to transparent decision-making and fostering a sense of unity among house owners.",
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
