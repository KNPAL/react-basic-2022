import "./Chart.css";
import CharBar from "./ChartBar";

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(datapoint=>datapoint.value);
  const totalMaxium = Math.max(...dataPointValues);
  return (
    <>
      <div className="chart">
        {props.dataPoints.map((datapoint) => {
          <CharBar
            value={datapoint.value}
            maxValue={null}
            label={datapoint.label}
            key={datapoint.label}
          />;
        })}
      </div>
    </>
  );
};

export default Chart;
