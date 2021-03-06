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


import AbstractToken from '../src/token';
import AbstractVisitor from '../src/visitor';


import basicTokenTests from './utils';
import {TEST_LOCATION} from './fixtures';


describe('AbstractToken',
function ()
{
    class TokenImpl extends AbstractToken
    {}

    /*eslint no-unused-vars:0*/
    class VisitorImpl extends AbstractVisitor
    {
        visitToken(token)
        {}
    }

    const cut = new TokenImpl(TEST_LOCATION);

    basicTokenTests(cut, TEST_LOCATION, {visitor:VisitorImpl});

    it('must not fail on missing location',
    function ()
    {
        function tc()
        {
            new TokenImpl();
        }
        tc.should.not.throw(TypeError);
    });

    it('must fail on invalid location',
    function ()
    {
        function tc()
        {
            new TokenImpl({});
        }
        tc.should.throw(TypeError, 'location must be an instance');
    });

    it('#isWhitespace must return false',
    function ()
    {
        cut.isWhitespace.should.not.be.ok;
    });

    it('#validateValue() must throw on non undefined, non string value',
    function ()
    {
        function tc()
        {
            cut.validateValue(new Object());
        }
        tc.should.throw(TypeError, 'value must be a string');
    });
});

