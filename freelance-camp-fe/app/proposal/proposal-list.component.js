"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var proposal_1 = require("./proposal");
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(15, 'crawling_ninja', 'https://crawling.ninja', 'python', 150, 120, 15, 'st@crawling.ninja');
        this.proposalTwo = new proposal_1.Proposal(16, 'stxts', 'https://stxts.com', 'Ruby on rails', 100, 100, 10, 'st@stxts.com');
        this.proposalThree = new proposal_1.Proposal(17, 'bke', 'https://gohelu.com', 'c#', 170, 190, 25, 'st@bke.email');
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree
        ];
    }
    return ProposalListComponent;
}());
ProposalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-list',
        templateUrl: 'proposal-list.component.html',
        styleUrls: ['proposal-list.component.css']
    })
], ProposalListComponent);
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map