import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const fields5S = () => {
  return db.fields5.findMany()
}

export const fields5 = ({ id }) => {
  return db.fields5.findUnique({
    where: { id },
  })
}

export const createFields5 = ({ input }) => {
  return db.fields5.create({
    data: input,
  })
}

export const updateFields5 = ({ id, input }) => {
  return db.fields5.update({
    data: input,
    where: { id },
  })
}

export const deleteFields5 = ({ id }) => {
  return db.fields5.delete({
    where: { id },
  })
}

export const Fields5 = {
  contactemail: (_obj, { root }) =>
    db.fields5.findUnique({ where: { id: root.id } }).contactemail(),
}
