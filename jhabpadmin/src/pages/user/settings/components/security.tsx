import React, { useState } from 'react';
import { List } from 'antd';
import { useModel } from 'umi';
import ProForm, { ModalForm, ProFormText } from '@ant-design/pro-form';
import PasswordModify from './PasswordModify';
import { logout } from '@/services/jhabp/auth.service';
type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱 Weak</span>,
};

const SecurityView: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [visibleOperation, setVisibleOperation] = useState<boolean>(false);

  const getData = () => [
    {
      title: '账户密码',
      description: (
        <>
          当前密码强度：
          {passwordStrength.strong}
        </>
      ),
      actions: [
        <a
          key="ModifyPwd"
          onClick={() => {
            setVisibleOperation(true);
          }}
        >
          修改
        </a>,
      ],
    },
    {
      title: '密保邮箱',
      description: `已绑定邮箱：${currentUser?.email}`,
      actions: [<a key="Modify">修改</a>],
    },
    // {
    //   title: 'MFA 设备',
    //   description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
    //   actions: [<a key="bind">绑定</a>],
    // },
  ];

  const data = getData();
  return (
    <>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
      <PasswordModify
        visible={visibleOperation}
        onCancel={() => {
          setVisibleOperation(false);
        }}
        onSubmit={() => {
          setVisibleOperation(false);
          // logout();
        }}
      />
    </>
  );
};

export default SecurityView;
