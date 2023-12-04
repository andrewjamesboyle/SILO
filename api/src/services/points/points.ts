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
  const newPoint = await db.point.create({
    data: input,
  })

  await sendGeoData(newPoint.id, input.geom)

  return newPoint
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

export const Point: PointRelationResolvers = {
  layer: (_obj, { root }) => {
    return db.point.findUnique({ where: { id: root?.id } }).layer()
  },
}
