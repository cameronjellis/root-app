import { registerApplication, start } from "single-spa";

// registerApplication( config: {
//   name: "@smtsinglespa/navbar",
//   app: () =>
//     System.import(moduleId: "@smtsinglespa/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@smtnga-smt-nga-graph/graphviz",
  app: () => System.import("@smtnga/smt-nga-graph"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
