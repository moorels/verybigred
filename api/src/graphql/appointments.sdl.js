export const schema = gql`
  type Appointment {
    id: Int!
    time: String!
    date: String!
    contactemail: String
    appointEmailId: String!
  }

  type Query {
    appointments: [Appointment!]!
    appointment(id: Int!): Appointment
    appointmentsID(appointEmailId: String): [Appointment]
  }

  input CreateAppointmentInput {
    time: String!
    date: String!
    appointEmailId: String!
  }

  input UpdateAppointmentInput {
    time: String
    date: String
    appointEmailId: String
  }

  type Mutation {
    createAppointment(input: CreateAppointmentInput!): Appointment!
    updateAppointment(id: Int!, input: UpdateAppointmentInput!): Appointment!
    deleteAppointment(id: Int!): Appointment!
  }
`
