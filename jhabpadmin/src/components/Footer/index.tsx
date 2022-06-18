import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  //TODO:本地化示例
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '金浩出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'JH Abp Admin',
          title: 'JH Abp Admin',
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
