export const schema = gql`
  type Point {
    id: Int!
    type: String
    in_prj: String
    notes: String
    geometry: String
    layerId: Int
    layer: Layer
  }

  type Query {
    points: [Point!]! @requireAuth
    point(id: Int!): Point @requireAuth
  }

  input CreatePointInput {
    type: String
    in_prj: String
    notes: String
    geometry: String
    layerId: Int
  }

  input UpdatePointInput {
    type: String
    in_prj: String
    notes: String
    geometry: String
    layerId: Int
  }

  type Mutation {
    createPoint(input: CreatePointInput!): Point! @requireAuth
    updatePoint(id: Int!, input: UpdatePointInput!): Point! @requireAuth
    deletePoint(id: Int!): Point! @requireAuth
  }
`
