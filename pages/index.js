import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'
import ActionItems from './components/ActionItems'

export default function Home() {
  

  return (
    <Wrapper>
      <Map />
      <ActionItems />
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
` 

