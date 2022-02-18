import { NextPage, GetServerSideProps } from 'next'

type HomeProps = { userAgent: string }

const Home: NextPage<HomeProps> = ({ userAgent }) => <main>Hello world! - user agent: {userAgent}</main>

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ req }) => {
  const userAgent = req?.headers['user-agent'] ?? navigator.userAgent
  return { props: { userAgent } }
}

export default Home
