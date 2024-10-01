VueElement.createApp({
  data: function(){
    return {
      email: 'Y-Suzuki@exaple.com'
    };
  },
  methods: {
    localEmail: function(){
      return this.email.split('@')[0].toLoweCase();
   }
  }
}).mount('#app');