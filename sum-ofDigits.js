function digital_root(n) {
  let arr= []
 x=String(n).split("")
  console.log(x)
  for(i=0; i<x.length; i++)
    {
      x[i] = parseInt(x[i]);
    }
  sum=0;
  for(i=0; i < x.length; i++){
    sum+=x[i];
  }
  while(sum > 9){
   sum= digital_root(sum);
  }
  console.log(sum)
  return sum
}
