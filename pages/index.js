import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'atropos/css'
import Atropos from 'atropos/react'
import styled from 'styled-components'

import borderFade from '../public/fade-border.png'

const CardsWrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const CardWrapper = styled.figure`
  height: 400px;
  width: 300px;
  padding: 1rem;
  background-color: white;
  border: 8px solid transparent;
  border-image: url('/fade-border.png') 30 30 repeat;
  border-radius: 5px;
`

const Card = ({ text, title = 'Title' }) => {
  return (
    <Atropos
      highlight={false}
      shadow
      shadowScale={1}
      shadowOffset={500}
      activeOffset={2}
    >
      <CardWrapper>
        <h1 data-atropos-offset="2">{title}</h1>
        <p data-atropos-offset="4">{text}</p>
      </CardWrapper>
    </Atropos>
  )
}

const BannerWrapper = styled.section`
  width: 100%;

  background: rgb(113, 24, 33);
  background: radial-gradient(
    circle,
    rgba(113, 24, 33, 1) 0%,
    rgba(20, 2, 6, 1) 100%
  );
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  span {
    font-size: 3rem;
    color: white;
  }

  img {
    margin: 4rem;
  }
`

const Main = styled.main`
  min-height: 100vh;
`

const AtroposWrapper = styled.section`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%);
  background-color: #140206;
  height: auto;
`

const GeckoImageWrapper = styled.figure`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterWrapper = styled.footer`
  clip-path: polygon(50% 0, 100% 15%, 100% 100%, 0 100%, 0 15%);
  background-image: url('/fade-border.png');
  background-size: 100% 100%;
  height: 250px;
`

const BoldBigText = styled.p`
  font-size: 4rem;
  font-family: 'Poppins-Bold';
  text-transform: uppercase;
  margin: 40px auto 0;
  width: 100%;
  text-align: center;
`

const RegularBigText = styled.p`
  font-size: 2rem;
  font-family: 'Poppins-Regular';
  text-transform: uppercase;
  margin: 5px auto 20px;
  max-width: 80%;
  text-align: center;
`

const Banner = () => {
  return (
    <AtroposWrapper>
      <Atropos
        highlight={false}
        rotateYMax="2"
        rotateXMax="2"
        height={400}
        activeOffset={10}
        shadowScale={0}
      >
        <BannerWrapper>
          <Image
            data-atropos-offset="6"
            layout="fixed"
            src="/banner-logo.png"
            alt="Cutest Gecko ever"
            width={480}
            height={208}
          />
          <GeckoImageWrapper>
            <Image
              data-atropos-offset="1"
              layout="fixed"
              src="/gecko.png"
              alt="Cutest Gecko ever"
              width={400}
              height={351}
            />
          </GeckoImageWrapper>
        </BannerWrapper>
      </Atropos>
    </AtroposWrapper>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Glorious Geckos</title>
        <link rel="preload" href="/fonts/pixel.ttf" as="font" crossOrigin="" />
        <link
          rel="preload"
          href="/fonts/Poppins-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Glorious Geckos official website. Right?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Banner />
        <BoldBigText>Meet our glorious geckos NFTs!</BoldBigText>
        <RegularBigText>
          The next hottest Solana NFT Collection conformed by unique and
          Glorious Geckos waiting to move into your wallet.
        </RegularBigText>
        <CardsWrapper>
          <Card text="Hello" title="Us" />
          <Card text="Hello!" title="FAQ" />
          <Card text="Hello!" title="Geckos" />
        </CardsWrapper>
      </Main>
      <FooterWrapper>
        <span>Hello</span>
      </FooterWrapper>
    </div>
  )
}
