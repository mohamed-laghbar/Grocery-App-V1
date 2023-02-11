import jwt from 'jsonwebtoken';

interface User {
  _id: string;
  email: string;
  role: string;
}

function accesToken(user: User): string {
  const acces_token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET || '',
    {
      expiresIn: '1d',
    }
  );
  return acces_token;
}

export default accesToken;
