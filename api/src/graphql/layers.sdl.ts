export const schema = gql`
  type Layer {
    id: Int!
    name: String!
    description: String
    createdById: Int!
    createdBy: User!
    organizationId: Int!
    organization: Organization!
    lines: [Line]!
    points: [Point]!
    polygons: [Polygon]!
  }

  type Query {
    layers: [Layer!]! @requireAuth
    layer(id: Int!): Layer @requireAuth
  }

  input CreateLayerInput {
    name: String!
    description: String
    createdById: Int!
    organizationId: Int!
  }

  input UpdateLayerInput {
    name: String
    description: String
    createdById: Int
    organizationId: Int
  }

  type Mutation {
    createLayer(input: CreateLayerInput!): Layer! @requireAuth
    updateLayer(id: Int!, input: UpdateLayerInput!): Layer! @requireAuth
    deleteLayer(id: Int!): Layer! @requireAuth
  }
`
