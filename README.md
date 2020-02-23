# comp-api-play

This project is just for an example of using the new Vue 3 composition API.

The grocery list was first set up as a Vue 2 option API compoenent and then converted
to use the new composition API.

A couple of steps are needed to make this conversion until Vue 3 comes out.

1. Install the composition api
```
npm i @vue/composition-api
```
2. Import the composition api into the main.js
```javascript
  import VueCompostionApi from '@vue/composition-api'
  Vue.use(VueCompositionApi)
```
3. Replace the data and mehtods options with the new setup method.

Note that this example is set up, all of the grocery list functionality is contained in a method.  It
is also possible to declare the state variable and the methods within the setup method.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
