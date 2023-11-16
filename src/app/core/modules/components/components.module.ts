import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
  ],
  declarations: [
    ButtonComponent,
    InputTextComponent,
    DropdownComponent,
    CheckboxComponent
  ],
  exports: [ButtonComponent, InputTextComponent, DropdownComponent, CheckboxComponent]
})
export class ComponentsModule { }
