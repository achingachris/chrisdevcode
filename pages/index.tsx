import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='text-center mt-5'>
          <h1>Chris Achinga</h1>
          <p className='lead'>
            A full-stack developer with a passion for building web applications
          </p>
          <p>2022</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
