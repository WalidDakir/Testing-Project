const backendDomin = "http://localhost:8080";

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : "get"
    },
    allUser: {
        url: `${backendDomin}/api/all-users`,
        method: "get"
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post"
    },
    getAllOrders: {
        url: `${backendDomin}/api/orders`,
        method: "get"
    },
    updateOrderStatus: (orderId) => ({
        url: `${backendDomin}/api/orders/${orderId}/status`,
        method: "patch"
    }),
}

export default SummaryApi;
