import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'atropos/css'
import Atropos from 'atropos/react'
import styled, { css } from 'styled-components'

import { GeckoShowcase } from '../components/GeckoShowcase'
import { Footer } from '../components/Footer'

const size = {
  xs: '375px',
  sm: '768px',
  lg: '1200px',
}

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
}

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

  @media screen and ${device.sm} {
    height: 500px;
    width: 400px;
  }

  @media screen and ${device.xs} {
    height: 450px;
    width: 300px;
  }
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
  text-transform: uppercase;
  letter-spacing: 1rem;

  @media screen and ${device.sm} {
    margin: 1rem 2rem;
    font-size: 2rem;
    letter-spacing: 0.5rem;
  }

  @media screen and ${device.xs} {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }
`

const SeparatorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 0 1rem;

  @media screen and ${device.sm} {
    margin-top: 2rem;
  }

  @media screen and ${device.xs} {
    margin: 2rem 0 0rem;
  }
`

const Separator = ({ text }) => (
  <SeparatorWrapper id={text}>
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

  @media screen and ${device.sm} {
    font-size: 1.8rem;
    margin: 0 1rem;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  @media screen and ${device.sm} {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }
`

const NavSeparator = styled.div`
  width: 5px;
  height: 30px;
  background-image: url('/fade-border.png');
  background-size: contain;
  margin: 0 2rem;

  @media screen and ${device.sm} {
    display: none;
  }

  @media screen and ${device.xs} {
    display: none;
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink data-atropos-offset="16">Litepaper</NavLink>
      <NavSeparator />
      <NavLink data-atropos-offset="16" href="#Roadmap">
        Roadmap
      </NavLink>
      <NavSeparator />
      <NavLink data-atropos-offset="16" href="#FAQ">
        FAQ
      </NavLink>
      <NavSeparator />
      <NavLink data-atropos-offset="16">Team</NavLink>
    </NavWrapper>
  )
}

const Card = ({ text, title = 'Title' }) => {
  return (
    <Atropos
      rotateTouch={false}
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
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;

  span {
    font-size: 3rem;
    color: white;
  }

  @media screen and ${device.sm} {
    padding: 1rem 0;
    max-width: 100%;
  }

  @media screen and ${device.xs} {
    flex-direction: row;
    max-height: 70vh;
  }
`

const Main = styled.main`
  min-height: 100vh;
  overflow: hidden;
`

const AtroposWrapper = styled.section`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%);
  background-color: #140206;
  height: auto;

  @media screen and ${device.xs} {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 97%, 0 100%);
  }
`

const GeckoImageWrapper = styled.figure`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and ${device.lg} {
    img {
      margin-top: -100px;
    }
  }

  @media screen and ${device.xs} {
    img {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    width: 100%;
    height: auto;
  }
`

const BoldBigText = styled.p`
  font-size: 4rem;
  font-family: 'Poppins-Bold';
  text-transform: uppercase;
  margin: 5px auto 0;
  max-width: 80%;
  text-align: center;

  @media screen and ${device.sm} {
    font-size: 3rem;
  }

  @media screen and ${device.xs} {
    margin-top: 2rem;
    font-size: 2rem;
    max-width: 90%;
  }
`

const RegularBigText = styled.p`
  font-size: 2rem;
  text-align: justify;
  font-family: 'Poppins-Regular';
  text-transform: uppercase;
  margin: 5px auto 20px;
  max-width: 80%;
  color: #42413e;

  @media screen and ${device.sm} {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  @media screen and ${device.xs} {
    margin-top: 2rem;
    font-size: 1.5rem;
    max-width: 90%;
  }
`

const BannerTop = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media screen and ${device.lg} {
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @media screen and ${device.xs} {
    flex-direction: column-reverse;
  }
`

const BannerBottom = styled.div`
  max-height: 10%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and ${device.sm} {
    justify-content: center;
    width: 100%;
  }

  @media screen and ${device.xs} {
    height: 60%;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
`

const ComingSoonText = styled.p`
  margin: 6rem auto;
  text-transform: uppercase;
  text-align: center;
  font-size: 4rem;
  font-family: 'Poppins-Bold';

  @media screen and ${device.sm} {
    font-size: 2.7rem;
  }

  @media screen and ${device.xs} {
    font-size: 1.5rem;
  }
`

const Roadmap = styled.img`
  width: 100%;
`

const GloriousLogo = () => (
  <img
    data-atropos-offset="-2"
    layout="fixed"
    src="/banner-logo.png"
    alt="Cutest Gecko ever"
    width={620}
    height={308}
  />
)

const Banner = () => {
  return (
    <AtroposWrapper>
      <Atropos
        rotateTouch={false}
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
            <GloriousLogo />
            <GeckoImageWrapper>
              <img
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
          In the minds of our creators and devs we found out a great part of
          what PixelArt means. Without taking advantage of this, we as a young
          team but not inexperienced one decided to give us a chance to show all
          the communities our most warm welcome to join us and enjoy every
          single piece of Art that we have created for you. And so even we want
          to tell you the story of this encourage project of 1,111 NFTs.
        </RegularBigText>
        <GeckoShowcase />
        <BoldBigText>How to become glorious</BoldBigText>
        <RegularBigText>
          Everybody knows the story of Geckos when they arrived to the Galaxy
          and became 3D, but not everyone knows how were they when it all
          started. When the life of this community started and the years began
          to count (about 3 million years ago) this little group of Glorious
          Geckos were living a Pixel life in all its matters. Pixel houses,
          pixel thinks and things, everything was pixel, there was no space for
          any difference between each other composition, the only part that
          matters were who got the best faction in, the most glorious Gecko that
          can represent and face its faction in all the battles and missions
          that were assigned to each team. In order to become the most glorious
          Gecko each one by itself together with his teammates needed to face
          many challenges, defeat evil bosses and take riches tributes to the
          ancient gecko called "The Legendary One". Only him could decide who
          really deserved to be the next gloriously Gecko and be remembered as a
          leader of his strong faction. The prizes? Well, the prizes were
          exactly what they really ever wanted, to become father and choose a
          divine life as a faction leader. This process was not so easy at all,
          each faction has its own issues to face and of course its own DNA
          differences. In first instance we had the living faction geckos called
          "Pure Geckos" in second instance we had the evil ones called "Helling
          Geckos" in third instance we had the death ones called "Z-Geckos" in
          fourth instance we had the multiverse ones called "Alien Geckos". Of
          course, we got hybrids, hybrids got powers from different factions
          staying together and founding the last resistance of their crew called
          "Insane Hybrids". In this multi verse each faction needs to join
          forces and determinate which team will be last one standing. Please
          enjoy our super natura
        </RegularBigText>
        <Separator text="Roadmap" />
        <Roadmap layout="fixed" src="/roadmap.jpg" alt="Roadmap" />
        <Separator text="FAQ" />
        <CardsWrapper>
          <Card
            text="It is a pixel art project made up of 1,111 NFTs."
            title="What is Glorious Geckos?"
          />
          <Card
            text="It's a strong community backed by holders and diamond hands that join forces against the PH and flippers!"
            title="What are Glorious Geckos?"
          />
          <Card
            text="Due to our low supply and mint cost and a extremely strong DAO, we will make everyone wish to have at least one on their wallets! Also, aren't they cute?"
            title="Why mint Glorious Geckos?"
          />
        </CardsWrapper>
      </Main>
      <Footer />
    </div>
  )
}
