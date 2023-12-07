export interface BaseLayer {
  id: string
  name: string
  url: string
}

export interface OverlayLayer {
  id: string
  name: string
  url: string
}

export interface EsriLayer {
  id: string
  name: string
  url: string
  source: string
}

export interface MapState {
  baseLayer: BaseLayer
  overlayLayers: OverlayLayer[]
  esriLayers: EsriLayer[]
  drawingData: any
  flyoutContent: string | null
}

export interface AnyAction {
  type: string
  payload?: any
}
