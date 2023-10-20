import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { AccordionModule, ButtonModule, DialogModule, DropdownModule, GridModule, I18nModule, IconModule, IconService, InputModule, ModalModule, PlaceholderModule, SearchModule, StructuredListModule, TableModule, TabsModule, UIShellModule } from 'carbon-components-angular';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SpinnerComponent } from './components/_helpers/spinner/spinner.component';


@NgModule({
	declarations: [
		AppComponent,
		FileUploadComponent,
		SpinnerComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		UIShellModule,
		ModalModule,
		IconModule,
		PlaceholderModule,
		ReactiveFormsModule,
		StructuredListModule,
		GridModule,
		DropdownModule,
		AccordionModule,
		ButtonModule,
		SearchModule,
		I18nModule,
		TableModule,
		DialogModule,
		InputModule,
		TabsModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([
			Notification20,
			UserAvatar20,
			AppSwitcher20
		]);
	}
}
