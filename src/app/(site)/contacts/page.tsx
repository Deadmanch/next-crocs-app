import { Container, CountButton, Title } from '@/components'

export default function Contacts() {
  return (
    <>
      <Container className='max-w-screen-1216'>
        <Title>Contacts</Title>
        <CountButton value={1} />
      </Container>
    </>
  )
}
