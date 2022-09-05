const app = Vue.createApp({
  data() {
    return {
      title: "COLOR GAME",
      note: "Please write how many color do you want.",
      numberOfBox: null,
      box: [
        // { id: "1", color: "red", clicked: false },
        // { id: "2", color: "green", clicked: false },
        // { id: "3", color: "blue", clicked: false },
        // { id: "4", color: "yellow", clicked: false },
        // { id: "5", color: "orange", clicked: false },
      ],
      colors: [],
    };
  },

  methods: {
    randomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
    myColors() {
      this.colors = [];
      for (let i = 0; i < this.numberOfBox; i++) {
        const rColor = this.randomColor();

        this.colors[i] !== rColor ? this.colors.push(rColor) : null;
        this.colors.push(rColor);
      }
      console.log(this.colors);
    },
  },
  computed: {
    changeStatus(b) {
      if (b.clicked === false) {
        b.clicked = true;
      } else if (b.clicked === true) {
        b.clicked = false;
      }
      //console.log(b.clicked);
    },
    addBox() {
      this.box = [];
      for (let i = 0; i < this.numberOfBox * 10; i++) {
        this.box.push({
          id: i,
          color: this.colors[Math.floor(Math.random() * this.numberOfBox)],
          // this.colors[i - Math.floor(Math.random() * this.colors.length - 1)],
          clicked: false,
        });
      }
    },
  },
});

app.mount("#app");
