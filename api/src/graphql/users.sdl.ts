export const schema = gql`
  type User {
    id: Int!
    auth0Id: String!
    email: String
    roleId: Int
    role: Role
    organizations: [Organization]!
    layers: [Layer]!
    points: [Point]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    auth0Id: String!
    email: String
    roleId: Int
  }

  input UpdateUserInput {
    auth0Id: String
    email: String
    roleId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
