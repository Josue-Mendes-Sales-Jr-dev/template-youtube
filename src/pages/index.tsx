import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import {Data} from '../../src/components/data/index'

export default function Home() {

  
  return (
         <>
         <Layout className='relative'>
          
        {
          Data.map(data=>(
            // eslint-disable-next-line react/jsx-key
           
              <Card key={data.title} title={data.title} subtitle={data.views}/> // src={data.src} />
          ))
        }
         </Layout>
         </>
  )
}
