import { Title, Text, Badge, Separator, Button, Input } from '@/components'
import { Payment, Social } from '@/layout'

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-4'>
        <Title>Title H1</Title>
        <Title tag='h2'>Title H2</Title>
        <Title tag='h3'>Title H3</Title>
        <Text>
          Reimagine Comfort with Every Step Explore Crocs for innovative and stylish designs
        </Text>
        <Text tag='span'>
          Reimagine Comfort with Every Step Explore Crocs for innovative and stylish designs
        </Text>
      </div>
      <Separator orientation='horizontal' />
      <div className='flex gap-4 bg-white'>
        <Badge>New</Badge>
        <Badge variant='sale'>Sale</Badge>
        <Badge variant='limited'>Limited Edition</Badge>
      </div>

      <div className='flex gap-4 bg-background-yellow p-20'>
        <Button>Button</Button>
        <Button loading>Button</Button>
        <Input type='text' placeholder='Name' />
      </div>
      <div>
        <Social />
        <Payment />
      </div>
    </div>
  )
}
