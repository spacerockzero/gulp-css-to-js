# gulp-css-to-js-style

CSS files go in, JavaScript files that inject style tags go out.
This is especially handy when you are building a 3rd-party plugin that has a UI, and you want only one `.js` file output for easy use of your script.

## Usage

For now, you will need to rename the file output, via `gulp-concat` or `gulp-rename`, so it ends up with `.js` extension, until I build that functionality in.

*NOTE:* For now, it only accepts one-line css files as input, such as those that have been minified.

```js
// Using it with gulp-concat
var gulp      = require('gulp');
var concat    = require('gulp-concat');
var injectCSS = require('gulp-css-to-js-style');

gulp.task('css-to-js', function(){
  gulp.src('./src/**.css')
    .pipe(injectCSS())
    .pipe(concat('injected-styles.js'))
    .pipe(gulp.dest('./dist'));
});
```

```js
// Using it with gulp-rename
var gulp      = require('gulp');
var concat    = require('gulp-rename');
var injectCSS = require('gulp-css-to-js-style');

gulp.task('css-to-js', function(){
  gulp.src('./src/**.css')
    .pipe(injectCSS())
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('./dist'));
});
```
