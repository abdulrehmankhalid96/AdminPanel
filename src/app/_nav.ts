import { INavData } from "@coreui/angular";

export const navItemsForClient: INavData[] = [
  // DashBoard
  {
    url: "/NextdentClient/DashBoard",
    name: 'DashBoard',
    icon: "icon-shuffle",
  },
  {
    url: "/NextdentClient/ClientBranches",
    name: "Client Branches",
    icon: "icon-shuffle",
  },
  // Billing
  {
    url: "/NextdentClient/Billing",
    name: "Billing",
    icon: "icon-shuffle",
  },

  // {
  //   url: "/NextdentClient/Invoicdetails",
  //   name: "Client Invoice",
  //   icon: "icon-doc",
  // },

// Ticket
{
  url: "/NextdentClient/Ticket",
  name: "Tickets",
  icon: "icon-notebook",
},

];

export const navItemsForAdmin: INavData[] = [
  {
    name: "DashBoard",
    url: "/Admin/AdminDashboard",
    icon: "icon-drop",
  },
  {
    name: "Customers",
    url: "/Admin/customer",
    icon: "icon-drop",
  },
// ReqForBranch

{
  name: "Invoices",
  url: "/Admin/Invoices",
  icon: "icon-drop",
},

{
  name: "ReqForBranch",
  url: "/Admin/ReqForBranch",
  icon: "icon-drop",
},
// Tickets
{
  name: "Tickets",
  url: "/Admin/Tickets",
  icon: "icon-drop",
},
{
  name: "Support Tickets",
  url: "/Admin/Gtickets",
  icon: "icon-drop",
},
  // {
  //   name: "Customer Managment",
  //   url: "/Manage/ManageCustomers",
  //   icon: "icon-drop",
  // },
  // {
  //   name: "Customer Branches",
  //   url: "/Manage/CustomerBranches",
  //   icon: "icon-drop",
  // },
  // {
  //   name: "Payment Plane",
  //   url: "/Manage/PaymentPlane",
  //   icon: "icon-drop",
  // },
];
