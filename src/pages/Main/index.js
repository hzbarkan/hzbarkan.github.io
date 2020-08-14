import React from 'react'
import HiddenPage from '../HiddenFooter'
import { BlurredSection } from '../../components'
import { ScrollSection } from '../../components/interactions'
import { BaseLayout } from '../../components/layout'
import * as Styles from './styles'

const MainPage = () => {
  return (
    <BaseLayout>
      {/* main scrollview */}
      <Styles.Wrapper>

        {/* content sections */}
        <BlurredSection src='https://live.staticflickr.com/65535/48138978536_99da5f61c5_b.jpg' blur='0'>
          <div className='inside'>
            <Styles.FrontPage>
              <Styles.Banner>hzbarkan</Styles.Banner>
              <Styles.Paragraph>
                Web Developer&emsp;|&emsp;Seasonal Photographer&emsp;|&emsp;Aviation Enthusiast&emsp;|&emsp;Railway Enthusiast
              </Styles.Paragraph>
            </Styles.FrontPage>
          </div>
        </BlurredSection>

      </Styles.Wrapper>

      {/* hidden footer */}
      <HiddenPage />
    </BaseLayout>
  )
}

export default MainPage
