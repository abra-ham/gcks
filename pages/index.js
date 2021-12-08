import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'atropos/css'
import Atropos from 'atropos/react'
import styled, { css } from 'styled-components'

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
  padding: 10px;
  background-color: white;
  background-image: url('/fade-border.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  display: flex;
`

const CardContent = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 6px;
  padding: 1rem;
`

const LeftMixin = css`
  clip-path: polygon(100% 50%, 97% 0, 0% 0%, 0% 100%, 97% 100%);
`

const RightMixin = css`
  clip-path: polygon(100% 100%, 100% 0, 3% 0, 0 50%, 3% 100%);
`

const SeparatorLine = styled.div`
  height: 10px;
  flex: 1;
  padding: 10px;
  background-color: white;
  background-image: url('/fade-border.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  ${({ left }) => {
    if (left) {
      return LeftMixin
    }

    return RightMixin
  }}
`

const SeparatorText = styled.p`
  font-family: 'Pixel';
  font-size: 4rem;
  margin: 2rem 4rem;
`

const SeparatorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 0 1rem;
`

const Separator = ({ text }) => (
  <SeparatorWrapper>
    <SeparatorLine left />
    <SeparatorText>{text}</SeparatorText>
    <SeparatorLine />
  </SeparatorWrapper>
)

const NavLink = styled.a`
  font-size: 2rem;
  font-family: 'Poppins-Bold';
  color: white;
  text-transform: uppercase;
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const NavSeparator = styled.div`
  width: 5px;
  height: 30px;
  background-image: url('/fade-border.png');
  background-size: contain;
  margin: 0 2rem;
`

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink data-atropos-offset="16">Litepaper</NavLink>
      <NavSeparator />
      <NavLink data-atropos-offset="16">Raodmap</NavLink>
      <NavSeparator />
      <NavLink data-atropos-offset="16">FAQ</NavLink>
      <NavSeparator />
      <NavLink data-atropos-offset="16">Team</NavLink>
    </NavWrapper>
  )
}

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
        <CardContent>
          <h1 data-atropos-offset="4">{title}</h1>
          <p data-atropos-offset="2">{text}</p>
        </CardContent>
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
  flex-direction: column;
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
  margin: 5px auto 0;
  max-width: 80%;
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

const BannerTop = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const BannerBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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
          <BannerTop>
            <Nav />
          </BannerTop>
          <BannerBottom>
            <Image
              data-atropos-offset="-2"
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
          </BannerBottom>
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
        <Separator text="FAQ" />
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
