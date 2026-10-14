const options = {
    actions: false,
    renderer: "svg"
};

const charts = [
    ["#vis01", "visualisations/01-waffle.json"],
    ["#vis02", "visualisations/02-beekeepers.json"],

    ["#vis03", "visualisations/03-choropleth.json"],
    ["#vis04", "visualisations/04-proportional-map.json"],
    ["#vis05", "visualisations/05-state-heatmap.json"],

    ["#vis06", "visualisations/06-public-land.json"],
    ["#vis07", "visualisations/07-state-profile.json"],
    ["#vis08", "visualisations/08-apiary-dot-map.json"],

    ["#vis09", "visualisations/09-trade-lines.json"],
    ["#vis10", "visualisations/10-trade-balance.json"],
    ["#vis11", "visualisations/11-trade-heatmap.json"]
];

charts.forEach(([target, file]) => {
    vegaEmbed(target, file, options)
        .catch(error => {
            console.error(`Failed to load ${file}:`, error);

            document.querySelector(target).innerHTML =
                `<p class="chart-error">Chart failed to load: ${file.split("/").pop()}</p>`;
        });
});