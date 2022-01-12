import {NgModule} from '@angular/core';
import {NgClickOutsideDirective} from './ng-click-outside.directive';


const exportDeclarations = [NgClickOutsideDirective];

@NgModule({
  declarations: exportDeclarations,
  imports: [],
  exports: exportDeclarations
})
export class NgClickOutsideModule {
}
