import * as FaIcons from "react-icons/fa";
export const SideBarData = [
    {
        "title": "NOTIFICATIONS",
        "icon": <FaIcons.FaRegBell size={25} />,
        "path": "notifications"
    },
    {
        "title": "SUMMARY",
        "icon": <FaIcons.FaBars size={25} />,
        "path": "summary",
        "childrens": [
            {
                "title": "SUB_MENU_1",
                "path": "/S-Sub-MENU-1"
            },
            {
                "title": "SUB_MENU_2",
                "path": "/S-Sub-Menu-2"
            }
        ]
    },
    {
        "title": "PUBLISH",
        "icon": <FaIcons.FaPenAlt size={25} />,
        "path": "publish",
        "childrens": [
            {
                "title": "Compose",
                "path": "/P-Compose"
            },
            {
                "title": "Feed",
                "path": "publish/feed"
            }
        ]
    },
    {
        "title": "ENGAGE",
        "icon": <FaIcons.FaRegComments size={25} />,
        "path": "engage",
        "childrens": [
            {
                "title": "SUB_MENU_1",
                "path": "/E-Sub-Menu-1"
            },
            {
                "title": "SUB_MENU_2",
                "path": "/E-Sub-Menu-2"
            }
        ]
    },
    {
        "title": "LISTEN",
        "icon": <FaIcons.FaWaveSquare size={25} />,
        "path": "listen",
        "childrens": [
            {
                "title": "SUB_MENU_1",
                "path": "/L-Sub-Menu-1"
            },
            {
                "title": "SUB_MENU_2",
                "path": "/L-Sub-Menu-2"
            }
        ]
    },
    {
        "title": "REPORT",
        "icon": <FaIcons.FaRegChartBar size={25} />,
        "path": "report",
        "childrens": [
            {
                "title": "SUB_MENU_1",
                "path": "/R-Sub-Menu-1"
            },
            {
                "title": "SUB_MENU_2",
                "path": "/R-Sub-Menu-2"
            }
        ]
    }


]