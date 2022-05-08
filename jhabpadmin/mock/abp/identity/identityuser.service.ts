import { Request, Response } from 'express';

export default {
  'GET /identity/api/v1/IdentityUser/info': async (req: Request, res: Response) => {
    res.send({
      userName: 'admin',
      normalizedUserName: 'ADMIN',
      name: 'admin',
      surname: '',
      email: '531003539@qq.com',
      normalizedEmail: '531003539@QQ.COM',
      emailConfirmed: false,
      passwordHash:
        'AQAAAAEAACcQAAAAEJjvN1JrOLjRrfCpSFDAh840E6YdQURdBlHEOxZFKVJx+H72Vy5rayXovEnDUbwECg==',
      securityStamp: '22RYGHDSBYJF5UGWOCM2OTEX7TBV7OQX',
      isExternal: false,
      phoneNumber: '',
      phoneNumberConfirmed: false,
      twoFactorEnabled: false,
      lockoutEnd: null,
      lockoutEnabled: true,
      accessFailedCount: 0,
      isActive: true,
      concurrencyStamp: '36951c81370e468ebfd24955d7db38c4',
      tenantId: null,
      organizationUnitIds: null,
      roleIds: ['3a02a832-edbc-89d4-1ffd-9e4a024109ed'],
      isDeleted: false,
      deleterId: null,
      deletionTime: null,
      lastModificationTime: '2022-04-12 14:12:07',
      lastModifierId: null,
      creationTime: '2022-03-17 11:57:35',
      creatorId: null,
      id: '3a02a832-eb33-3ce4-cfec-5cc8abf98384',
      extraProperties: {},
    });
  },
};
