module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "doc",
      id: "requirements",
    },
    {
      type: "doc",
      id: "concepts",
    },
    {
      type: "doc",
      id: "getting-started",
    },

    {
      type: "category",
      label: "Basic features",
      collapsed: false,
      items: ["features/templates", "features/components", "features/styles", "features/images", "features/fonts"],
    },
    {
      type: "doc",
      id: "project-structure",
    },
    {
      type: "category",
      label: "Command-line interfaces",
      collapsed: false,
      items: ["cli/flayyer-cli"],
    },
    {
      type: "category",
      label: "Advanced",
      collapsed: false,
      items: [
        "advanced/complex-variables",
        "advanced/typescript",
        "advanced/automatic-deploys",
        "advanced/monorepo",
      ].sort(),
    },
  ],
};
