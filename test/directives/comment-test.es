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


import {
    default as Comment, DIRECTIVE_COMMENT
} from '../../src/directives/comment';
import AbstractVisitor from '../../src/visitor';

import basicDirectiveTests from './utils';
import * as fixtures from '../fixtures';


describe('Comment',
function ()
{
    const cut = new Comment(
        fixtures.TEST_LOCATION, {value:fixtures.WHITESPACE_PRESERVED}
    );

    /*eslint no-unused-vars:0*/
    class VisitorImpl extends AbstractVisitor
    {
        visitToken(token)
        {}

        visitDirective(token)
        {}

        visitComment(token)
        {}
    }

    basicDirectiveTests(
        cut, fixtures.TEST_LOCATION, DIRECTIVE_COMMENT,
        {value:fixtures.WHITESPACE_PRESERVED, visitor:VisitorImpl}
    );

    it('must not fail on missing value',
    function ()
    {
        new Comment(fixtures.TEST_LOCATION);
    });
});

