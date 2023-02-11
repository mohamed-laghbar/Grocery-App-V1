import jwt from 'jsonwebtoken';

interface User {
  _id: string;
  email: string;
  role: string;
}

function refreshToken(user: User): string {
  const refresh_token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.REFRESH_SECRET || '',
    {
      expiresIn: '1d',
    }
  );
  return refresh_token;
}

export default refreshToken;
