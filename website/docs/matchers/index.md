---
sidebar_position: 1
---

# Matchers

- [.pass(message)](/docs/matchers/pass)
- [.fail(message)](/docs/matchers/fail)
- [.toBeEmpty()](/docs/matchers/tobeempty)
- [.toBeOneOf([members])](/docs/matchers/tobeoneof)
- [.toBeNil()](/docs/matchers/tobenil)
- [.toSatisfy(predicate)](/docs/matchers/tosatisfy)

## [Array](/docs/matchers/array)

- [.toBeArray()](/docs/matchers/array/#tobearray)
- [.toBeArrayOfSize()](/docs/matchers/array/#tobearrayofsize)
- [.toIncludeAllMembers([members])](/docs/matchers/array/#toincludeallmembersmembers)
- [.toIncludeAllPartialMembers([members])](/docs/matchers/array/#toincludeallpartialmembersmembers)
- [.toIncludeSamePartialMembers([members])](/docs/matchers/array/#toincludesamepartialmembers)
- [.toIncludeAnyMembers([members])](/docs/matchers/array/#toincludeanymembersmembers)
- [.toIncludeSameMembers([members])](/docs/matchers/array/#toincludesamemembersmembers)
- [.toPartiallyContain(member)](/docs/matchers/array/#topartiallycontainmember)
- [.toSatisfyAll(predicate)](/docs/matchers/array/#tosatisfyallpredicate)
- [.toSatisfyAny(predicate)](/docs/matchers/array/#tosatisfyanypredicate)
- [.toBeInRange(min, max)](/docs/matchers/array/#tobeinrangemin-max)

## [Boolean](/docs/matchers/boolean)

- [.toBeBoolean()](/docs/matchers/boolean/#tobeboolean)
- [.toBeTrue()](/docs/matchers/boolean/#tobetrue)
- [.toBeFalse()](/docs/matchers/boolean/#tobefalse)

## [Date](/docs/matchers/date)

- [.toBeDate()](/docs/matchers/date/#tobedate)
- [.toBeValidDate()](/docs/matchers/date/#tobevaliddate)
- [.toBeAfter(date)](/docs/matchers/date/#tobeafterdate)
- [.toBeBefore(date)](/docs/matchers/date/#tobebeforedate)
- [.toBeAfterOrEqualTo(date)](/docs/matchers/date/#tobeafterorequaltodate)
- [.toBeBeforeOrEqualTo(date)](/docs/matchers/date/#tobebeforeorequaltodate)
- [.toBeBetween(startDate, endDate)](/docs/matchers/date/#tobebetweenstartdate-enddate)

## [Function](/docs/matchers/function)

- [.toBeFunction()](/docs/matchers/function/#tobefunction)
- [.toThrowWithMessage()](/docs/matchers/function/#tothrowwithmessagetype-message)

## [Mock](/docs/matchers/mock)

- [.toHaveBeenCalledBefore()](/docs/matchers/mock/#tohavebeencalledbefore)
- [.toHaveBeenCalledAfter()](/docs/matchers/mock/#tohavebeencalledafter)
- [.toHaveBeenCalledOnce()](/docs/matchers/mock/#tohavebeencalledonce)
- [.toHaveBeenCalledExactlyOnceWith()](/docs/matchers/mock/#tohavebeencalledexactlyoncewith)

## [Number](/docs/matchers/number)

- [.toBeNumber()](/docs/matchers/number/#tobenumber)
- [.toBeNaN()](/docs/matchers/number/#tobenan)
- [.toBeFinite()](/docs/matchers/number/#tobefinite)
- [.toBePositive()](/docs/matchers/number/#tobepositive)
- [.toBeNegative()](/docs/matchers/number/#tobenegative)
- [.toBeEven()](/docs/matchers/number/#tobeeven)
- [.toBeOdd()](/docs/matchers/number/#tobeodd)
- [.toBeWithin(start, end)](/docs/matchers/number/#tobewithinstart-end)
- [.toBeInteger()](/docs/matchers/number/#tobeinteger)

## [Object](/docs/matchers/object)

- [.toBeObject()](/docs/matchers/object/#tobeobject)
- [.toBeEmptyObject()](/docs/matchers/object/#tobeemptyobject)
- [.toContainKey(key)](/docs/matchers/object/#tocontainkeykey)
- [.toContainKeys([keys])](/docs/matchers/object/#tocontainkeyskeys)
- [.toContainAllKeys([keys])](/docs/matchers/object/#tocontainallkeyskeys)
- [.toContainAnyKeys([keys])](/docs/matchers/object/#tocontainanykeyskeys)
- [.toContainValue(value)](/docs/matchers/object/#tocontainvaluevalue)
- [.toContainValues([values])](/docs/matchers/object/#tocontainvaluesvalues)
- [.toContainAllValues([values])](/docs/matchers/object/#tocontainallvaluesvalues)
- [.toContainAnyValues([values])](/docs/matchers/object/#tocontainanyvaluesvalues)
- [.toContainEntry([key, value])](/docs/matchers/object/#tocontainentrykey-value)
- [.toContainEntries([[key, value]])](/docs/matchers/object/#tocontainentrieskey-value)
- [.toContainAllEntries([[key, value]])](/docs/matchers/object/#tocontainallentrieskey-value)
- [.toContainAnyEntries([[key, value]])](/docs/matchers/object/#tocontainanyentrieskey-value)
- [.toBeExtensible()](/docs/matchers/object/#tobeextensible)
- [.toBeFrozen()](/docs/matchers/object/#tobefrozen)
- [.toBeSealed()](/docs/matchers/object/#tobesealed)

## [Promise](/docs/matchers/promise)

- [.toResolve()](/docs/matchers/promise/#toresolve)
- [.toReject()](/docs/matchers/promise/#toreject)

## [String](/docs/matchers/string)

- [.toBeString()](/docs/matchers/string/#tobestring)
- [.toBeHexadecimal(string)](/docs/matchers/string/#tobehexadecimal)
- [.toBeDateString(string)](/docs/matchers/string/#tobedatestringstring)
- [.toEqualCaseInsensitive(string)](/docs/matchers/string/#toequalcaseinsensitivestring)
- [.toStartWith(prefix)](/docs/matchers/string/#tostartwithprefix)
- [.toEndWith(suffix)](/docs/matchers/string/#toendwithsuffix)
- [.toInclude(substring)](/docs/matchers/string/#toincludesubstring)
- [.toIncludeRepeated(substring, times)](/docs/matchers/string/#toincluderepeatedsubstring-times)
- [.toIncludeMultiple([substring])](/docs/matchers/string/#toincludemultiplesubstring)
- [.toEqualIgnoringWhitespace(string)](/docs/matchers/string/#toequalignoringwhitespacestring)

## [Symbol](/docs/matchers/symbol)

- [.toBeSymbol()](/docs/matchers/symbol/#tobesymbol)
