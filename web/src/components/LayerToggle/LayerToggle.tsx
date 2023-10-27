import { useMap, useMapDispatch, useMapState } from 'src/context/MapContext'
import { baseLayers, overlayLayers } from './layersConfig'
import { BaseLayer, OverlayLayer } from '../../context/mapTypes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LayerToggle = () => {
  const state = useMapState()
  const dispatch = useMapDispatch()
  console.log('baseLayers', baseLayers)

  const handleToggleBaseLayer = (layer: BaseLayer) => {
    dispatch({ type: 'SET_BASE_LAYER', payload: layer })
  }

  const handleToggleOverlayLayer = (layer: OverlayLayer) => {
    dispatch({ type: 'TOGGLE_OVERLAY_LAYER', payload: layer })
  }

  return (
    <>
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
                  onChange={() => handleToggleBaseLayer(dataLayer)}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm"
                />
                <span className="truncate">{dataLayer.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul role="list" className="-mx-2 mt-2 space-y-1">
          {overlayLayers.map((dataLayer) => (
            <li key={dataLayer.id}>
              <div
                className={classNames(
                  state.overlayLayers.name === dataLayer.name
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                  'group flex gap-x-3 rounded-md p-2 text-xs leading-6 font-semibold'
                )}
              >
                <input
                  type="checkbox"
                  checked={state.baseLayer.name === dataLayer.name}
                  onChange={() => handleToggleOverlayLayer(dataLayer)}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm"
                />
                <span className="truncate">{dataLayer.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default LayerToggle
