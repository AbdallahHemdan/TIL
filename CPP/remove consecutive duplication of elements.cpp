/**
 * using unique to remove consecutive duplication of elements
 *
 * INPUT:  [2 2 2] [1] [2] [3 3] [2] [1 1 1] [2] [3] [1] [2]
 * OUTPUT: 2 1 2 3 2 1 2 3 1 2
 **/
int n;
cin >> n;

vector<int> a(n);
for (int &i : a) cin >> i;

a.erase(unique(a.begin(), a.end()), a.end());
for (int &i : a) cout << i << ' ';
