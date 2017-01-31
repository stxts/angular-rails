import { Component } from '@angular/core';
import { Document } from './document';


@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "random desc",
			file_url: "http://google.com",
			updated_at: "1/30/2017",
			image_url: 'http://google.com'
		},
				{
			title: "My Second Doc",
			description: "random 2nd desc",
			file_url: "http://google.com",
			updated_at: "1/30/2017",
			image_url: 'http://google.com'
		},
				{
			title: "My Third Doc",
			description: "random 3rd desc",
			file_url: "http://google.com",
			updated_at: "1/30/2017",
			image_url: 'http://google.com'
		}
	]
}