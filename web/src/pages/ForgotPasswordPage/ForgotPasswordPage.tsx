import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const ForgotPasswordPage = () => {
  const { isAuthenticated, signUp, currentUser, logIn, logOut } = useAuth()
  console.log('currentUser', currentUser)

  return (
    <>
      <MetaTags title="Forgot Password" description="Forgot Password page" />

      <div className="flex min-h-screen flex-1">
        <div className="flex h-screen flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="mt-6 text-3xl font-extrabold leading-9 text-gray-900">
                SILO
              </h1>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"></h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Please enter your email to reset your password.{' '}
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={() => signUp()}
                      className="flex w-full p-2 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/taco_map.png"
            alt="satellite view of Tacoma, Washington"
          />
        </div>
      </div>
      {/* <p>{JSON.stringify({ isAuthenticated })}</p> */}
    </>
  )
}

export default ForgotPasswordPage
