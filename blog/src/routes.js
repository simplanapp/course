import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import SearchForm from './components/search_form';
import Clients from './components/clients_entrence';
import Company from './components/company_entrence';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Clients} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
    <Route path="pro" component={Company} />
  </Route>
);
