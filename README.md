# ng-click-outside3


[![NPM](https://img.shields.io/npm/v/ng-click-outside2?color=orange&style=flat-square)](https://www.npmjs.com/package/ng-click-outside2)
[![License](https://img.shields.io/github/license/maxhaice2/ng-click-outside3?color=blue&style=flat-square)](https://github.com/maxhaice2/ng-click-outside3/blob/master/LICENSE)
[![Love Angular badge](https://img.shields.io/badge/angular-love-blue?logo=angular&angular=love)](https://www.github.com/angular/angular)
[![GitHub issues](https://img.shields.io/github/issues/maxhaice2/ng-click-outside3.svg "GitHub issues")](https://github.com/maxhaice2/ng-click-outside3)
[![GitHub stars](https://img.shields.io/github/stars/maxhaice2/ng-click-outside3.svg "GitHub stars")](https://github.com/maxhaice2/ng-click-outside3)

Angular directive for handling click events outside an element.

This package is a fork of ng-click-outside2 with additional features:
`clickOutsideHostElementStopPropagationEnabled`
`...there can be more`

We plan to add new in the feature and support newer Angular version, since we are using it in production.


Like binding to a regular `click` event in a template, you can do something like this:

```HTML
<div (clickOutside)="onClickedOutside($event)">My element</div>
```

## Table of contents
1. [Installation](#installation)
2. [Compatibility](#compatibility)
3. [Options](#options)
4. [Usage](#example-usage)
5. [Migration from ng-click-outside](#migration-from-ng-click-outside)

## Installation

```shell
npm install --save ng-click-outside3
```

## Compatibility
| Angular  | Version    | NPM                         |
|----------|------------|-----------------------------|
| 18,19    | 18.x.x     | `ng-click-outside3@^18.0.0` |

If you don't need our additional feature and you use Angular >= 13 you can use this fork. https://github.com/maxhaice2/ng-click-outside3
If you use Angular <= 12 please use the original package. https://www.npmjs.com/package/ng-click-outside

### Options

| Property name | Type    | Default   | Description                                                                                                                                                                                                                                                                                        |
| ------------- |---------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `attachOutsideOnClick` | boolean | `false`   | By default, the outside click event handler is automatically attached. Explicitely setting this to `true` sets the handler after the element is clicked. The outside click event handler will then be removed after a click outside has occurred. (Import: `NgClickOutsideAttachOutsideDirective`) |
| `clickOutsideEnabled` | boolean | `true`    | Enables directive.                                                                                                                                                                                                                                                                                 |
| `clickOutsideEvents` | string  | `'click'` | A comma-separated list of events to cause the trigger. For example, for additional mobile support: `[clickOutsideEvents]="'click,touchstart'"`.                                                                                                                                                    |
| `delayClickOutsideInit` | boolean | `false`   | Delays the initialization of the click outside handler. This may help for items that are conditionally shown ([see issue #13](https://github.com/arkon/ng-click-outside/issues/13)). (Import `NgClickOutsideDelayOutsideDirective`)                                                                                                     |
| `clickOutsideEmitOnBlur` | -       | -         | If enabled, emits an `blurWindow` event when user clicks outside of applications' window while it's visible. Especially useful if page contains iframes. (Import `NgClickOutsideEmitOnBlurDirective`)                                                                                              |
| `clickOutsideExclude` | string  |           | A comma-separated string of DOM element queries to exclude when clicking outside of the element. (Import NgClickOutsideExcludeDirective) For example: `[clickOutsideExclude]="'button,.btn-primary'"`.                                                                                             |
| `clickOutsideHostElementStopPropagationEnabled` | boolean  | false | Enables or disables stopping event propagation on the element. |
## Example Usage

Add `NgClickOutsideDirective` to your imports:

```typescript
import {NgClickOutsideDirective} from 'ng-click-outside3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgClickOutsideDirective],
  bootstrap: [AppComponent]
})
class AppModule {}
```

You can then use the directive in your templates:

```typescript
@Component({
  selector: 'app',
  template: `
    <div (clickOutside)="onClickedOutside($event)">Click outside this</div>
  `
})
export class AppComponent {
  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
  }
}
```

### Usage with Excluding classes
```typescript
import {NgClickOutsideDirective} from 'ng-click-outside3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgClickOutsideDirective, NgClickOutsideExcludeDirective],
  bootstrap: [AppComponent]
})
class AppModule {}
```

You can then use the directive in your templates:

```typescript
@Component({
  selector: 'app',
  template: `
    <div (clickOutside)="onClickedOutside($event)" [clickOutsideExclude]="'.foo'">Click outside this</div>
  `
})
export class AppComponent {
  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
  }
}
```


## Migration from ng-click-outside

```
// change imports
import { ClickOutsideModule } from 'ng-click-outside';
// to
import {NgClickOutsideDirective} from 'ng-click-outside3';

// and in Module import
ClickOutsideModule
// to
NgClickOutsideDirective
```
---
