import { Col, Row } from 'antd';
import GGEditor, { Flow } from 'gg-editor';

import { PageContainer } from '@ant-design/pro-layout';
import EditorMinimap from './components/EditorMinimap';
import { FlowContextMenu } from './components/EditorContextMenu';
import { FlowDetailPanel } from './components/EditorDetailPanel';
import { FlowItemPanel } from './components/EditorItemPanel';
import { FlowToolbar } from './components/EditorToolbar';
import styles from './index.less';

GGEditor.setTrackable(false);

const FlowComponet = () => {
  const data = {
    nodes: [
      {
        type: 'node',
        size: '72*72',
        shape: 'flow-circle',
        color: '#FA8C16',
        label: 'Start',
        x: 589.515625,
        y: 117,
        id: '51f5e950',
        index: 0,
      },
      {
        type: 'node',
        size: '80*48',
        shape: 'flow-rect',
        color: '#1890FF',
        label: 'Normal',
        x: 453.515625,
        y: 299,
        id: '1910103c',
        index: 1,
      },
    ],
    edges: [
      {
        source: '51f5e950',
        sourceAnchor: 2,
        target: '1910103c',
        targetAnchor: 0,
        id: 'aeb73fef',
        index: 2,
      },
    ],
  };

  const onSaveClick = (propsAPI: any) => {
    const test = propsAPI.save();
    console.log(JSON.stringify(test));
  };

  return (
    <PageContainer content="千言万语不如一张图，流程图是表示算法思路的好方法">
      <GGEditor className={styles.editor}>
        <Row className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar onSaveClick={onSaveClick} />
          </Col>
        </Row>
        <Row className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Flow
              className={styles.flow}
              data={data}
              ref={(component) => {
                if (component) {
                  console.log(component);
                  console.log('graph:', component.graph);
                }
              }}
            />
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowContextMenu />
      </GGEditor>
    </PageContainer>
  );
};

export default FlowComponet;
