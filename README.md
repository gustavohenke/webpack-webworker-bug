Project that demonstrates a bug in Webpack when targeting `webworker`.

Run `npm install`, then run `npm start`. Go to http://locahost:9000.

This project's has the following entry points, all of which should print `hey from <entry point name>` when loaded:

1. `foo`: doesn't have a runtime chunk
2. `bar`: has a runtime chunk
3. `baz`: has a runtime chunk and a dynamic import

Note how `hey from bar` isn't printed when the page loads.