import { createSiteMenuTemplate } from './view/site-menu-view';
import { RenderPosition, renderTemplate } from './render';
import { createSiteFilterTemplate } from './view/filter-view';
import { createSiteSortTemplate } from './view/sort-view';
import { createSitePointTemplate } from './view/point-view';
import { createUlTemplate } from './view/ul-view';
import { createEditPointTemplate } from './view/edit-point-view';
import { createNewPointTemplate } from './view/new-point-view';
import { generatePoint } from './mock/point';


const POINT_COUNT = 15;

const points = Array.from({length: POINT_COUNT}, generatePoint);


const siteNavElement = document.querySelector('.trip-controls__navigation');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-body__page-main');
const siteContainerElement = siteMainElement.querySelector('.trip-events');


renderTemplate(siteNavElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilterElement, createSiteFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteContainerElement, createSiteSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteContainerElement, createUlTemplate(), RenderPosition.BEFOREEND);

const siteUlElement = siteContainerElement.querySelector('.trip-events__list');

for (let i = 1; i < POINT_COUNT; i++) {
  renderTemplate(siteUlElement, createSitePointTemplate(points[i]), RenderPosition.BEFOREEND);
}

renderTemplate(siteUlElement, createEditPointTemplate(points[0]), RenderPosition.AFTERBEGIN);
renderTemplate(siteUlElement, createNewPointTemplate(points[1]), RenderPosition.BEFOREEND);
