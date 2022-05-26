import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Reddit 2.0</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <PostBox />
      <div>
        <Feed />
      </div>
    </div>
  )
}

export default Home
