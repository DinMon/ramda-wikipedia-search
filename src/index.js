import 'bootstrap/dist/css/bootstrap.min.css';
import { getAdvancedGetKey } from './getInputValue'
import getUrl from './getUrl'
import { pipe, ifElse, isEmpty } from 'ramda'
import Results from './Results';

const inputElement = document.querySelector('input')

const render = markup => {
  const resultsElement = document.getElementById('results');

  resultsElement.innerHTML = markup;
};

const doNothing = () => {}

const searchAndRenderResults = pipe(
    getUrl,
    (url) => fetch(url)
            .then(res => res.json())
            .then(Results)
            .then(render)
)

const searchAndRenderIfValid = pipe(
    getAdvancedGetKey,
    ifElse(isEmpty, doNothing, searchAndRenderResults)
)


inputElement.addEventListener('keyup', searchAndRenderIfValid)
