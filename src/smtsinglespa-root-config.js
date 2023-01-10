import { registerApplication, start } from "single-spa";

// registerApplication( config: {
//   name: "@smtsinglespa/navbar",
//   app: () =>
//     System.import(moduleId: "@smtsinglespa/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@smtsinglespa/graph",
  app: () => System.import("@smtsinglespa/graph"),
  activeWhen: ["/graph"],
});

registerApplication({
  name: "@smtsinglespa/navbar",
  app: () => System.import("@smtsinglespa/navbar"),
  activeWhen: ["/nav"],
});

start({
  urlRerouteOnly: true,
});
