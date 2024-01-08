import type {
  QueryResolvers,
  MutationResolvers,
  PointRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const points: QueryResolvers['points'] = () => {
  return db.point.findMany()
}

export const point: QueryResolvers['point'] = ({ id }) => {
  return db.point.findUnique({
    where: { id },
  })
}

export const createPoint: MutationResolvers['createPoint'] = ({ input }) => {
  return db.point.create({
    data: input,
  })
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
  createdBy: (_obj, { root }) => {
    return db.point.findUnique({ where: { id: root?.id } }).createdBy()
  },
}
