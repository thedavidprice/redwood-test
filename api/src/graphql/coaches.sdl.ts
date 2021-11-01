export const schema = gql`
  type Coach {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    handle: String!
    type: String!
    isAssistant: String!
    team: Team
    teamId: String
  }

  type Query {
    coaches: [Coach!]! @requireAuth
  }

  input CreateCoachInput {
    name: String!
    handle: String!
    type: String!
    isAssistant: String!
    teamId: String
  }

  input UpdateCoachInput {
    name: String
    handle: String
    type: String
    isAssistant: String
    teamId: String
  }
`
