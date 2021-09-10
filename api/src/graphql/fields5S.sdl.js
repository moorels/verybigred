export const schema = gql`
  type Fields5 {
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
    fields5Id: String!
  }

  type Query {
    fields5S: [Fields5!]!
    fields5(id: Int!): Fields5
  }

  input CreateFields5Input {
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
    fields5Id: String!
  }

  input UpdateFields5Input {
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
    fields5Id: String
  }

  type Mutation {
    createFields5(input: CreateFields5Input!): Fields5!
    updateFields5(id: Int!, input: UpdateFields5Input!): Fields5!
    deleteFields5(id: Int!): Fields5!
  }
`
