import { Request, Response } from 'express';

export default {
  'POST /identity/api/account/login': async (req: Request, res: Response) => {
    const { password, userNameOrEmailAddress, rememberMe, type } = req.body;
    if (password === 'KimHo@123' && userNameOrEmailAddress === 'admin') {
      res.send({
        result: 1,
        description: 'success',
        rememberMe,
        currentAuthority: 'admin',
        type: type,
      });
      return;
    }

    res.send({
      result: 2,
      description: 'InvalidUserNameOrPassword',
      type: type,
      rememberMe,
      currentAuthority: 'guest',
    });
  },

  'GET /identity/api/account/logout': async (req: Request, res: Response) => {
    res.send({ data: {}, success: true });
  },
};
