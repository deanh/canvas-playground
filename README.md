# Canvas Playground

A simple infrastructure for playing with the Canvas API in CoffeeScript.

## Installation

You'll need to have npm and node installed to easily build coffee-script and stitch.

```
git clone https://github.com/massivelyfun/canvas-playground.git

cd canvas-playground

npm install
```

## Use

* Extend from entity.coffee and rect.coffee for your game entities and
drawing primitive (or duck type, the APIs are super simple).

* Instantiate your entities in main.coffee

* Do something interesting with their update() methods (this gets
  called for every entity, once per tick and is where you should
  update position, etc.)

* Add your entity to the game loop via GameLoop#addEntity

* Run the loop!

## License

(The MIT License)

Copyright © 2012 Dean Hudson and Massively Fun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.