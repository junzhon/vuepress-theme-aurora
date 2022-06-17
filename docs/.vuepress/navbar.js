module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [

        { text: 'life',
            iconClass: 'aurora-navbar-hua2',
            children: [
                {
                    children: [
                        {
                            text: 'Me',
                            link: "/about",
                        }

                    ],
                    text: "我?",
                },
                {
                    text: '说说',
                    children:[
                        {
                            text: 'chat',
                            link: '/mood'
                        }
                    ],
                },
                {
                    text: "相册",
                    children: [
                        {
                            text: 'photo',
                            link: '/photo'
                        }
                    ],
                },
            ],
        },
        {
            text: '文章',
            iconClass: 'aurora-navbar-a-ziyuan107',
            children: [
                {
                    text: '标签',
                    children: [{
                        text: 'tag',
                        link: '/tag'
                    }],
                },
                {
                    text: "时间轴",
                    children: [
                        {
                            text: 'archive',
                            link: '/archive'
                        }
                    ],
                },
            ],
        },

        {
            text: '聊天室',
            link: 'http://localhost:8090/',
            iconClass: 'aurora-navbar-si-glyph-load'
        },
        {
            text: 'Aurora',
            link: 'https://github.com/vuepress-aurora/vuepress-theme-aurora',
            iconClass: 'aurora-navbar-github1'
        }
    ]
}