import Home from './Home.svelte';
import Admin from './routes/Admin.svelte';
import Login from './routes/Login.svelte';
import Problems from './routes/Problems.svelte';
import Tests from './routes/Tests.svelte';
import SendTest from './routes/send_test.svelte';
import GiveTest from './routes/give_test.svelte';
function userIsAdmin() {
  //check if user is admin and returns true or false
  return document.cookie ? true : false;
}
function notAdmin(){
  return document.cookie ? false : true;
}

const routes = [
  {
    name: '/',
    component: Login,
    onlyIf: { guard: notAdmin,redirect: '/admin' }
  },
  {
    name: '/admin',
    component: Admin,
    onlyIf: { guard: userIsAdmin, redirect: '/' }
  },
  {
    name: '/test/:id',
    component: Tests,
   onlyIf: { guard: userIsAdmin, redirect: '/' }
  },
  {
    name: '/problem/:id',
    component: Problems,
    onlyIf: { guard: userIsAdmin, redirect: '/' }
  },
  {
    name: '/home',
    component: Home,
    onlyIf: { guard: userIsAdmin, redirect: '/' }
  },
  {
    name:'/sendtest/:id',
    component:SendTest,
    onlyIf: { guard: userIsAdmin, redirect: '/' }
  },
  {
    name:'/givetest/:token',
    component:GiveTest,
    onlyIf: { guard: userIsAdmin, redirect: '/' }
  }
];

export { routes };