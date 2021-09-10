import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const fields1S = () => {
  return db.fields1.findMany()
}

export const fields1 = ({ id }) => {
  return db.fields1.findUnique({
    where: { id },
  })
}

export const createFields1 = ({ input }) => {
  return db.fields1.create({
    data: input,
  })
}

export const updateFields1 = ({ id, input }) => {
  return db.fields1.update({
    data: input,
    where: { id },
  })
}

export const deleteFields1 = ({ id }) => {
  return db.fields1.delete({
    where: { id },
  })
}

export const Fields1 = {
  contactemail: (_obj, { root }) =>
    db.fields1.findUnique({ where: { id: root.id } }).contactemail(),
}
