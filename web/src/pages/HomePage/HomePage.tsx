import { useState, useEffect, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import About from './About'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Data', href: '#data' },
  { name: 'Features', href: '#features' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const aboutRef = useRef(null)

  const handleScroll = () => {
    if (aboutRef.current) {
      const aboutPosition = aboutRef.current.offsetTop
      const scrollPosition = window.scrollY

      setAboutVisible(scrollPosition >= aboutPosition)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50 justify-between">
        <nav
          className="flex items-center justify-end p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Hamburger icon */}
          <div className="flex lg:hidden justify-end">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation items at top left -> large viewport */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="border-t-4 border-gray-900 py-3" />
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/sign-in"
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Indigo sidebar when hamburger menu clicked */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-indigo-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <h1 className="text-3xl font-extrabold leading-9 text-gray-100">
                  SILO
                </h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToAbout()
                }}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="border-t-4 border-gray-900 py-3" />
                <div className="py-6">
                  <a
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="fixed inset-0 bg-contain bg-no-repeat overflow-hidden bg-center">
        <img
          src="/taco_map2.png"
          alt="map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-40 sm:py-56 lg:py-64">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl">
              SILO OR VECTOR{' '}
            </h1>
            <h2 className="mt-6 text-xl sm:text-3xl leading-8 text-gray-200">
              GEOGRAPHIC INFORMATION SYSTEMS
            </h2>
            <h2 className="mt-0 text-l sm:text-2xl leading-8 text-gray-200">
              THE GIS SOLUTION FOR THE AEC INDUSTRY
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/sign-in"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in / Register
              </a>
            </div>
          </div>
        </div>
        <div className="relative isolate px-6 pt-14 lg:px-8" ref={aboutRef}>
          <About />
        </div>
      </div>
    </div>
  )
}
