# Erlang for great good

- `learn-you-some-erlang` was download and unzipped from: [Learn You Some Erlang for Great Good!](https://learnyousomeerlang.com/).
- [`script`](https://linuxjm.osdn.jp/html/util-linux/man1/script.1.html) command is used to log the `erl` interpreter IO.

see also: [Erlang | Notion](https://www.notion.so/Erlang-fc5d5ae1411a4d40b95f735dcef04446)

## docs

- [Documentation - Erlang/OTP](https://www.erlang.org/docs)
- [Erlang/OTP 24.1.4](https://www.erlang.org/doc/index.html)
- [erldocs.com - Alternative Erlang Documentation](https://www.erldocs.com/)

## basics

```sh
┬─[daiki~:~/g/g/d/erlang_for_great_good]─[21:13:17]─[G:master=]
╰─>$ erl
Erlang/OTP 24 [erts-12.1.5] [source] [64-bit] [smp:16:16] [ds:16:16:10] [async-threads:1] [jit] [dtrace]

Eshell V12.1.5  (abort with ^G)
1> c("lib/linkmon").
{ok,linkmon}
2> linkmon:chain(5).
5
4
3
2
1
bomb!
** exception exit: "chain dies here"
3> //
User switch command
 --> ?
  c [nn]            - connect to job
  i [nn]            - interrupt job
  k [nn]            - kill job
  j                 - list all jobs
  s [shell]         - start local shell
  r [node [shell]]  - start remote shell
  q                 - quit erlang
  ? | h             - this message
 -->
BREAK: (a)bort (A)bort with dump (c)ontinue (p)roc info (i)nfo
       (l)oaded (v)ersion (k)ill (D)b-tables (d)istribution
┬─[daiki:~/g/g/d/erlang_for_great_good]─[21:14:02]─[G:master=]
╰─>$
```
