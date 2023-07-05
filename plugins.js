const plugin1 = {
    id: 'customPlugIn',
    beforeDraw: (chart, args, options) => {
        //add custom function here for formatting the chart or aggregating data
        truncateTicks(chart);
    }
  };