import { NextPage } from 'next'

type HomeProps = { userAgent: string }

const Home: NextPage<HomeProps> = ({ userAgent }) => (
  <main>Hello world! - user agent: {userAgent}</main>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req?.headers['user-agent'] ?? navigator.userAgent
  return { userAgent }
}

export default Home
