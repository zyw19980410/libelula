export default {
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true
            }
        ],
    ],
    cssLoaderOptions: {
        localIdentName:'[local]',  // to import css
    },
    routes: [
        {
            path: "/",
            component: "../layouts/index",
            routes: [
                {
                    path: "/",
                    component: "./index"
                },
                {
                    path: "/service",
                    component: "./service"
                },
                {
                    path: "/contact",
                    component: "./contact"
                },
                {
                    path: "/about",
                    component: "./about"
                },
                {
                    path: "loginregister",
                    component: "./loginregister"
                }
            ]
        }
    ]
};