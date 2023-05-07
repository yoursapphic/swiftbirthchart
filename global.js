const styles = `<link rel="stylesheet" href="styles.css" />`;

const GenerateSpotifyIFrame = (songUrl) => {
  return `<iframe style='border-radius:12px' src='${songUrl}' width='100%' height='352' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>`;
};


const createBirthChartColumn = (grid, signObject) => {
  let column = document.createElement("div");
  column.classList.add("column");
  column.classList.add("is-6");
  column.classList.add(birthChartColumnClass);

  let columnTitle = document.createElement("h3");
  columnTitle.classList.add(birthChartTitleClass);
  columnTitle.innerText = `${signObject.Sign} ${signObject.SignType}`;

  let columnEmbed = document.createElement("div");
  columnEmbed.innerHTML = signObject.IFrameEmbed;

  column.appendChild(columnTitle);
  column.appendChild(columnEmbed);

  grid.appendChild(column);
};

const createBirthChartGrid = () => {
  let birthChartGrid = document.createElement("div");
  birthChartGrid.id = "birthChart";
  birthChartGrid.classList.add("columns");
  birthChartGrid.classList.add("is-multiline");
  birthChartGrid.classList.add(birthChartGridClass);

  return birthChartGrid;
};

const createBirthChart = (birthChart) => {
  const birthChartContainer = document.getElementById(birthChartContainerId);

  birthChartContainer.innerText = "";

  let birthChartGrid = createBirthChartGrid();

  Object.values(birthChart).forEach(
    (sign) => (sign.IFrameEmbed = GenerateSpotifyIFrame(sign.Embed))
  );

  Object.values(birthChart).forEach((sign) =>
    createBirthChartColumn(birthChartGrid, sign)
  );

  birthChartContainer.classList.remove(validationErrorClass);
  birthChartContainer.appendChild(birthChartGrid);
};
