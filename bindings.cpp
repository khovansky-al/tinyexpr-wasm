#include <iostream>
#include <emscripten/bind.h>
#include "tinyexpr.h"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(tinyexpr_module)
{
  function("te_interp", optional_override(
    [](const std::string expr, int error) {
      return te_interp(expr.c_str(), reinterpret_cast<int *>(error));
    })
  );
}
