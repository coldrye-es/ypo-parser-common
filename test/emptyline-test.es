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


import assert from 'esaver';

import EmptyLine from '../src/emptyline';

import * as util from './util';
import * as fixtures from './fixtures';


describe('EmptyLine',
function ()
{
    const cut = new EmptyLine(fixtures.TEST_LOCATION, fixtures.TEXT, false);

    util.basicNodeTests(cut, fixtures.TEST_LOCATION);

    it('#text must return correct value',
    function ()
    {
        assert.equal(fixtures.EMPTY, cut.text);
    });

    it('#isWhitespace must return true',
    function ()
    {
        assert.ok(cut.isWhitespace);
    });

    describe('.createNode()',
    function ()
    {
        const cut2 = EmptyLine.createNode(fixtures.TEST_LOCATION);

        it('must return properly configured instance',
        function ()
        {
            assert.deepEqual(cut, cut2);
        });
    });
});
