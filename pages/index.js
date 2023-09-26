import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
  const functions = require('firebase-functions');

  exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
      .onCreate((snap, context) => {
        const original = snap.data().original;
        console.log('Uppercasing', context.params.documentId, original);
        const uppercase = original.toUpperCase();
        return snap.ref.set({uppercase}, {merge: true});
      });
  

const routerOptions = [
  {
    path: '/signup',
    component: 'SignUp'
  },
  {
    path: '/signin',
    component: 'SignIn'
  }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import (`@/components/${route.component}.vue`)
  }
})

export default new Router({
  mode: 'history',
  routes
})