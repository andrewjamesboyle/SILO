export const schema = gql`
  type Line {
    id: Int!
    type: String
    description: String
    project: String
    layerId: Int
    layer: Layer
  }

  type Query {
    lines: [Line!]! @requireAuth
    line(id: Int!): Line @requireAuth
  }

  input CreateLineInput {
    type: String
    description: String
    project: String
    layerId: Int
  }

  input UpdateLineInput {
    type: String
    description: String
    project: String
    layerId: Int
  }

  type Mutation {
    createLine(input: CreateLineInput!): Line! @requireAuth
    updateLine(id: Int!, input: UpdateLineInput!): Line! @requireAuth
    deleteLine(id: Int!): Line! @requireAuth
  }
`
