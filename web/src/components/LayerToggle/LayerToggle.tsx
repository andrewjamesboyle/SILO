import { useMap, useMapDispatch, useMapState } from 'src/context/MapContext'
import { baseLayers } from './layersConfig'
import { BaseLayer } from '../../context/mapTypes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LayerToggle = () => {
  const state = useMapState()
  const dispatch = useMapDispatch()
  console.log('baseLayers', baseLayers)

  const handleToggle = (layer: BaseLayer) => {
    dispatch({ type: 'SET_BASE_LAYER', payload: layer })
    console.log('dispatched toggle layer', layer)
  }

  return (
    <div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {baseLayers.map((dataLayer) => (
          <li key={dataLayer.id}>
            <div
              className={classNames(
                state.baseLayer.name === dataLayer.name
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                'group flex gap-x-3 rounded-md p-2 text-xs leading-6 font-semibold'
              )}
            >
              <input
                type="checkbox"
                checked={state.baseLayer.name === dataLayer.name}
                onChange={() => handleToggle(dataLayer)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm"
              />
              <span className="truncate">{dataLayer.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LayerToggle
