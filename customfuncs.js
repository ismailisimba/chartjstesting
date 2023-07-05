getMaxValueForChart=(arr=[1,2,3])=>{
    const maxy = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    const newmax = maxy*1.2;
    return newmax;
}

truncateTicks =(chart)=>{
    var axis = chart.scales['x'] || chart.scales['y'];
    
        // Loop through each tick
        axis.ticks.forEach(function (tick, index, ticks) {
          var MAX_LABEL_LENGTH = 15; // Maximum length of the label before truncation
          var label = tick.label;
          
          // Truncate the label if it's too long
          if (label.length > MAX_LABEL_LENGTH) {
            ticks[index].label = label.substring(0, MAX_LABEL_LENGTH) + '...';
          }
        });
}