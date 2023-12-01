export const schema = gql`
  type Layer {
    id: Int!
    name: String!
    projectId: Int!
    project: Project!
    type: String!
    createdById: Int!
    createdBy: User!
    line: [Line]!
    point: [Point]!
    polygon: [Polygon]!
  }

  type Query {
    layers: [Layer!]! @requireAuth
    layer(id: Int!): Layer @requireAuth
  }

  input CreateLayerInput {
    name: String!
    projectId: Int!
    type: String!
    createdById: Int!
  }

  input UpdateLayerInput {
    name: String
    projectId: Int
    type: String
    createdById: Int
  }

  type Mutation {
    createLayer(input: CreateLayerInput!): Layer! @requireAuth
    updateLayer(id: Int!, input: UpdateLayerInput!): Layer! @requireAuth
    deleteLayer(id: Int!): Layer! @requireAuth
  }
`
