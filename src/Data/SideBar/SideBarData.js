import * as FaIcons from "react-icons/fa";
export const SideBarData = [
    {
        "title":"NOTIFICATIONS",
        "icon":<FaIcons.FaRegBell  size={25}/>,
        "path":"/Notifications"
    },
    {
        "title":"SUMMARY",
        "icon":<FaIcons.FaChartBar   size={25}/>,
        "childrens":[
            {
                "title":"SUB_MENU_1",
                "path":"/S-Sub-MENU-1"

            },
            {
                "title":"SUB_MENU_2",
                "path":"/S-Sub-Menu-2"

            }
        ]
    },
    {
        "title":"PUBLISH",
        "icon":<FaIcons.FaPenAlt   size={25}/>,
        "childrens":[
            {
                "title":"Compose",
                "path":"/P-Compose"

            },
            {
                "title":"Feed",
                "path":"/P-Feed"

            }
        ]
    },
    {
        "title":"ENGAGE",
        "icon":<FaIcons.FaRegComments  size={25}/>,
        "childrens":[
            {
                "title":"SUB_MENU_1",
                "path":"/E-Sub-Menu-1"

            },
            {
                "title":"SUB_MENU_2",
                "path":"/E-Sub-Menu-2"

            }
        ]
    },
    {
        "title":"LISTEN",
        "icon":<FaIcons.FaWaveSquare   size={25}/>,
        "childrens":[
            {
                "title":"SUB_MENU_1",
                "path":"/L-Sub-Menu-1"

            },
            {
                "title":"SUB_MENU_2",
                "path":"/L-Sub-Menu-2"

            }
        ]
    },
    {
        "title":"REPORT",
        "icon":<FaIcons.FaRegChartBar   size={25}/>,
        "childrens":[
            {
                "title":"SUB_MENU_1",
                "path":"/R-Sub-Menu-1"

            },
            {
                "title":"SUB_MENU_2",
                "path":"/R-Sub-Menu-2"

            }
        ]
    }


]