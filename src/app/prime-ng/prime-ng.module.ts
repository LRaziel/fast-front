import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    DividerModule,
    ToolbarModule,
    CardModule,
    SplitterModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
