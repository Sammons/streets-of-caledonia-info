import * as React from "react"
import '../../styles/global.css'
import { Link, type HeadFC, type PageProps } from "gatsby"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
import { Colors, Spacing } from "../../constants/constants"
import { Footer } from "../../components/footer"
import { HomeIcon } from "../../components/home-icon"



const TopOfPageHeader = () => {
  return <>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100%',
        padding: Spacing.S2,
        margin: Spacing.S3,
        borderBottom: `1px solid ${Colors.DarkerGrey}`,
      }}>
        <h1 color={Colors.DarkerGrey} style={{ margin: Spacing.S2 }}>
          {'HOA Rules'}
        </h1>
        <h2 style={{ color: Colors.MoreDarkerGrey, textAlign: 'center' }}>
          {'This page does not provide legal advice or interpretation, it is just an attempt to make the rules easier to navigate.'}
          <br /><br />
        </h2>
      </div>
    </div>
  </>
}

const StyledTextArea = styled.textarea(() => ({
  backgroundColor: 'transparent',
  width: '100%',
  maxWidth: '600px',
  resize: 'none',
  padding: Spacing.S1,
  margin: Spacing.S1,
  borderRadius: '0.375em',
  boxShadow: `${Colors.DarkerGrey} 0px 3px 6px 0px`,
  outline: 'none'
}))

const StyledButton = styled.button(() => ({
  backgroundColor: Colors.Green,
  color: Colors.LighterGrey,
  fontWeight: 'bold',
  fontSize: '120%',
  border: `1px solid ${Colors.LighterGrey}`,
  borderRadius: '0.375em',
  height: '40px',
  width: '80px',
  marginLeft: Spacing.S1,
  ':hover': {
    cursor: 'pointer'
  },
  ':active': {
    opacity: '90%'
  },
  ':disabled': {
    opacity: '50%'
  }
}))

const SpinnerDiv = styled.div`
    display: inline-block;
    margin: ${Spacing.S2};
    width: 50px;
    height: 50px;
    border: 3px solid rgba(200,200,200,.3);
    border-radius: 50%;
    border-top-color: green;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
`;

const Spinner = () => {
  return <SpinnerDiv />
}

const OutputTextStyled = styled.div(() => ({
  fontSize: '120%',
  border: `1px solid ${Colors.Grey}`,
  borderRadius: '0.375em',
  padding: Spacing.S1,
  margin: Spacing.S1,
  width: '100%',
  maxWidth: '690px',
  textAlign: 'left'
}))

const BotInteraction = () => {

  const [textValue, setTextValue] = React.useState('');
  const [running, setRunning] = React.useState(false);
  const [botText, setBotText] = React.useState('')
  const [botAnnotationText, setBotAnnotationText] = React.useState<{file_citation: {quote: string}}[]>([]);

  const onClickSubmit = async () => {
    try {
      const key = 'UOU\x98Æ/\x05e\x99Ú@¨-}\x1FÕÊVS®r\x1BE»Ó%©\x03\x907'
      setRunning(true);
      const body = await fetch('https://uou4micg15.execute-api.us-east-1.amazonaws.com/Prod/ask-question', {
        method: 'POST',
        body: JSON.stringify({ message: textValue }),
        headers: {
          'Authorization': btoa(key),
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        keepalive: true
      });
      const json = await body.json() as {
        statusCode: number;
        body: string;
      };
      const response = JSON.parse(json.body) as {
        messages: {data:{
          content: {text: {value: string; annotations: {file_citation: {quote: string}}[]}}[]
        }[]}
      }
      console.log(response.messages.data[0].content[0].text)
      setBotText(response.messages.data[0].content[0].text.value)
      setBotAnnotationText(response.messages.data[0].content[0].text.annotations)
      

    } catch (e) {
      console.log('error', e)
      setBotText('Failed, sorry, this is free after all!')
    } finally {
      setRunning(false);
    }
  }

  return <><div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    <StyledTextArea id="formid" placeholder="Can I build a bike shed in my back yard?"
      onKeyDown={(event) => {
        if (event.key.toLowerCase() === 'enter') {
          console.log('output')
          event.preventDefault()
          onClickSubmit().catch(() => { });
        }
      }}
      onChange={(event) => setTextValue(event.target.value)} />


    <div onClick={() => onClickSubmit().catch(() => { })}>
      <StyledButton disabled={running || textValue.trim() == ''}>
        Go
      </StyledButton>
    </div >
  </div>
    {running && <Spinner />}
    {botText && <OutputTextStyled>{botText}</OutputTextStyled>}
    <br/>
    {botAnnotationText && 
      botAnnotationText.map((annotation, i) => <OutputTextStyled key={i}><b>Annotation {i+1}:</b> {annotation.file_citation.quote}</OutputTextStyled>)
    }
  </>
}

const LandingPage: React.FC<PageProps> = () => {

  return <>
    <HomeIcon />
    <TopOfPageHeader />
    <h2 style={{ textAlign: 'center', fontStyle: 'italic' }}>
      <a href="/ccersoc-2020-10-28.pdf">Tap here to download the rule PDF</a>. It is the same as the one on the Omni site.
    </h2>
    <br />
    <br />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="formid">
        Or... ask ChatGPT to read the PDF for you:
      </label>
      <BotInteraction />
    </div>

    <br />
    <Footer />
  </>
}

export default LandingPage;
export const Head: HeadFC = () => <>
  <title>Streets of Caledonia Community HOA Rules</title>
  <meta name="description" content="Index page with helper to navigate HOA rules" />
  <meta name="image" content="/soc.jpg" />
</>
