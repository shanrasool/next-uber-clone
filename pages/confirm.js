import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

  const router = useRouter()

  const { pickup, dropoff} = router.query

  const [ pickupCoordinates, setPickupCoordinates ] = useState([0, 0]);
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
      new URLSearchParams({
        access_token: "pk.eyJ1Ijoic2hhbjciLCJhIjoiY2wxMmd3NWFmMGF3MDNqcHdzZmZmYncwdiJ9.Q6m98XXLjRMKZ5Nu7iGSUg",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setPickupCoordinates(data.features[0].center)
    })
  }

  const getDropoffCoordinates = (dropoff) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
      new URLSearchParams({
        access_token: "pk.eyJ1Ijoic2hhbjciLCJhIjoiY2wxMmd3NWFmMGF3MDNqcHdzZmZmYncwdiJ9.Q6m98XXLjRMKZ5Nu7iGSUg",
        limit: 1,
      })
    )
    .then(response => response.json())
    .then(data => {
      setDropoffCoordinates(data.features[0].center)
    })
  }

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff])

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
              <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map 
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector 
          pickupCoordinates = {pickupCoordinates}
          dropoffCoordinates = {dropoffCoordinates}
        />
        <ConfirmBtnCon>
          <ConfirmBtn>
            Confirm
          </ConfirmBtn>
        </ConfirmBtnCon>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
  flex flex-col h-screen
`

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`

const ConfirmBtnCon = tw.div`
  border-t-2
`

const ConfirmBtn = tw.div`
  bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const BackButton = tw.img`
  h-full object-contain
`

const ButtonContainer = tw.div`
  rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`