/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
require('dotenv').config();

const MY_SECRET_KEY = process.env.cloudbuildyaml;

console.log(MY_SECRET_KEY);

const app = express();
const zmienna = 1;
const zmiennaSrodowiskowa = (process.env.cloudbuildyaml) || 'nie zdefiniowano';
app.get('/', (req, res) => {
        res.send('Hello World!' + zmiennaSrodowiskowa.toString() );
    });

const port = parseInt(process.env.PORT) || 8080;

const server = app.listen(port, () => {
        console.log('listening on port %s.\n', server.address().port);
    });

module.exports = app;
