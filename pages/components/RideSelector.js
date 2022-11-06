import React, { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        rideDuration = fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};/${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2hhbjciLCJhIjoiY2wxMmd3NWFmMGF3MDNqcHdzZmZmYncwdiJ9.Q6m98XXLjRMKZ5Nu7iGSUg`
            )
        .then(res => res.json())
        .then(data => {
            setRideDuration(data.routes && data.routes[0].duration / 100);
        }).catch((e) => console.log(e))
    }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
        <Title>Choose a ride, or swipe for more</Title>
        <CarList>
            { carList.map((car, index) => (
                <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>4 mins away</Time>
                    </CarDetails>
                    <Price>{'$' + (rideDuration * car.multiplier.toFixed(2))}</Price>
                </Car>
            ))}
        </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
` 

const Title = tw.div`
    text-gray-500 text-center text-xs border-b
`

const CarList = tw.div`
    overflow-y-scroll
`

const Car = tw.div`
    flex p-4 items-center
`

const CarImage = tw.img`
    h-14 mr-4
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    font-xs text-blue-500
`

const Price = tw.div`
    text-sm
`