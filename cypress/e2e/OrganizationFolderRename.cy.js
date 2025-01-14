/// <reference types="cypress"/>

import organizationFolderNames  from "../fixtures/organizationFolderNames.json";

describe('Rename existing Organization Folder', () => {
    beforeEach(() => {
        cy.get('a[href$="/newJob"]').click()
        cy.get('.jenkins-input').type(organizationFolderNames.nameOrganizationFolder);
        cy.get('[class="label"]').contains('Organization Folder').click();
        cy.get('button[type=submit]').should('be.enabled').click();
        cy.url().should('include', `/${organizationFolderNames.nameOrganizationFolder}/configure`);
        cy.get('button[name=Submit]').click();
        cy.get('[class="model-link"]').contains('Dashboard').click();
    });

    it('Rename Organization Folder using dropdown menu_positive', ()=> {
        cy.get('a[href^="job/"').realHover();
        cy.get('td > a [class$="dropdown-chevron"]').click();
        cy.get('li > a > span').contains('Rename').click();
        cy.get('.jenkins-input').clear().type(organizationFolderNames.newOrganizationFolder);
        cy.get('button[name=Submit]').click();
        
        cy.url().should('include', `/job/${organizationFolderNames.newOrganizationFolder}`);
        cy.get('h1').contains(`${organizationFolderNames.newOrganizationFolder}`);
    });

    it('Rename Organization Folder using left side menu_positive', ()=> {
        cy.get('a[href^="job/"').click()
        cy.get('#tasks > div:nth-child(8)>span').contains('Rename').click()
        cy.get('.jenkins-input').clear().type(organizationFolderNames.newOrganizationFolder);
        cy.get('button[name=Submit]').click();

        cy.url().should('include', `/job/${organizationFolderNames.newOrganizationFolder}`);
        cy.get('h1').contains(`${organizationFolderNames.newOrganizationFolder}`);
    });
})
