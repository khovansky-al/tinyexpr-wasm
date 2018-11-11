const tinyexpr = require("./tinyexpr");

function main(tinyexpr) {
  const { te_interp: interpret } = tinyexpr;

  console.log(interpret("sqrt(5^2+7^2+11^2+(8-2)^2)", 0));
  console.log(interpret("(5 * 5", 0));
}

function loadNativeModule(module) {
  return new Promise(resolve => {
    if (module.calledRun) {
      resolve();
    } else {
      module.onRuntimeInitialized = () => {
        resolve();
      };
    }
  });
}

loadNativeModule(tinyexpr)
  .then(() => {
    main(tinyexpr);
  })
  .catch(error => {
    console.log(error);
  });
