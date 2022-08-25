import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { Avatar, Space } from 'antd';

const Footer: React.FC = () => {
  const intl = useIntl();
  //TODO:本地化示例
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'JhAbp',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'JH Abp Admin',
          title: (
            <Space>
              <Avatar size="small" src="/logo.png" />
              JH Abp Admin
            </Space>
          ),
          href: 'https://jinhao.6mv6.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/CaiJinHao/jhabpmodule',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
