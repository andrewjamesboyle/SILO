import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp, currentUser, logIn, logOut } = useAuth()
  console.log('currentUser', currentUser)

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <p>{JSON.stringify({ isAuthenticated })}</p>
      <button onClick={() => signUp()}>sign up</button>
    </>
  )
}

export default HomePage
