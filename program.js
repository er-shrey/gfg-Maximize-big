var N,M,X,Y;
N = 3, M = 10, X = 4, Y = 2;
//N = 3, M = 10, X = 1, Y = 2;

if(X<Y){
  M += N*Y;
  N = M/X;
}
else{
  N += M/X;
}

console.log(Math.floor(N));
