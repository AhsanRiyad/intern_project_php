import HelloWorld from './components/HelloWorld.vue';
import Hello from './components/Hello.vue';
import login from './views/login.vue';


export default [
    { path: '/', component: HelloWorld},
    { path: '/h', component: Hello},
    { path: '/login', component: login},
  
]
