# vuex-router-example

> A Vue.js + Vuex + vue-router example

# Added vue-router

The original 'counter' example from Vuex was modified to use with vue-router:
- In index.html: replaced `<app>` with `<div id="app">`
- Renamed the original App component (from the counter example) to `CounterPage.vue`
- Created a new `App` component to use the store and render `<router-view>` 

#Counters
- Displays counters
- Counters can be incremented or decremented
- Counters can be added

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
