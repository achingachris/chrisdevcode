import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </div>
    </Layout>
  )
}

export default Home
