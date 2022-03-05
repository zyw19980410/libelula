export default {
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true
            }
        ],
    ],
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