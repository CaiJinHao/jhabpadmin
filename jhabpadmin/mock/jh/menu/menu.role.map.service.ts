import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'GET /jhmenu/api/v1/MenuRoleMap/CurrentUserNavMenus': async (req: Request, res: Response) => {
    // await waitTime(3000);
    res.send([
      {
        path: '',
        name: '云数据中心',
        icon: 'HeartOutlined',
        routes: [
          {
            path: '/main/view/equipmentgroup/index.html',
            name: '你的菜单',
            icon: '',
            routes: [],
            code: 'A0101',
            parentCode: 'A01',
            sort: 1,
          },
        ],
        code: 'A01',
        parentCode: '',
        sort: 1,
      },
      {
        path: '',
        name: '系统设置',
        icon: 'TableOutlined',
        routes: [
          {
            path: '/menu',
            name: '菜单管理',
            icon: '',
            routes: [],
            code: 'A0201',
            parentCode: 'A02',
            sort: 1,
          },
          {
            path: '/main/view/rolemenuand/index.html',
            name: '菜单权限管理',
            icon: '',
            routes: [],
            code: 'A0202',
            parentCode: 'A02',
            sort: 2,
          },
          {
            path: '/main/view/roleinterfaceand/index.html',
            name: '接口权限管理',
            icon: '',
            routes: [],
            code: 'A0203',
            parentCode: 'A02',
            sort: 3,
          },
          {
            path: '/main/view/user/index.html',
            name: '用户管理',
            icon: '',
            routes: [],
            code: 'A0204',
            parentCode: 'A02',
            sort: 4,
          },
          {
            path: '/main/view/organizationunit/index.html',
            name: '组织管理',
            icon: '',
            routes: [],
            code: 'A0205',
            parentCode: 'A02',
            sort: 5,
          },
          {
            path: '/main/view/auditLogging/index.html',
            name: '系统审计日志',
            icon: '',
            routes: [],
            code: 'A0206',
            parentCode: 'A02',
            sort: 6,
          },
        ],
        code: 'A02',
        parentCode: '',
        sort: 1,
      },
    ]);
  },
};
