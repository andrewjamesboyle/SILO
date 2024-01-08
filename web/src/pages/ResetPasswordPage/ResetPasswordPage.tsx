import { MetaTags } from '@redwoodjs/web'
import { useParams, navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const ResetPasswordPage = () => {
  const { resetPassword } = useAuth()
  const { token } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const password = formData.get('password')

    try {
      // Call Auth0 resetPassword method with the token
      await resetPassword({ password, token })

      // Redirect to the login page
      navigate(routes.login())
    } catch (error) {
      console.error('Error submitting reset password form:', error)
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" description="Reset Password page" />

      <div className="flex min-h-screen flex-1">
        {/* ... (your existing code) */}
        <div className="mt-10">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full p-2 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* ... (your existing code) */}
      </div>
    </>
  )
}

export default ResetPasswordPage
