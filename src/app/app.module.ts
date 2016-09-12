import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {OnsenModule, CUSTOM_ELEMENTS_SCHEMA} from 'angular2-onsenui';

@NgModule({
    imports: [BrowserModule, OnsenModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
