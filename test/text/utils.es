// vim: expandtab:ts=4:sw=4
/*
 * Copyright 2015-2016 Carsten Klein
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import basicTokenTests from '../utils';


export default function basicTextTests(
    token, location, {value, visitor, isWhitespace} = {}
)
{
    basicTokenTests(token, location, {value, visitor, isWhitespace});
}


export function basicLineTests(
    token, location,
    {value, visitor, isWhitespace, isContinuation, isEscapedDirective} = {}
)
{
    basicTextTests(token, location, {value, visitor, isWhitespace});

    const actualIsEscapedDirective = !!isEscapedDirective;
    const actualIsContinuation= !!isContinuation;

    it('#isEscapedDirective == ' + actualIsEscapedDirective,
    function ()
    {
        token.isEscapedDirective.should.equal(actualIsEscapedDirective);
    });

    it('#isContinuation == ' + actualIsContinuation,
    function ()
    {
        token.isContinuation.should.equal(actualIsContinuation);
    });
}

