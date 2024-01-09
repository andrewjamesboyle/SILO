import type {
  QueryResolvers,
  MutationResolvers,
  PolygonRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const polygons: QueryResolvers['polygons'] = () => {
  return db.polygon.findMany()
}

export const polygon: QueryResolvers['polygon'] = ({ id }) => {
  return db.polygon.findUnique({
    where: { id },
  })
}

export const createPolygon: MutationResolvers['createPolygon'] = ({
  input,
}) => {
  return db.polygon.create({
    data: input,
  })
}

export const updatePolygon: MutationResolvers['updatePolygon'] = ({
  id,
  input,
}) => {
  return db.polygon.update({
    data: input,
    where: { id },
  })
}

export const deletePolygon: MutationResolvers['deletePolygon'] = ({ id }) => {
  return db.polygon.delete({
    where: { id },
  })
}

export const Polygon: PolygonRelationResolvers = {
  layer: (_obj, { root }) => {
    return db.polygon.findUnique({ where: { id: root?.id } }).layer()
  },
}
