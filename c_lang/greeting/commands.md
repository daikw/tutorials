## 静的ライブラリを利用
```
g++ -c hello.cpp good_morning.cpp # オブジェクトファイルを生成
ar rvs libgreetings.a hello.o good_morning.o # 静的ライブラリを生成
g++ main.cpp libgreetings.a # リンク
```

## 共有ライブラリを利用
```
g++ -fPIC -c hello.cpp good_morning.cpp
g++ -shared hello.o good_morning.o -o libgreetings.so
g++ main.cpp -L. -lgreetings -Xlinker -rpath -Xlinker .
```

