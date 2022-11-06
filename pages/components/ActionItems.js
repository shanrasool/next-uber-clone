import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Link from 'next/link'

const ActionItems = () => {
  return (
    <ActionItem>
        <Header>
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
            <Profile>
              <Name>Shan Rasool</Name>
              <UserImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            </Profile>
        </Header>
        <ActionButtons>
            <Link href="/search">
                <ActionButton>
                    <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
                    Ride
                </ActionButton>
            </Link>
            <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
                Wheels
            </ActionButton>
            <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
                Reserve
            </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
    </ActionItem>
  )
}

export default ActionItems

const ActionItem = tw.div`
    flex-1 p-4
`

const Header = tw.div`
    flex justify-between items-center
`

const UberLogo = tw.img`
    h-28
`

const Profile = tw.div`
    flex items-center
`

const Name = tw.div`
    mr-4 w-20 text-sm
`

const UserImage = tw.img`
    h-12 w-12 rounded-full border-gray-200 p-px
`

const ActionButtons = tw.div`
    flex
`

const ActionButton = tw.div`
    flex bg-gray-200 
    flex-1 m-1 h-32 
    items-center flex-col 
    justify-center rounded-lg
    transform hover:scale-105 transition
    text-xl cursor-pointer
`

const ActionButtonImage = tw.img`
    h-3/5 
`

const InputButton = tw.div`
    h-20 bg-gray-200 text-xl 
    p-4 flex items-center mt-8
`
