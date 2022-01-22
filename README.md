# Canvas Playground (2022 Edition - now with Typescript)

A simple infrastructure for playing with the Canvas API in Typescript. This was originally written in Coffeescript as demo code for a talk I gave at Ruby Cascadia 2012, but has been rewritten in Typescript to be a bit more useful to developers living in the zombie apocolypse of 2022.

## Installation

You'll need to have npm and node installed:

```
git clone https://github.com/massivelyfun/canvas-playground.git

cd canvas-playground

npm install
```

## Use

* '''npm run dev''' will start Parcel's file watcher and dev server at http://localhost:1234

* Extend from entity.ts and painter.ts for your game entities and rendering primitives (or, duck type--the APIs are super simple).

* Mental model: manage behavior in entities, and rendering in painters. You define '''update(time: DOMHighResTimeStamp, e: Entity) => void''' for your entity. This is the behavior that happens on every tick. You also give your entity a painter, which needs to have '''paint()ctx: CanvasRenderingContext2D, p: Point): void'''. Entities delgate rendering to via '''paint()''' to their rect. I'm using two different delegation patterns here (functional vs. object), but they currently match the required complexity. I may unify the API in the future.

* '''app.ts''' is the code entry point. This is where you will wire together your app and make interesting things happen.

* Add your entity to the game loop via GameLoop#addEntity

* Run the loop!

## Build and view your handywork

```
npm run dev
```
Go to http://localhost:1234 in your browser. 

## License

(The MIT License)

Copyright © 2022 Dean Hudson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.