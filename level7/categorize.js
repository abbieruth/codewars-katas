// Categorize croquet club members
// If age is 55 or over and handicap is over 7, Senior
// Otherwise, Open

function openOrSenior(data){
    let category = []
    data.forEach(set => {
      if (set[0] >= 55 && set[1] > 7) {
        category.push('Senior')
      } else {
        category.push('Open')
      }
    })
    return category
  }