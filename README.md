<img alt="TinyExpr logo" src="https://codeplea.com/public/content/tinyexpr_logo.png" align="right"/>

# TinyExpr WASM

This is a TinyExpr expression parser with additional files to make it compileable for WASM target using Emscripten. This was made purely out of curiosity within an hour of spare time and **absolutely should not be used in a production application**

All credit for the original library goes to **CodePlea**. To read the original README head over to https://github.com/codeplea/tinyexpr

No changes were made to the original library code

## Compiling

Although there are pre-compiled wasm and js files included in the `dist` folder, you might want to build it yourself. To do this you would need an Emscripten compiler. You can read more about how to get it here https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html

I compiled the library using *incoming* version of Emscripten on macOS Mojave, but given the tiny nature of the lib I guess anything will do.

After you get the compiler, edit the version in `build_wasm.sh` if needed and, well, just run it. You should get `dist/tinyexpr.js` and `dist/tinyexpr.wasm` generated for you.

## Bindings

The bindings for this library are done using Embind. You can read more about it here https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/embind.html

Currently only the `te_interp` function is exposed from the library.

To export other functions you have to edit `bindings.cpp` appropriately and rebuild the project

Keep in mind that Emscripten doesn't support raw pointers to primitive types so, for example, the `error` argument is useless in `te_interp` unless there is a workaround for this.

## Usage example

To see the usage example take a look at the `example.js`

