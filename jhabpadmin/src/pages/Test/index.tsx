import React, { useEffect } from 'react';

const Test = () => {
  const testUsb = () => {
    //先允许才能调用
    //@ts-ignore
    navigator.usb
      .requestDevice({ filters: [{ productId: 33485, vendorId: 4292 }] })
      .then((device) => {
        console.log(device);
        console.log(device.productName); // "Arduino Micro"
        console.log(device.manufacturerName); // "Arduino LLC"
        device
          .open()
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });

    //@ts-ignore
    navigator.usb.getDevices().then((devices) => {
      console.log(devices);
      console.log('Total devices: ' + devices.length);
      devices.forEach((device) => {
        console.log(
          'Product name: ' + device.productName + ', serial number ' + device.serialNumber,
        );
      });
    });
  };

  useEffect(() => {}, []);
  return <div onClick={testUsb}>测试USB调用</div>;
};

export default Test;
