import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

const Login = () => {
  return (
    <Wrapper>
        <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
        <Title>Login to access your account.</Title>
        <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png" />
        <SignInBtn>Sign in with Google</SignInBtn>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`

const SignInBtn = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full
`

const UberLogo = tw.img`
    h-10 w-auto object-contain self-start
`

const Title = tw.div`
    text-5xl pt-4 text-gray-500
`

const HeadImg = tw.img`
    object-contain w-full
`