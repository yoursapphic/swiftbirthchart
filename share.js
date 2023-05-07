const validationErrorClass = "validation-error";
const birthChartTitleClass = "birth-chart-title";
const birthChartColumnClass = "birth-chart-column";
const birthChartGridClass = "birth-chart-grid";
const birthChartContainerId = "birthChartContainer";

const getSignValue = (sign, signType) => {
  let value = signData[sign][signType];

  if (value !== null) {
    value.SignType = signType;
    value.Sign = sign;
  }

  return value;
};

const getBirthChart = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const birthChart = {
    sunSign: getSignValue(urlParams.get("sun"), "Sun"),
    moonSign: getSignValue(urlParams.get("moon"), "Moon"),
    risingSign: getSignValue(urlParams.get("rising"), "Rising"),
    venusSign: getSignValue(urlParams.get("venus"), "Venus"),
  };

  return birthChart;
};

const signErrorDiv = document.getElementById("signError");
const createButton = document.getElementById("createButton");

createButton.addEventListener("click", () => {
  window.location.replace("/");
});

try {
  const birthChart = getBirthChart();
  createBirthChart(birthChart);
  signErrorDiv.classList.add("hidden");
} catch {
  signErrorDiv.classList.remove("hidden");
}
