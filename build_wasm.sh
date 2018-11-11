EM_VERSION="incoming"

mkdir dist
${EMSDK}/emscripten/${EM_VERSION}/emcc -O3 --bind bindings.cpp tinyexpr.c -s WASM=1 -o dist/tinyexpr.js
