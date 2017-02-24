import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent{
	proposalOne: Proposal = new Proposal(15, 'crawling_ninja', 'https://crawling.ninja', 'python', 150, 120, 15, 'st@crawling.ninja')
	proposalTwo: Proposal = new Proposal(16, 'stxts', 'https://stxts.com', 'Ruby on rails', 100, 100, 10, 'st@stxts.com')
	proposalThree: Proposal = new Proposal(17, 'bke', 'https://gohelu.com', 'c#', 170, 190, 25, 'st@bke.email')

	proposals: Proposal[] = [
	this.proposalOne, 
	this.proposalTwo, 
	this.proposalThree
	]
}