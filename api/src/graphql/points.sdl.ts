export const schema = gql`
  type Point {
    id: Int!
    type: String
    description: String
    project: String
    layerId: Int
    layer: Layer
    createdById: String!
    createdBy: User!
  }

  type Query {
    points: [Point!]! @requireAuth
    point(id: Int!): Point @requireAuth
  }

  input CreatePointInput {
    type: String
    description: String
    project: String
    layerId: Int
    createdById: String!
  }

  input UpdatePointInput {
    type: String
    description: String
    project: String
    layerId: Int
    createdById: String
  }

  type Mutation {
    createPoint(input: CreatePointInput!): Point! @requireAuth
    updatePoint(id: Int!, input: UpdatePointInput!): Point! @requireAuth
    deletePoint(id: Int!): Point! @requireAuth
  }
`
