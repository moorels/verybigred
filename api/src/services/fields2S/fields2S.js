import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const fields2S = () => {
  return db.fields2.findMany()
}

export const fields2 = ({ id }) => {
  return db.fields2.findUnique({
    where: { id },
  })
}

export const createFields2 = ({ input }) => {
  return db.fields2.create({
    data: input,
  })
}

export const updateFields2 = ({ id, input }) => {
  return db.fields2.update({
    data: input,
    where: { id },
  })
}

export const deleteFields2 = ({ id }) => {
  return db.fields2.delete({
    where: { id },
  })
}

export const Fields2 = {
  contactemail: (_obj, { root }) =>
    db.fields2.findUnique({ where: { id: root.id } }).contactemail(),
}
