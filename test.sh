#!/bin/bash
gstatus=$(git st -s)
if [[ "$gstatus" == *.js* ]]
then
    echo "modified javascript files found..executing tests"
    casperjs test test/full.js
    exit $?
fi

