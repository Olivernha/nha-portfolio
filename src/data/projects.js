// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "Online-Shop",
    category: "NodeJs",
    img: require("@/assets/images/online-shop-nodejs.png"),
	link: "https://online-shop-nodejs.herokuapp.com/"
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    category: "React",
    img: require("@/assets/images/tic-tac-toe.png"),
	link: "https://tic-tac-toe-nha.netlify.app/"
  },
  {
    id: 3,
    title: "Invoice App",
    category: "VueJs",
    img: require("@/assets/images/invoice-vue.png"),
	link: "https://invoice-vue3-app.netlify.app/"
  },
  {
    id: 4,
    title: "Disney-Clone Design",
    category: "UI/UX Design",
    img: require("@/assets/images/disney-clone.png"),
	link: "https://disney-clone-tailwindvue-exmaple.netlify.app/"
  },
  {
    id: 5,
    title: "Movie App",
    category: "Laravel",
    img: require("@/assets/images/movie-app.png"),
	link: "https://nha-movieapp.herokuapp.com/"
  },
  {
    id: 6,
    title: "Github Job",
    category: "React",
    img: require("@/assets/images/github-job.png"),
	link: "https://github-jobs-ruby-kappa.vercel.app/"
  },
  {
    id: 7,
    title: "Redux Shopping Cart",
    category: "React",
    img: require("@/assets/images/shopping-cart.png"),
	link: "https://redux-shopping-cart-oliver.netlify.app/"
  },
];

export default projects;
