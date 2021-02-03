const compact = array => {
    array = array.filter(element => !!element)
    return array;
   }
   
   const data = [0, 1, false, 2, undefined, '', 3, null];
   console.log(compact(data))
