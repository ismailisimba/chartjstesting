

const dataArray = [400000, 500000, 5000000, 200000,];
const labelArray = ['AECF Black water red sand green forests and some other biomes too', 'AfDB', 'BGFA', 'BPF'];
const labelName = ['Opportunities by Value (USD)']

getMaxValueForChart=(arr=[1,2,3])=>{
    const maxy = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    const newmax = maxy*1.2;
    console.log("Iran")
    console.log(newmax);
    return newmax;
}



const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
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
  };







const options = {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: labelName,
        data: dataArray,
        borderWidth: 1
      }]
    },
    options: {
       plugins: {
        enabled:true,
        tooltip: {
            enabled:true,
            callbacks: {
                label: (context)=> {
                    const obj = context;
                    return obj.formattedValue
                        }
                 }
        },
        customCanvasBackgroundColor: {
            color: 'lightGreen',
          }
    },
    scales: {
        y: {
          beginAtZero: true,
          min:0,
          max:getMaxValueForChart(dataArray),
          title:{
              display:true,
              text:"Value in USD"
          },
          ticks:{
              stepSize:100000,
          }
        },
        x: {
          title:{
              display:true,
              text:"Opportunities"
          },
          ticks:{
              /*callback(value, index, ticks, xyz){
                  console.log(ticks);
                  console.log(this);
                  return value;
              }*/

          }
          
        }
      },
        },
        plugins: [plugin]
    }
  



const ctx = document.getElementById('myChart').getContext("2d");

new Chart(ctx,options);
