export const schema = gql`
  type Project {
    id: Int!
    name: String!
    description: String
    createdById: Int!
    createdBy: User!
    organizationId: Int!
    organization: Organization!
    layers: [Layer]!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    name: String!
    description: String
    createdById: Int!
    organizationId: Int!
  }

  input UpdateProjectInput {
    name: String
    description: String
    createdById: Int
    organizationId: Int
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
