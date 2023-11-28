import type {
  QueryResolvers,
  MutationResolvers,
  LineRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const lines: QueryResolvers['lines'] = () => {
  return db.line.findMany()
}

export const line: QueryResolvers['line'] = ({ id }) => {
  return db.line.findUnique({
    where: { id },
  })
}

export const createLine: MutationResolvers['createLine'] = ({ input }) => {
  return db.line.create({
    data: input,
  })
}

export const updateLine: MutationResolvers['updateLine'] = ({ id, input }) => {
  return db.line.update({
    data: input,
    where: { id },
  })
}

export const deleteLine: MutationResolvers['deleteLine'] = ({ id }) => {
  return db.line.delete({
    where: { id },
  })
}

export const Line: LineRelationResolvers = {
  layer: (_obj, { root }) => {
    return db.line.findUnique({ where: { id: root?.id } }).layer()
  },
}
