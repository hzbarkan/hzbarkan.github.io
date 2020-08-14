import React from 'react'
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoFlickr
} from 'react-icons/io'
import { Container, CenteredSection, Ref, SocialRef } from './styles'

const HiddenFooterPage = () => {
  return (
    <Container>
      <h2 className='heading mb-5'>Contact Me</h2>
      <CenteredSection className='content'>
        <div className='row text-center py-1'>Mobile : (+62) 857 1434 7565</div>
        <div className='row text-center py-1'>
          Email : <Ref href='mailto:hzbarkan@gmail.com'>&nbsp;hzbarkan@gmail.com</Ref>
        </div>

        <div className='row text-center pt-5 pb-2 heading' style={{ fontSize: 20 }}>Find Me:</div>
        <div>
          <SocialRef href='https://www.instagram.com/hzbarkan/' target='_blank'>
            <IoLogoInstagram />
          </SocialRef>
          <SocialRef href='https://www.twitter.com/hzbarkan/' target='_blank'>
            <IoLogoTwitter />
          </SocialRef>
          <SocialRef href='https://www.linkedin.com/in/hzbarkan/' target='_blank'>
            <IoLogoLinkedin />
          </SocialRef>
          <SocialRef href='https://github.com/hzbarkan' target='_blank'>
            <IoLogoGithub />
          </SocialRef>
          <SocialRef href='https://www.flickr.com/hzbarkan' target='_blank'>
            <IoLogoFlickr />
          </SocialRef>
        </div>

        <div className='row text-center pt-5 mt-3'>&#169; 2020 Haekal Zidni Barkan&emsp;|&emsp;hzbarkan.github.io</div>
      </CenteredSection>
    </Container>
  )
}

export default HiddenFooterPage
