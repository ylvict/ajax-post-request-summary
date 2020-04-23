|      | content-type                      | data / body                                                  | api       | Actual Content-Type                                          | Actual Request Body                                          | In Chrome DevTool |
| ---- | --------------------------------- | ------------------------------------------------------------ | --------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------- |
| 1    | [Default]                         | { a: 1 }                                                     | jquery    | application/x-www-form-urlencoded; charset=UTF-8             | a=1                                                          | Form Data         |
| 2    | application/json                  | { a: 1 }                                                     | jquery    | application/json                                             | a=1                                                          | Request Playload  |
| 3    | application/x-www-form-urlencoded | { a: 1 }                                                     | jquery    | application/x-www-form-urlencoded                            | a=1                                                          | Form Data         |
| 4    | text/json                         | { a: 1 }                                                     | jquery    | text/json                                                    | a=1                                                          | Request Playload  |
| 5    | [Default]                         | JSON.stringify({ a: 1 })                                     | jquery    | application/x-www-form-urlencoded; charset=UTF-8             | {"a":1}                                                      | Form Data         |
| 6    | application/json                  | JSON.stringify({ a: 1 })                                     | jquery    | application/json                                             | {"a":1}                                                      | Request Playload  |
| 7    | application/x-www-form-urlencoded | JSON.stringify({ a: 1 })                                     | jquery    | application/x-www-form-urlencoded                            | {"a":1}                                                      | Form Data         |
| 8    | text/json                         | JSON.stringify({ a: 1 })                                     | jquery    | text/json                                                    | {"a":1}                                                      | Request Playload  |
| 9    | [Default]                         | { a: 1 }                                                     | axios     | application/json;charset=UTF-8                               | {"a":1}                                                      | Request Playload  |
| 10   | application/json                  | { a: 1 }                                                     | axios     | application/json                                             | {"a":1}                                                      | Request Playload  |
| 11   | application/x-www-form-urlencoded | { a: 1 }                                                     | axios     | application/x-www-form-urlencoded                            | {"a":1}                                                      | Form Data         |
| 12   | text/json                         | { a: 1 }                                                     | axios     | text/json                                                    | {"a":1}                                                      | Request Playload  |
| 13   | [Default]                         | JSON.stringify({ a: 1 })                                     | axios     | application/x-www-form-urlencoded                            | {"a":1}                                                      | Form Data         |
| 14   | application/json                  | JSON.stringify({ a: 1 })                                     | axios     | application/json                                             | {"a":1}                                                      | Request Playload  |
| 15   | application/x-www-form-urlencoded | JSON.stringify({ a: 1 })                                     | axios     | application/x-www-form-urlencoded                            | {"a":1}                                                      | Form Data         |
| 16   | text/json                         | JSON.stringify({ a: 1 })                                     | axios     | text/json                                                    | {"a":1}                                                      | Request Playload  |
| 17   | [Default]                         | { a: 1 }                                                     | fetch api | text/plain;charset=UTF-8                                     | [object Object]                                              | Request Playload  |
| 18   | application/json                  | { a: 1 }                                                     | fetch api | application/json                                             | [object Object]                                              | Request Playload  |
| 19   | text/json                         | { a: 1 }                                                     | fetch api | text/json                                                    | [object Object]                                              | Request Playload  |
| 20   | application/x-www-form-urlencoded | { a: 1 }                                                     | fetch api | application/x-www-form-urlencoded                            | [object Object]                                              | Form Data         |
| 21   | [Default]                         | JSON.stringify({ a: 1 })                                     | fetch api | [No Data]                                                    | {"a":1}                                                      | Request Playload  |
| 22   | application/json                  | JSON.stringify({ a: 1 })                                     | fetch api | application/json                                             | {"a":1}                                                      | Request Playload  |
| 23   | text/json                         | JSON.stringify({ a: 1 })                                     | fetch api | text/json                                                    | {"a":1}                                                      | Request Playload  |
| 24   | application/x-www-form-urlencoded | JSON.stringify({ a: 1 })                                     | fetch api | application/x-www-form-urlencoded                            | {"a":1}                                                      | Form Data         |
| 25   | [Default]                         | <form><input name="a" value="1" /></form>  new FormData(form) | fetch api | multipart/form-data; boundary=----WebKitFormBoundaryNxntenZePQN3eEvt | ------WebKitFormBoundaryNxntenZePQN3eEvt Content-Disposition: form-data; name="a"  1 ------WebKitFormBoundaryNxntenZePQN3eEvt-- | Form Data         |
| 26   | application/json                  | <form><input name="a" value="1" /></form>  new FormData(form) | fetch api | application/json                                             | ------WebKitFormBoundaryPKka9nM0ZcFZFkzv Content-Disposition: form-data; name="a"  1 ------WebKitFormBoundaryPKka9nM0ZcFZFkzv-- | Request Playload  |
| 27   | text/json                         | <form><input name="a" value="1" /></form>  new FormData(form) | fetch api | text/json                                                    | ------WebKitFormBoundary5269rVAg2yTNf9F3 Content-Disposition: form-data; name="a"  1 ------WebKitFormBoundary5269rVAg2yTNf9F3-- | Request Playload  |
| 28   | application/x-www-form-urlencoded | <form><input name="a" value="1" /></form>  new FormData(form) | fetch api | application/x-www-form-urlencoded                            | ------WebKitFormBoundaryLUdAM3TDILsRNtID Content-Disposition: form-data; name="a"  1 ------WebKitFormBoundaryLUdAM3TDILsRNtID-- | Form Data         |
| 29   | [Default]                         | new URLSearchParams({a:1})                                   | fetch api | application/x-www-form-urlencoded;charset=UTF-8              | a=1                                                          | Form Data         |
| 30   | application/json                  | new URLSearchParams({a:1})                                   | fetch api | application/json                                             | a=2                                                          | Form Data         |
| 31   | text/json                         | new URLSearchParams({a:1})                                   | fetch api | text/json                                                    | a=3                                                          | Request Playload  |
| 32   | application/x-www-form-urlencoded | new URLSearchParams({a:1})                                   | fetch api | application/x-www-form-urlencoded                            | a=4                                                          | Request Playload  |
