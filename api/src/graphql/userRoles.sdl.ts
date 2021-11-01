export const schema = gql`
  type UserRole {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    role: Role!
    user: User
    userId: Int
  }

  enum Role {
    ADMIN
    EDITOR
    PUBLISHER
  }

  type Query {
    userRoles: [UserRole!]! @requireAuth
  }

  input CreateUserRoleInput {
    role: Role!
    userId: Int
  }

  input UpdateUserRoleInput {
    role: Role
    userId: Int
  }
`
