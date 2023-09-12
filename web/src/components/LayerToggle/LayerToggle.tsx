import { useMap, useMapDispatch, useMapState } from 'src/context/MapContext'

const dataLayers = [
  { id: 1, name: 'Google Hybrid', href: '#', initial: 'H' },
  { id: 2, name: 'Google Satellite', href: '#', initial: 'T' },
  { id: 3, name: 'Wetlands', href: '#', initial: 'W' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LayerToggle = () => {
  const state = useMapState()
  const dispatch = useMapDispatch()

  const handleToggle = (layerName: string) => {
    dispatch({ type: 'TOGGLE_LAYER', payload: layerName })
    console.log('dispatched toggle layer', layerName)
  }

  return (
    <div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {dataLayers.map((dataLayer) => (
          <li key={dataLayer.name}>
            <div
              className={classNames(
                state.layers.includes(dataLayer.name)
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}
            >
              <input
                type="checkbox"
                checked={state.layers.includes(dataLayer.name)}
                onChange={() => handleToggle(dataLayer.name)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
              />
              <span className="truncate">{dataLayer.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
//   return (
//     <div>
//       <ul role="list" className="-mx-2 mt-2 space-y-1">
//         {dataLayers.map((dataLayer) => (
//           <li key={dataLayer.name}>
//             <a
//               href="#"
//               onClick={() => handleToggle(dataLayer.name)}
//               className={classNames(
//                 dataLayer.current
//                   ? 'bg-gray-800 text-white'
//                   : 'text-gray-400 hover:text-white hover:bg-gray-800',
//                 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
//               )}
//             >
//               <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
//                 {dataLayer.initial}
//               </span>
//               <span className="truncate">{dataLayer.name}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default LayerToggle
