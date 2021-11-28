Vue.createApp({
    data() {
      return {
        message: '',
        obj: {},
        show: false,
      };
    },
    methods: {
      Add() {
        this.obj['msg'] = this.message;
        this.obj['upper'] = this.message.toUpperCase();
        this.obj['lower'] = this.message.toLowerCase();
        this.message = '';
        this.show = true;
      },
    },
  }).mount('#app');