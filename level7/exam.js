// Check the exam

function checkExam(array1, array2) {
    // good luck
     let score = 0
     for (let i = 0; i < array1.length; i++) {
       if (array1[i] == array2[i]) {
         score += 4
       } else if (array2[i] == '') {
         score += 0
       } else {
         score--
       }
     }
     if (score < 0) {
       return 0
     } else {
      return score 
     }
   }