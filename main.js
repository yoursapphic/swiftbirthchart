const validationErrorClass = "validation-error";
const birthChartTitleClass = "birth-chart-title";
const birthChartColumnClass = "birth-chart-column";
const birthChartGridClass = "birth-chart-grid";
const birthChartContainerId = "birthChartContainer";

const getBirthChart = () => {
  const sunSignContainer = document.getElementById("sunSign");
  const moonSignContainer = document.getElementById("moonSign");
  const risingSignContainer = document.getElementById("risingSign");
  const venusSignContainer = document.getElementById("venusSign");

  const birthChart = {
    sunSign: getSignValue(sunSignContainer, "Sun"),
    moonSign: getSignValue(moonSignContainer, "Moon"),
    risingSign: getSignValue(risingSignContainer, "Rising"),
    venusSign: getSignValue(venusSignContainer, "Venus"),
  };

  return birthChart;
};

const GenerateSocialLink = () => {
  const birthChart = getBirthChart();
  const sunSign = birthChart.sunSign.Sign;
  const moonSign = birthChart.moonSign.Sign;
  const risingSign = birthChart.risingSign.Sign;
  const venusSign = birthChart.venusSign.Sign;

  return window.location.href + `share?sun=${sunSign}&moon=${moonSign}&rising=${risingSign}&venus=${venusSign}`;
};

const shareButton = document.getElementById("shareButton");
shareButton.addEventListener("click", async () => {
  const link = GenerateSocialLink();
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(link);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  await copyContent();

  shareButton.innerText = "Link Copied!";
});

const getSignValue = (signSelectorContainer, signType) => {
  const shadowRoot = signSelectorContainer.shadowRoot;
  const select = shadowRoot.getElementById("sign-select");
  const sign = select.value;
  let value = sign === "" ? null : signData[sign][signType];

  if (value !== null) {
    value.SignType = signType;
    value.Sign = sign;
  }

  return value;
};

const displayValidationError = () => {
  const birthChartContainer = document.getElementById(birthChartContainerId);
  birthChartContainer.classList.add(validationErrorClass);
  birthChartContainer.innerText = "[Please fill in all fields]";
};

const analyzeButton = document.getElementById("analyzeButton");
analyzeButton.addEventListener("click", () => {
  const birthChart = getBirthChart();

  const responseIsValid = Object.values(birthChart).every(
    (sign) => sign != null
  );

  if (responseIsValid) {
    createBirthChart(birthChart);
    shareButton.classList.remove("hidden");
  } else {
    shareButton.classList.add("hidden");
    displayValidationError();
  }
});
