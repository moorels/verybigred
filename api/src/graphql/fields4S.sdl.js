export const schema = gql`
  type Fields4 {
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
    fields4Id: String!
  }

  type Query {
    fields4S: [Fields4!]!
    fields4(id: Int!): Fields4
  }

  input CreateFields4Input {
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
    fields4Id: String!
  }

  input UpdateFields4Input {
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
    fields4Id: String
  }

  type Mutation {
    createFields4(input: CreateFields4Input!): Fields4!
    updateFields4(id: Int!, input: UpdateFields4Input!): Fields4!
    deleteFields4(id: Int!): Fields4!
  }
`
