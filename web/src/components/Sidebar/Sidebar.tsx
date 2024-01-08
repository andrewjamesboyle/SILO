import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

import { useMapDispatch } from 'src/context/MapContext'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: true },
  { name: 'Upload', icon: CalendarIcon, current: false },
  { name: 'Download', icon: DocumentDuplicateIcon, current: false },
  { name: 'Search', icon: ChartPieIcon, current: false },
  { name: 'Layers', icon: ChartPieIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = ({ onItemSelect }) => {
  const dispatch = useMapDispatch()

  const handleItemClick = (itemName: string) => {
    onItemSelect(itemName)
  }

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-48 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center">
            <span className="text-lg font-semibold">SILO</span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleItemClick(item.name)}
                        className={classNames(
                          item.current
                            ? 'bg-gray-50 text-indigo-600'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-indigo-600'
                              : 'text-gray-400 group-hover:text-indigo-600',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="mt-auto">
                <a className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                  <Cog6ToothIcon
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          // onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
          Dashboard
        </div>
        <a
          href="#"
          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
        >
          <Cog6ToothIcon
            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
            aria-hidden="true"
          />
          Settings
        </a>
      </div>
    </>
  )
}

export default Sidebar
