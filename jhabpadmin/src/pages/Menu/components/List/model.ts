import { getListMenu } from '@/services/jhabp/menu/menu.service';

const MenuListModel = {
  namespace: 'MenuListModel',
  state: {
    tableDataSource: [],
  },
  effects: {
    //@ts-ignore
    *getListMenu({}, { call, put }) {
      //@ts-ignore
      const menus = yield call(getListMenu, { maxResultCount: 5 });
      yield put({ type: 'setTableDataSource', payload: menus });
    },
  },
  reducers: {
    //@ts-ignore
    setTableDataSource(state, action) {
      state.tableDataSource = action.payload;
    },
  },
};

export default MenuListModel;
