const graficos ={};
graficos.glucosa=()=>{
    const data={
        labels:['uno','dos','tres'],
        datasets:[{
            data: [10,20,30]
        }]
    }
    new Chart('glucosagraf',{type:'line',data})
}
graficos.glucosa();