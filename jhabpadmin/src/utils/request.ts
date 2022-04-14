import { extend } from 'umi-request';

import { history } from 'umi';

const errorHandler = (error: any) => {
  console.log(error);
  if (error.response) {
    // console.log(error.response.status);
    // console.log(error.response.headers);
    // console.log(error.data);
    // console.log(error.request);
    if (error.response.status) {
      history.push(LoginPage);
    }
  }
};
const extendRequest = extend({ errorHandler });

export default extendRequest;
