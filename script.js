const opts = {
  actions: false,
  renderer: "svg"
};

/* =========================
   CHARTS IN ORDER
========================= */
const charts = [
  "01-waffle.json",
  "02-beekeepers.json",
  "03-choropleth.json",
  "04-proportional-map.json",
  "05-state-heatmap.json",
  "06-public-land.json",
  "07-state-profile.json",
  "08-apiary-dot-map.json",
  "09-trade-lines.json",
  "10-trade-balance.json",
  "11-trade-heatmap.json"
];

charts.forEach((file, i) => {

  const id =
    "#vis" + String(i + 1).padStart(2, "0");

  vegaEmbed(
    id,
    "visualisations/" + file,
    opts
  )
  .catch(err => {

    console.error(file, err);

    document.querySelector(id).innerHTML =
      "<p style='padding:20px'>" +
      "Chart failed to load: " +
      file +
      "</p>";

  });

}); 