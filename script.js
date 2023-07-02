

const dataArray = [400000, 500000, 5000000, 200000,];
const labelArray = ['AECF Black water red sand green forests and some other biomes too', 'AfDB', 'BGFA', 'BPF'];
const labelName = ['Opportunities by Value (USD)']

getMaxValueForChart=(arr=[1,2,3])=>{
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    const newmax = max*1.2;
    return newmax;
}




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
              enabled: true,
              callbacks: {
                  label: (context)=> {
                      let label = context.dataset.label || '';
                        console.log("lll")
                      if (label) {
                          label += ': ';
                      }
                      if (context.parsed.y !== null) {
                          label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                      }
                      return label;
                  }
              }
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
            }
          },
          x: {
            title:{
                display:true,
                text:"Opportunities"
            }
          }
        }
    }
  }



const ctx = document.getElementById('myChart').getContext("2d");

//new Chart(ctx,options);


const chart = new Chart(ctx, {
    type: 'line',
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
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        }
    }
});



const image = new Image();
image.src = chart.toBase64Image();;
document.body.appendChild(image);
