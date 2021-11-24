import { createSiteMenuTemplate } from './view/site-menu-view';
import { RenderPosition, renderTemplate } from './render';
import { createSiteFilterTemplate } from './view/filter-view';
import { createSiteSortTemplate } from './view/sort-view';
import { createSitePointTemplate } from './view/point-view';
import { createUlTemplate } from './view/ul-view';
import { createEditPointTemplate } from './view/edit-point-view';
import { createNewPointTemplate } from './view/new-point-view';

const POINT_COUNT = 3;

const siteNavElement = document.querySelector('.trip-controls__navigation');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-body__page-main');
const siteContainerElement = siteMainElement.querySelector('.trip-events');


renderTemplate(siteNavElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilterElement, createSiteFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteContainerElement, createSiteSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteContainerElement, createUlTemplate(), RenderPosition.BEFOREEND);

const siteUlElement = siteContainerElement.querySelector('.trip-events__list');

for (let i = 0; i < POINT_COUNT; i++) {
  renderTemplate(siteUlElement, createSitePointTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(siteUlElement, createEditPointTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteUlElement, createNewPointTemplate(), RenderPosition.BEFOREEND);
