export const schema = gql`
  type Polygon {
    id: Int!
    type: String
    description: String
    project: String
    layerId: Int
    layer: Layer
  }

  type Query {
    polygons: [Polygon!]! @requireAuth
    polygon(id: Int!): Polygon @requireAuth
  }

  input CreatePolygonInput {
    type: String
    description: String
    project: String
    layerId: Int
  }

  input UpdatePolygonInput {
    type: String
    description: String
    project: String
    layerId: Int
  }

  type Mutation {
    createPolygon(input: CreatePolygonInput!): Polygon! @requireAuth
    updatePolygon(id: Int!, input: UpdatePolygonInput!): Polygon! @requireAuth
    deletePolygon(id: Int!): Polygon! @requireAuth
  }
`
