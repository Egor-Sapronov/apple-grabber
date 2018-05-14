import Vue from 'vue';

import ItemsList from './components/shared/ItemsList';
import ErrorMessage from './components/shared/ErrorMessage';
import StyledButton from './components/shared/StyledButton';
import ScrollWrapper from './components/shared/ScrollWrapper';
import Loader from './components/shared/Loader';

Vue.component('ItemsList', ItemsList);
Vue.component('ErrorMessage', ErrorMessage);
Vue.component('StyledButton', StyledButton);
Vue.component('ScrollWrapper', ScrollWrapper);
Vue.component('Loader', Loader);
