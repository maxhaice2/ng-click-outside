import {NgModule} from '@angular/core';
import {NgClickOutsideDirective} from './ng-click-outside.directive';

/**
 * @deprecated use NgClickOutsideDirective directly as it is a Standalone Component, the Module will be removed in Version 12
 */
@NgModule({
  imports: [NgClickOutsideDirective],
  exports: [NgClickOutsideDirective]
})
export class NgClickOutsideModule {
}
