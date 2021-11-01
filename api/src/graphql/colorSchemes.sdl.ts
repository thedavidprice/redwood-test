export const schema = gql`
  type ColorScheme {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    primary: String!
    secondary: String!
    team: Team
    teamId: String
  }

  type Query {
    colorSchemes: [ColorScheme!]! @requireAuth
  }

  input CreateColorSchemeInput {
    primary: String!
    secondary: String!
    teamId: String
  }

  input UpdateColorSchemeInput {
    primary: String
    secondary: String
    teamId: String
  }
`
