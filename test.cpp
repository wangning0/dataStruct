#include<iostream>
#include<cstdio>
#include<cstring>
int data[100];
void paixu(int l, int r)
{
  int i = l;
  int j = r; 
  int mid = (l+r) >>1;
  while (i < j)
  {
    while (data[i] < data[mid]) i++;
    while (data[j] > data[mid]) j--;
    if (i <= j )
    {
      int tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
      i++;
      j--;
    }
  }
  if (i < r ) paixu(i,r);
  if (l < j)  paixu(l,j);
}
int main()
{
    int n ;
    scanf("%d", &n);
    for (int i = 1 ; i <=n ;i++)
      scanf("%d", &data[i]);
    //paixu(1,n);
    for (int i = 1; i <=n ;i++)
      printf("%d", data[i]);
}