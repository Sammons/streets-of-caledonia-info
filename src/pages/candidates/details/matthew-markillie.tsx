import * as React from "react"
import '../../../styles/global.css'
import { type HeadFC, type PageProps } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { CandidatePage } from "../../../components/candidates/details/candidate-page"

const candidateInfo = {
  name: "Matthew Markillie",
  edu: "Marquette High School Class of 2001. Bachelor of Science Embry-Riddle Aeronautical University - Major Professional Pilot, Minor Aviation Safety.",
  background: "Republic Airways Pilot, First Officer, Captain, Check Airman 2004-2016; Teamsters local 357 for Republic Pilots; Scheduling committee chairman 2012-201 Teamsters Airline Division; Negotiating comittee 2015. Southwest Airlines Pilot, First Officer, Captain 2016 - Present. Southwest Airlines Pilots Association; Schedule research committee.",
  comments: "Greetings Streets of Caledonia Residents, my name is Matt Markillie, I am running for the first resident head position for the Streets of Caledonia Home Owners Asosciation Board of Directors. I have been a thriving participant of this community since I first secured my lot in March of 2021. In May 2021 I saw a need and took the initiative to establish an informal social media group, providing a friendly and harmonious platform for all residents to freely express and reflect on the community we call home. My wife Crystal and our beautiful family of 10 are looking forward to continued growth of our subdivision. As a member of the board I intend on making sure the community concerns of safety, amenities, and cost are all addressed without any unwarranted delays. With my background as a union committee member I have the necessary passion and experience to enthusiastically advocate by giving my all to this role.",
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
