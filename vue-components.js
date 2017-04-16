// The most basic component you can imagine...


Vue.component('messaging', {
  props: [''],

  data() {
    return {
      message: 'This is the MES component',
    } // end of Return
  }, // end of Data

  events: {

  }, // end of events

  methods: {

  }, // end of Methods

  template:
  // Use backticks if you've multi-line HTML....
  `
  <div class="alert alert-success" role="alert">
    <strong>Well done!</strong> {{message}}.
  </div>
  `

});




// This is a sample component with a property ...
Vue.component('phobosLabel', {
  props: [
    'mytext',
  ],

  data() {
    return {
      // hardcoded
      message: 'Friend',
    } // end of Return
  }, // end of Data

  events: {

  }, // end of events

  methods: {


  }, // end of Methods

  // Use 'backticks' in case of multiline HTML
  template: '<p>The message = <strong>{{message}}</strong> and property mytext = <strong>{{mytext}}</strong></p>'

});



Vue.component('button-counter', {
  template: '<button type="button" class="btn btn-xs btn-success" @click="increment">{{ counter }}+</button>',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter += 1
      console.log('incrementing...')
      this.$emit('increment')
    }
  },
})


Vue.component('button-api', {
  template:
    `
    <button type="button" class="btn btn-xs btn-warning" @click="getdata()">get Data via API</button>
    `,
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getdata: function () {
      vm = this
      // http://jsonplaceholder.typicode.com/users/1
      console.log('getting data...')

      var base_url = 'http://jsonplaceholder.typicode.com'

      axios.defaults.baseURL = base_url;
      // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


      axios.get('/users/1')
        .then(function (response) {
          console.log(response.data);
          this.user = response.data;
          console.log(this.user.name)
          Events.$emit('gotuser', this.user);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
})


