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
                    component: "./login_register"
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
                        {path: '/admin/order_list', component: 'Table/order_list'},
                        {path: '/admin/service_list', component: 'Table/service_list'},
                        {path: '/admin/course_list', component: 'Table/course_list'},
                        {path: '/admin/location_list', component: 'Table/location_list'},
                        {path: '/admin/product_list', component: 'Table/product_list'},
                        {path: '/admin/user_list', component: 'Table/user_list'},
                    ]
                },
            ]
        }
    ]
};