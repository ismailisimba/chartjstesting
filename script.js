

const dataArray = [400000, 500000, 5000000, 200000,];
const labelArray = ['AECF Black water red sand green forests and some other biomes too', 'AfDB', 'BGFA', 'BPF'];
const labelName = ['Opportunities by Value (USD)']

console.log(new server);













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
        customPlugIn: {
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
        plugins: [plugin1]
    }
  



const ctx = document.getElementById('myChart').getContext("2d");

new Chart(ctx,options);
