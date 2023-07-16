-module(linkmon).
-compile([nowarn_export_all, export_all]).

myproc() ->
    timer:sleep(5000),
    exit(reason).

chain(0) ->
    receive
        _ -> ok
    after 500 ->
        io:format("bomb!~n"),
        exit("chain dies here")
    end;
chain(N) ->
    Pid = spawn(fun() -> chain(N-1) end),
    io:format("~s~n", [integer_to_list(N)]),
    link(Pid),
    receive
        _ -> ok
    end.
