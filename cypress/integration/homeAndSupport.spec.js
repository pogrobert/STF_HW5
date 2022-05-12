// locators for the home page
const learnMoreLocator = '.cta-links > [href="/iphone-13-pro/"]'
const buyLocator = '[href="/us/shop/goto/buy_iphone/iphone_13_pro"]'
const shopAndLearnLocator = ':nth-child(1) > .ac-gf-directory-column-section > .ac-gf-directory-column-section-label > .ac-gf-directory-column-section-title'
const servicesLocator = ':nth-child(2) > :nth-child(2) > .ac-gf-directory-column-section-label > .ac-gf-directory-column-section-title'

// locators for the support page
const supportButton = '.ac-gn-support > .ac-gn-link'
const iphoneSupport = ':nth-child(1) > a > .as-imagegrid-item-title'
const macSupport = ':nth-child(2) > a > .as-imagegrid-item-title'
const ipadSupport = ':nth-child(3) > a > .as-imagegrid-item-title'
const workoutLocator = ':nth-child(2) > .contentLink-item > .contentLink-block > .contentLink-title'

describe('testing the home page and the support page', () => {
  beforeEach(() => {
    cy.visit('https://www.apple.com')
  })

  it('should test the home page', () => {
    // test "Learn More" button's text of iPhone 13
    cy
      .get(learnMoreLocator)
      .should('have.text', 'Learn more')

    // test "Buy" button's text of iPhone 13
    cy
      .get(buyLocator)
      .should('have.text', 'Buy')

    // test "Shop and Learn" subsection at the bottom of the home
    cy
      .get(shopAndLearnLocator)
      .should('include.text', 'Shop')
  })

  it('should test the support page', () => {
    // navigating to support page
    cy.get(supportButton).click()

    // test iphone support button
    cy
      .get(iphoneSupport)
      .should('include.text', 'iPhone')

    // test mac support button
    cy
      .get(macSupport)
      .should('include.text', 'Mac')

    // test ipad support button
    cy
      .get(ipadSupport)
      .should('include.text', 'iPad')
  })

  // scenario from homework 3.2 where I test some elements from the home page, then the support page
  it('should test home and support page', () => {
    cy
      .get(servicesLocator)
      .should('have.text', 'Services')

    cy.get(supportButton).click()

    cy
      .get(workoutLocator)
      .should('include.text', 'Work out with your Apple')
  })
})