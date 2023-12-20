import { db } from 'src/lib/db'

export const findOrCreateUser = async (auth0Id) => {
  let user = await db.user.findUnique({
    where: auth0Id,
  })

  if (!user) {
    user = await db.user.create({
      data: auth0Id,
    })
  } else {
    user = await db.user.update({
      where: auth0Id,
      data: auth0Id,
    })
  }
  return user
}
