export const schema = gql`
  type Fields3 {
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
    fields3Id: String!
  }

  type Query {
    fields3S: [Fields3!]!
    fields3(id: Int!): Fields3
  }

  input CreateFields3Input {
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
    fields3Id: String!
  }

  input UpdateFields3Input {
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
    fields3Id: String
  }

  type Mutation {
    createFields3(input: CreateFields3Input!): Fields3!
    updateFields3(id: Int!, input: UpdateFields3Input!): Fields3!
    deleteFields3(id: Int!): Fields3!
  }
`
