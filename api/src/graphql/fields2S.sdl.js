export const schema = gql`
  type Fields2 {
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
    fields2Id: String!
  }

  type Query {
    fields2S: [Fields2!]!
    fields2(id: Int!): Fields2
  }

  input CreateFields2Input {
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
    fields2Id: String!
  }

  input UpdateFields2Input {
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
    fields2Id: String
  }

  type Mutation {
    createFields2(input: CreateFields2Input!): Fields2!
    updateFields2(id: Int!, input: UpdateFields2Input!): Fields2!
    deleteFields2(id: Int!): Fields2!
  }
`
