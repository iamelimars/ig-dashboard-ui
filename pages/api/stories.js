export default (req, res) => {
  const data = {
    data: [
      {
        profile: "lbj.23",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fwill-truettner-g5qWYuTKkok-unsplash.jpg?alt=media&token=af5fc645-df71-4cc7-893e-7c52fe709477",
      },
      {
        profile: "dwade.3",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fvinay-tadepalli-yMDzez6Oy3c-unsplash.jpg?alt=media&token=45b120c7-2af7-451f-83c8-bcf8fea39524",
      },
      {
        profile: "Mj.23",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Ftolga-ahmetler-ifrtTw459Dw-unsplash.jpg?alt=media&token=79cb58b8-8a1b-4369-8ad4-41b8f69dd7c9",
      },
      {
        profile: "shaq.32",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fsiim-lukka-WDharr56x18-unsplash.jpg?alt=media&token=c921283e-ce7a-4a27-a56b-bb8e51ad425f",
      },
      {
        profile: "shaq.34",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fscreen-post-3xYMwWCG90I-unsplash.jpg?alt=media&token=d571adde-2048-4ea6-85a0-7a7f8b15ec77",
      },
      {
        profile: "kareem.hoop",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Froan-lavery-LEhdq71XZy0-unsplash.jpg?alt=media&token=82d367b7-34a2-46cb-858a-18c17cee0a31",
      },
      {
        profile: "hakeem.ball",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fpavel-nekoranec--8CDNg5mH-M-unsplash.jpg?alt=media&token=9018f424-8d8b-4927-99c2-48c3ade89011",
      },
      {
        profile: "ny.knicks",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fjosh-hild-nmfRdImWlK4-unsplash.jpg?alt=media&token=aa9e78d2-74e2-49da-9f28-1c043d643d8f",
      },
      {
        profile: "mia.heat",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fdonovan-valdivia-AB7TcT_GVU0-unsplash.jpg?alt=media&token=eab5e95c-f1a9-4159-a051-d059eaad10db",
      },
      {
        profile: "la.lakersfan",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fdeborah-cortelazzi-gREquCUXQLI-unsplash.jpg?alt=media&token=fdd3d640-cc03-45ae-b069-4def18c3ddfa",
      },
    ],
  };
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(data);
  // res.end(JSON.stringify({ name: "John Doe" }));
};
