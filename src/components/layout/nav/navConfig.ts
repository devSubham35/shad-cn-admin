import { PATH_DASHBOARD } from "@/routes/path";

export const navConfigData = [
  {
    subHeader: "User",
    items: [
      {
        title: "Worker",
        icon: "",
        path: PATH_DASHBOARD.worker.root,
      },
      {
        title: "Contractor",
        icon: "",
        path: PATH_DASHBOARD.contractor.root,
      },
    ],
  },
  {
    subHeader: "Mannagement",
    items: [
      {
        title: "Kanban",
        icon: "",
        path: PATH_DASHBOARD.kanban,
      },
      {
        title: "Blog Module",
        icon: "",
        children: [
          {
            title: "Blogs",
            icon: "",
            path: PATH_DASHBOARD.blog.root,
          },
          {
            title: "Blog Tags",
            icon: "",
            path: PATH_DASHBOARD.blog.tags,
          }
        ],
      },
      {
        title: "CMS Module",
        icon: "",
        children: [
            {
              title: "About us",
              icon: "",
              path: PATH_DASHBOARD.cms.aboutus,
            },
            {
              title: "Faqs",
              icon: "",
              path: PATH_DASHBOARD.cms.faqs,
            },
            {
              title: "Testimonials",
              icon: "",
              path: PATH_DASHBOARD.cms.testimonials,
            }
          ],
      },
    ],
  },
  {
    subHeader: "Personal",
    items: [
      {
        title: "Profile",
        icon: "",
        path: PATH_DASHBOARD.profile.root,
      },
      {
        title: "Settings",
        icon: "",
        children: [
          {
            title: "Theme",
            icon: "",
            path: PATH_DASHBOARD.settings.theme,
          },
          {
            title: "Payment",
            icon: "",
            path: PATH_DASHBOARD.settings.payment,
          },
          {
            title: "History",
            icon: "",
            path: PATH_DASHBOARD.settings.history,
          },
        ],
      },
    ],
  },
];
