export const schema = gql`
  type Contact {
    id: Int!
    firstname: String
    lastname: String
    email: String!
    landline: String
    mobile: String
    website: String
    street: String
    suburb: String
    notes: String
    useremail: String
    contactEmailId: String!
    appoint: [Appointment]!
    fieldx1: [Fields1]!
    fieldx2: [Fields2]!
    fieldx3: [Fields3]!
    fieldx4: [Fields4]!
    fieldx5: [Fields5]!
  }

  type Query {
    contacts: [Contact!]!
    contact(id: Int!): Contact
    contactsID(contactEmailId: String): [Contact]
  }

  input CreateContactInput {
    firstname: String
    lastname: String
    email: String!
    landline: String
    mobile: String
    website: String
    street: String
    suburb: String
    notes: String
    contactEmailId: String!
  }

  input UpdateContactInput {
    firstname: String
    lastname: String
    email: String
    landline: String
    mobile: String
    website: String
    street: String
    suburb: String
    notes: String
    contactEmailId: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact!
    updateContact(id: Int!, input: UpdateContactInput!): Contact!
    deleteContact(id: Int!): Contact!
  }
`
