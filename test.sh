#!/bin/bash
gstatus=$(git st -s)
if [[ "$gstatus" == *.js* ]]
then
    casperjs test test/full.js
    exit $?
fi

