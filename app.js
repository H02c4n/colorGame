const app = Vue.createApp({
  data() {
    return {
      title: "COLOR GAME",
      note: "Please write how many color do you want.",
      numberOfBox: "",
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
    myColors() {
      this.colors = [];
      for (let i = 0; i < this.numberOfBox; i++) {
        const rColor =
          "#" +
          Math.floor(Math.random() * 2 ** 24)
            .toString(16)
            .padStart(0, 6);

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
          color:
            this.colors[i - Math.floor(Math.random() * this.colors.length - 1)],
          clicked: false,
        });
      }
    },
  },
});

app.mount("#app");
