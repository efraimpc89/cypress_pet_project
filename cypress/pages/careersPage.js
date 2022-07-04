export default class CareersPage {

    elements = {
        btnFind: () => cy.get('button').contains('Find'),
        txtKeyword: () => cy.get('[id="new_form_job_search_1445745853_copy-keyword"]'),
        selectLocation: () => cy.get('//div[@class="recruiting-search__location"]'),
        viewAndApplyBtnList: () => cy.get('a').contains('View and apply')
    }

    clickFindButton(){
        this.elements.btnFind().click();
    }

    fillKeywordTextBox(keyword){
        this.elements.txtKeyword().type(keyword)
    }


    
}