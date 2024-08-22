Project that demonstrates a bug in Webpack when targetting `webworker`.

Run `npm install`, then run `npm start`.

This project's has the following entry points, all of which should print `hey from <entry point name>` when loaded:

1. `foo`: doesn't have a runtime chunk
2. `bar`: has a runtime chunk
3. `baz`: has a runtime chunk and a deferred import

Note how `hey from bar` isn't printed when the page loads.