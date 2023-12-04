export const schema = gql`
  type Point {
    id: Int!
    type: String
    inPrj: String
    notes: String
    geom: String
    layer: String
  }

  type Query {
    points: [Point!]! @skipAuth
    point(id: Int!): Point @skipAuth
  }

  input CreatePointInput {
    type: String
    notes: String
    geom: String
  }

  input UpdatePointInput {
    type: String
    inPrj: String
    notes: String
    geom: String
  }

  type Mutation {
    createPoint(input: CreatePointInput!): Point! @skipAuth
    updatePoint(id: Int!, input: UpdatePointInput!): Point! @skipAuth
    deletePoint(id: Int!): Point! @skipAuth
  }
`
