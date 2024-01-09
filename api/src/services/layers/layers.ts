import type {
  QueryResolvers,
  MutationResolvers,
  LayerRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const layers: QueryResolvers['layers'] = () => {
  return db.layer.findMany()
}

export const layer: QueryResolvers['layer'] = ({ id }) => {
  return db.layer.findUnique({
    where: { id },
  })
}

export const createLayer: MutationResolvers['createLayer'] = ({ input }) => {
  return db.layer.create({
    data: input,
  })
}

export const updateLayer: MutationResolvers['updateLayer'] = ({
  id,
  input,
}) => {
  return db.layer.update({
    data: input,
    where: { id },
  })
}

export const deleteLayer: MutationResolvers['deleteLayer'] = ({ id }) => {
  return db.layer.delete({
    where: { id },
  })
}

export const Layer: LayerRelationResolvers = {
  createdBy: (_obj, { root }) => {
    return db.layer.findUnique({ where: { id: root?.id } }).createdBy()
  },
  organization: (_obj, { root }) => {
    return db.layer.findUnique({ where: { id: root?.id } }).organization()
  },
  lines: (_obj, { root }) => {
    return db.layer.findUnique({ where: { id: root?.id } }).lines()
  },
  points: (_obj, { root }) => {
    return db.layer.findUnique({ where: { id: root?.id } }).points()
  },
  polygons: (_obj, { root }) => {
    return db.layer.findUnique({ where: { id: root?.id } }).polygons()
  },
}
