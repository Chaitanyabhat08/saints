export const data = {
  bar: {
    title:"Products sale of the year",
    labels: ["Jan", "Feb", "March", "April", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Products sale per month",
        data: [10, 13, 18, 20, 21, 22, 23, 22, 15, 19, 20, 25],
        backgroundColor: "lightblue",
      },
    ],
  },

  line: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "",
        data: [10,13,18,20,21,22,23,22,15,19,20,25],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  },
};
