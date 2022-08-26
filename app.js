const app = Vue.createApp({
  data() {
    return {
      title: "COLOR GAME",
      note: "Please write how many color do you want.",
      numberOfBox: null,
      box: [],
      colors: [],
    };
  },

  methods: {
    addBox() {
      this.box = [];
      for (let i = 0; i < this.numberOfBox * 10; i++) {
        const rColor =
          "#" +
          Math.floor(Math.random()*16777215).toString(16);
        this.colors[i] !== rColor ? this.colors.push(rColor) : null
        this.box.push({
          id: i + 1,
          color: this.colors[i],
        });
      }
    },
  },
  computed: {
    changeStatus(b) {
      if (b.clicked === false) {
        b.clicked = true;
      } else if (b.clicked === true) {
        b.clicked = false;
      }
    },
    
  },
});

app.mount("#app");
