export const schema = gql`
  type Line {
    id: Int!
    type: String
    in_prj: String
    notes: String
    geometry: String!
    layerId: Int!
    layer: Layer!
  }

  type Query {
    lines: [Line!]! @requireAuth
    line(id: Int!): Line @requireAuth
  }

  input CreateLineInput {
    type: String
    in_prj: String
    notes: String
    geometry: String!
    layerId: Int!
  }

  input UpdateLineInput {
    type: String
    in_prj: String
    notes: String
    geometry: String
    layerId: Int
  }

  type Mutation {
    createLine(input: CreateLineInput!): Line! @requireAuth
    updateLine(id: Int!, input: UpdateLineInput!): Line! @requireAuth
    deleteLine(id: Int!): Line! @requireAuth
  }
`
