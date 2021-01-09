const approved = ["Agatha", "Aldo", "Daniel", "Raquel"]

approved.forEach(function(name, index){
    console.log(`${index + 1}) ${name}`)
})

approved.forEach(name => console.log(name))

const showApproved = approved => console.log(approved)
approved.forEach(showApproved)