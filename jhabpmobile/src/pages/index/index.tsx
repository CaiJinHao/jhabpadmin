import { View, Text } from "@tarojs/components";
import "./index.scss";
import { Button } from "@taroify/core";

const Index = () => {
  return (
    <View className='index'>
      <Text>Hello world 666!</Text>
      <Button color='info'>信息按钮</Button>
    </View>
  );
};

export default Index;
