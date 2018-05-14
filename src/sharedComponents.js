import Vue from 'vue';

import ItemsList from './components/ItemsList';
import UserListItem from './components/UserListItem';
import BasketListItem from './components/BasketListItem';
import ErrorMessage from './components/ErrorMessage';
import StyledButton from './components/StyledButton';
import ScrollWrapper from './components/ScrollWrapper';
import Loader from './components/Loader';

Vue.component('ItemsList', ItemsList);
Vue.component('BasketListItem', BasketListItem);
Vue.component('UserListItem', UserListItem);
Vue.component('ErrorMessage', ErrorMessage);
Vue.component('StyledButton', StyledButton);
Vue.component('ScrollWrapper', ScrollWrapper);
Vue.component('Loader', Loader);
