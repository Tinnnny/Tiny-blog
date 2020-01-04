module.exports=[
     // [
        //     'vuepress-plugin-helper-live2d',{
        //     live2d: {
        //         // 是否启用(关闭请设置为false)(default: true)
        //         enable: false,
        //         model: 'hibiki',
        //         display: {
        //             position: "right", // 显示位置：left/right(default: 'right')
        //             width: 135, // 模型的长度(default: 135)
        //             height: 300, // 模型的高度(default: 300)
        //             hOffset: 65, //  水平偏移(default: 65)
        //             vOffset: 0, //  垂直偏移(default: 0)
        //         },
        //         mobile: {
        //             show: false // 是否在移动设备上显示(default: false)
        //         },
        //         react: {
        //             opacity: 0.8 // 模型透明度(default: 0.8)
        //         }
        //     }
        // }],
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: '.content__default img',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
              margin: 16
            }
          }]
        // ['@vuepress/medium-zoom']
];