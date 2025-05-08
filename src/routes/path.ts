function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_DASHBOARD_BLOG = "/dashboard/blog";
const ROOTS_DASHBOARD_CMS = "/dashboard/cmsmodule";
const ROOTS_DASHBOARD_KANBAN = "/dashboard/kanban";
const ROOTS_DASHBOARD_PROFILE = "/dashboard/profile";
const ROOTS_DASHBOARD_SETTINGS = "/dashboard/settings";

const ROOTS_DASHBOARD_WORKER = "/dashboard/worker";
const ROOTS_DASHBOARD_CONTACTOR = "/dashboard/contactor";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,

  //////////////////////////////////////
  // User
  //////////////////////////////////////

  worker: {
    root: ROOTS_DASHBOARD_WORKER,
    add: path(ROOTS_DASHBOARD_WORKER, "/add-worker"),
    edit: path(ROOTS_DASHBOARD_WORKER, "/edit-worker"),
  },
  contractor: {
    root: ROOTS_DASHBOARD_CONTACTOR,
    add: path(ROOTS_DASHBOARD_CONTACTOR, "/add-contactor"),
    edit: path(ROOTS_DASHBOARD_CONTACTOR, "/edit-contractor"),
  },

  //////////////////////////////////////
  // Mannagement
  //////////////////////////////////////

  kanban: ROOTS_DASHBOARD_KANBAN,
  blog: {
    root: ROOTS_DASHBOARD_BLOG,
    tags: path(ROOTS_DASHBOARD_BLOG, "/tags"),
    add: path(ROOTS_DASHBOARD_BLOG, "/add-blog"),
    edit: path(ROOTS_DASHBOARD_BLOG, "/edit-blog"),
  },
  cms: {
    root: ROOTS_DASHBOARD_CMS,
    aboutus: path(ROOTS_DASHBOARD_CMS, "/aboutus"),
    faqs: {
      list: path(ROOTS_DASHBOARD_CMS, "/faq/list"),
      add: path(ROOTS_DASHBOARD_CMS, "/faq/add"),
      edit: (id: string) => path(ROOTS_DASHBOARD_CMS, `/faq/edit/${id}`),
    },
    testimonials: {
      list: path(ROOTS_DASHBOARD_CMS, "/testimonials/list"),
      add: path(ROOTS_DASHBOARD_CMS, "/testimonials/add"),
      edit: (id: string) => path(ROOTS_DASHBOARD_CMS, `/testimonials/edit/${id}`),
    },
  },

  //////////////////////////////////////
  // Personal
  //////////////////////////////////////

  profile: {
    root: ROOTS_DASHBOARD_PROFILE,
    edit: path(ROOTS_DASHBOARD_PROFILE, "/edit-profile"),
  },
  settings: {
    root: ROOTS_DASHBOARD_SETTINGS,
    theme: path(ROOTS_DASHBOARD_SETTINGS, "/theme"),
    payment: path(ROOTS_DASHBOARD_SETTINGS, "/payment"),
    history: path(ROOTS_DASHBOARD_SETTINGS, "/history"),
  },
};
