import Head from 'next/head'

import { Flex, Stack, Button } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Dashgo | Login</title>
      </Head>
      
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex as="form" width="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">

          <Stack spacing="4">
            <Input 
              name="email" 
              type="email" 
              label="Email" 
              placeholder="Digite seu email"
            />
            <Input 
              name="password" 
              type="password" 
              label="Senha" 
              placeholder="Digite sua senha"
            />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
          
        </Flex>
      </Flex>
    </>
  )
}