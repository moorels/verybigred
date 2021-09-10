export const schema = gql`
  type Fields1 {
    id: Int!
    field1: String!
    field2: String
    field3: String
    field4: String
    field5: String
    field6: String
    field7: String
    field8: String
    field9: String
    field10: String
    field11: String
    field12: String
    field13: String
    field14: String
    field15: String
    contactemail: String
    fields1Id: String!
  }

  type Query {
    fields1S: [Fields1!]!
    fields1(id: Int!): Fields1
  }

  input CreateFields1Input {
    field1: String!
    field2: String
    field3: String
    field4: String
    field5: String
    field6: String
    field7: String
    field8: String
    field9: String
    field10: String
    field11: String
    field12: String
    field13: String
    field14: String
    field15: String
    fields1Id: String!
  }

  input UpdateFields1Input {
    field1: String
    field2: String
    field3: String
    field4: String
    field5: String
    field6: String
    field7: String
    field8: String
    field9: String
    field10: String
    field11: String
    field12: String
    field13: String
    field14: String
    field15: String
    fields1Id: String
  }

  type Mutation {
    createFields1(input: CreateFields1Input!): Fields1!
    updateFields1(id: Int!, input: UpdateFields1Input!): Fields1!
    deleteFields1(id: Int!): Fields1!
  }
`
