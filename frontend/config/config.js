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
        // localIdentName:'[local]',  // to import css
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
                },
                {
                    path: "customer",
                    component: "./customer"
                },
                {
                    path: "cart",
                    component: "./cart"
                },
                {
                    path: "owner_admin",
                    component: "./owner_admin"
                },
                {
                    path: "admin",
                    component: "./admin",
                    routes: [
                        {path: '/admin/graph1', component: 'Dashboard/graph'},
                        {path: '/admin/graph2', component: 'Dashboard/graph'},
                        {path: '/admin/graph3', component: 'Dashboard/graph'},
                    ]
                },
            ]
        }
    ]
};