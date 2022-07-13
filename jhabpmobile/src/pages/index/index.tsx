import { View, Text } from "@tarojs/components";
import "./index.less";

const Index = () => {
  return (
    <>
      <View className='red'>
        <Text>函数式组件测试!</Text>
      </View>
      <div className='red'>
        <span>Test !</span>
      </div>
    </>
  );
};

export default Index;
