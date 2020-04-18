import { view, lensPath, pipe, trim, ifElse, isEmpty, pathOr  } from 'ramda';

function getVerboseGetKey(e) {
    const searchKeyValue = lensPath([
        'target',
        'value'
    ])

    const defaultTrim = ifElse(
        isEmpty,
        '',
        trim
    )

    const getKeyValue = pipe(
        view(searchKeyValue),
        defaultTrim
    )

    return getKeyValue(event)
}

function getAdvancedGetKey(e){
    return (pipe(
        pathOr('', ['target', 'value']),
        trim
    ))(e)
}

export { getVerboseGetKey, getAdvancedGetKey}