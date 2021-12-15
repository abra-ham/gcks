const Gecko1 = '../assets/Gecko1.jpg'
const Gecko2 = '../assets/Gecko2.jpg'
const Gecko3 = '../assets/Gecko3.jpg'
const Gecko4 = '../assets/Gecko4.jpg'
const Gecko5 = '../assets/Gecko5.jpg'
const Gecko6 = '../assets/Gecko6.jpg'
const Gecko7 = '../assets/Gecko7.jpg'
const Gecko8 = '../assets/Gecko8.jpg'
const Gecko9 = '../assets/Gecko9.jpg'
const Gecko10 = '../assets/Gecko10.jpg'
const Gecko11 = '../assets/Gecko11.jpg'
const Gecko12 = '../assets/Gecko12.jpg'
const Gecko13 = '../assets/Gecko13.jpg'

import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  transform: rotateZ(-2deg);
`

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  transform: rotateZ(-2deg);
`

const Gecko = styled.img`
  width: ;
  height: 200px;
  margin: 0.5rem;
`

export const GeckoShowcase = () => {
  return (
    <Wrapper>
      <Row>
        <Gecko src={Gecko4} />
        <Gecko src={Gecko5} />
        <Gecko src={Gecko1} />
        <Gecko src={Gecko2} />
        <Gecko src={Gecko3} />

        <Gecko src={Gecko6} />
        <Gecko src={Gecko7} />
        <Gecko src={Gecko8} />
        <Gecko src={Gecko9} />
        <Gecko src={Gecko10} />
        <Gecko src={Gecko11} />
        <Gecko src={Gecko12} />
      </Row>
      <Row>
        <Gecko src={Gecko13} />
        <Gecko src={Gecko12} />

        <Gecko src={Gecko11} />

        <Gecko src={Gecko5} />

        <Gecko src={Gecko10} />
        <Gecko src={Gecko4} />
        <Gecko src={Gecko1} />
      </Row>
    </Wrapper>
  )
}
