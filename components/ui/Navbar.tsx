import { Spacer, Text, theme, useTheme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/Link"
import NextLink from 'next/Link'

export const Navbar = () => {
    const {theme} = useTheme()
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'2px 20px',
        backgroundColor: theme?.colors.gray900.value
        
    }}>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png'
        alt='Icon PokeApp'
        width={70}
        height={70}/>
    <NextLink href='/' passHref>
      <Link>
        <Text color='white'>PokeApi</Text>
      </Link>
    </NextLink>
    <Spacer css={{flex:1}}/>
    <NextLink href='/favorites'>
    <Text color='white'>Favoritos</Text>
    </NextLink>
    </div>
  )
}