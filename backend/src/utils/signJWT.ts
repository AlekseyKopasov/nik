import jwt from 'jsonwebtoken'

export const signJWT = (userId: string): string => {
  return jwt.sign(userId, 'dev-only-secret-key')
}
