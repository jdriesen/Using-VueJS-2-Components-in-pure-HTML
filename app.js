var Events = new Vue({});

var App = new Vue({
  el: '#app',
  data() {
    return {
      total: 23,
      user: {
        address: {},
      }
    }
  },

  methods: {
    incrementTotal()  {
      console.log('incrementing Total')
      this.total += 1
    },

  },

  mounted() {
    Events.$on('gotuser', (user) => {
      console.log('event was heard with user', user);
      this.user = user
    });
  },

});
