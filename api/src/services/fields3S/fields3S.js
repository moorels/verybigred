import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const fields3S = () => {
  return db.fields3.findMany()
}

export const fields3 = ({ id }) => {
  return db.fields3.findUnique({
    where: { id },
  })
}

export const createFields3 = ({ input }) => {
  return db.fields3.create({
    data: input,
  })
}

export const updateFields3 = ({ id, input }) => {
  return db.fields3.update({
    data: input,
    where: { id },
  })
}

export const deleteFields3 = ({ id }) => {
  return db.fields3.delete({
    where: { id },
  })
}

export const Fields3 = {
  contactemail: (_obj, { root }) =>
    db.fields3.findUnique({ where: { id: root.id } }).contactemail(),
}
