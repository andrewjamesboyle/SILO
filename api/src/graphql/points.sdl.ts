export const schema = gql`
  type Point {
    id: Int!
    type: String
    description: String
  }

  type Query {
    points: [Point!]! @skipAuth
    point(id: Int!): Point @skipAuth
  }

  input CreatePointInput {
    type: String
    notes: String
    description: String
    geom: String
  }

  input UpdatePointInput {
    type: String
    notes: String
    department: String
  }

  type Mutation {
    createPoint(input: CreatePointInput!): Point! @skipAuth
    updatePoint(id: Int!, input: UpdatePointInput!): Point! @skipAuth
    deletePoint(id: Int!): Point! @skipAuth
  }
`
