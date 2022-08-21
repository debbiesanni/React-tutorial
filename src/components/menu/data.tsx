import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Notifications from '@material-ui/icons/Notifications';
import Dashboard from '@material-ui/icons/Dashboard';

export default {
    topMenuData: [
        {
            link: "/home",
            linkText: "Dashboard",
            src: "",
            imageWidth: "",
            imageHeight: "",
            MaterialIcon: <Dashboard/>
        },
        {
            link: "/notification",
            linkText: "Notifications",
            src: "",
            imageWidth: "",
            imageHeight: "",
            MaterialIcon: <Notifications/>
        },
        {
            link: "/my-subscription",
            linkText: "My subscriptions",
            src: "",
            imageWidth: "",
            imageHeight: "",
            MaterialIcon: <AccountBalanceIcon/>
        },
        {
            link: "/wallet",
            linkText: "Wallet",
            src: "/media/images/default/wallet.svg",
            imageWidth: "24px",
            imageHeight: "24px",
            MaterialIcon: ""
        },

    ],

    examAndLeague: [
        {
            link: "/my-exams",
            linkText: "My Exams",
            src: "/media/images/default/edit.svg",
            imageWidth: "24px",
            imageHeight: "24px",
            MaterialIcon: ""
        },
        {
            link: "/my-leagues",
            linkText: "My Leagues",
            src: "/media/images/default/trophy.svg",
            imageWidth: "24px",
            imageHeight: "24px",
            MaterialIcon: ""
        },
    ],
    coursesPublication: [
        {
            link: "/my-online-courses",
            linkText: "My Online Courses",
            src: "/media/images/default/youtube.svg",
            imageWidth: "24px",
            imageHeight: "24px",
            MaterialIcon: ""
        },
        {
            link: "/my-publications",
            linkText: "My Publications",
            src: "/media/images/default/bookmark.svg",
            imageWidth: "24px",
            imageHeight: "24px",
            MaterialIcon: ""
        },
    ]
}