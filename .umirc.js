// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       {
  //         path: '/class/index',
  //         component: './class/index',
  //       },
  //       {
  //         path: '/',
  //         component: '../pages/index',
  //       },
  //     ],
  //   },
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true, // 处理按需加载的问题
        title: 'eggdemo',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
