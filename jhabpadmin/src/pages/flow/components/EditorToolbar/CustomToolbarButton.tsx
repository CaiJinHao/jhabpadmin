import { withPropsAPI } from 'gg-editor';
import type { FC } from 'react';
import { Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import * as icons from '@ant-design/icons';
import styles from './index.less';

type CustomToolbarButtonProps = {
  propsAPI?: any;
  icon: string;
  text: string;
  onClick: (propsAPI: any) => void;
};
const CustomToolbarButton: FC<CustomToolbarButtonProps> = ({ propsAPI, icon, text, ...props }) => {
  const onIconClick = () => {
    props.onClick(propsAPI);
  };

  return (
    <div {...props} className={'custom disable'} onClick={onIconClick}>
      <Tooltip title={text} placement="bottom" overlayClassName={styles.tooltip}>
        <Icon component={icons[icon]} />
      </Tooltip>
    </div>
  );
};

export default withPropsAPI(CustomToolbarButton as any);
