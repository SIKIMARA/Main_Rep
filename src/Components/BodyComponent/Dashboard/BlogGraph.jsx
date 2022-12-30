import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { lineGraphComponent } from "../../../Common/GraphComponent";
import { useStyles } from "../BodyStyles";

export default function BlogGraph() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);

  const GraphData = [
    {
      id: "userOverViewGraph",
      dataSets: [
        {
          label: "Current Month",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: "#f2af0c",
          backgroundColor: "rgb(168 141 79 /30%)",
          fill: true,
          tension: 0.5,
        },
        {
          label: "Last Month",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: "#241a03",
          backgroundColor: "rgb(79 66 36 /30%)",
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["week1", "week2", "week3", "week4", "week5"],
    },
    {
      id: "deviceOverViewGraph",
      type: "pie",
      dataSets: [
        {
          label: "DeskTop",
          data: fakeArrayGenrator({ length: 3, digit: 1000 }),
          borderColor: ["#dfc482", "#a88d4f", "#0000000"],
          backgroundColor: ["#dfc482", "#a88d4f", "#000000"],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["Desktop", "Tablet", "Mobile"],
    },
  ];

  useEffect(() => {
    if (!fetched) {
      GraphData.map((item, i) =>
        lineGraphComponent({
          id: item.id,
          type: item.type,
          dataSets: item.dataSets,
          xAxisLabels: item.xAxisLabels,
        })
      );
    }
    setFetched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);
  return (
    <Grid container className={classes.section} spacing={1}>
      <Grid item xs={12} sm={7} md={7}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant="h6" className={classes.cardTitle} align="left">
              User Overviews
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas
              id="userOverViewGraph"
              className={classes.generalGraph}
            ></canvas>
          </CardContent>
        </Card>
      </Grid>
      {/* usedByDevices */}
      <Grid item xs={12} sm={5} md={5}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant="h6" className={classes.cardTitle} align="left">
              Used by graph
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas
              id="deviceOverViewGraph"
              className={classes.generalGraph}
            ></canvas>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
