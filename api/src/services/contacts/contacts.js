import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const contacts = () => {
  return db.contact.findMany()
}

export const contactsID = (contactEmailId) => {
  return db.contact.findMany({
    where: { contactEmailId: contactEmailId.contactEmailId },
  })
}


export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  return db.contact.create({
    data: input,
  })
}

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}

export const Contact = {
  useremail: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).useremail(),
  appoint: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).appoint(),
  fieldx1: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).fieldx1(),
  fieldx2: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).fieldx2(),
  fieldx3: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).fieldx3(),
  fieldx4: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).fieldx4(),
  fieldx5: (_obj, { root }) =>
    db.contact.findUnique({ where: { id: root.id } }).fieldx5(),
}
