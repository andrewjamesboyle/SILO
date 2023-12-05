import type {
  QueryResolvers,
  MutationResolvers,
  PointRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { sendGeoData } from '../geoApi/sendGeoData'

export const points: QueryResolvers['points'] = () => {
  return db.point.findMany()
}

export const point: QueryResolvers['point'] = ({ id }) => {
  return db.point.findUnique({
    where: { id },
  })
}

export const createPoint: MutationResolvers['createPoint'] = async ({
  input,
}) => {
  const { geom, ...dbInput } = input // Separate geospatial data from metadata
  const newPoint = await db.point.create({
    data: { ...dbInput, geom: 'placeholder' }, // TODO: remove this placeholder geom
  })
  try {
    const data = await sendGeoData(newPoint.id, geom) // Send Geo data to Flask API
    console.log('sendGeoData response: ', data)
  } catch (error) {
    console.error('Error sending geo data to Flask API: ', error)
  }
  return newPoint // Return a point to keep the types happy
}

export const updatePoint: MutationResolvers['updatePoint'] = ({
  id,
  input,
}) => {
  return db.point.update({
    data: input,
    where: { id },
  })
}

export const deletePoint: MutationResolvers['deletePoint'] = ({ id }) => {
  return db.point.delete({
    where: { id },
  })
}

// export const Point: PointRelationResolvers = {
//   layer: (_obj, { root }) => {
//     return db.point.findUnique({ where: { id: root?.id } }).layer()
//   },
// }
