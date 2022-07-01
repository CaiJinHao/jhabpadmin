import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { setLocale, useModel, SelectLang } from 'umi';
import { switchLanguage } from '@/services/jhabp/abp.service';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const changeLang = async ({ key }: any) => {
    await switchLanguage(key);
    setLocale(key, true);
  };

  const getLocalData = (defaultLangUConfig: any[]): any[] => {
    //TODO:需要添加新的需要的时候，在locales文件夹中添加文件，并在这里添加语言列表
    return [
      {
        lang: 'zh-CN',
        label: '简体中文',
        icon: '🇨🇳',
        title: '语言',
      },
      {
        lang: 'zh-TW',
        label: '繁體中文',
        icon: '🇭🇰',
        title: '語言',
      },
      {
        lang: 'en-US',
        label: 'English',
        icon: '🇺🇸',
        title: 'Language',
      },
    ];
  };

  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="JHtest"
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">JHtest</a>, value: 'JHtest' },
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
      <SelectLang
        className={styles.action}
        onItemClick={changeLang}
        postLocalesData={getLocalData}
      />
    </Space>
  );
};
export default GlobalHeaderRight;
